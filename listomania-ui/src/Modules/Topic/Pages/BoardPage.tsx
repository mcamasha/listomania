import {isEmpty, get}  from 'lodash';
import * as React from 'react';
import {useState, useEffect} from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {compose, Dispatch} from 'redux';
import {IList, ICard, IBoard} from '../Models';
import {List} from '../Components/List';
import {IBoardActions, BoardActions} from '../Actions/Actions'
import {BoardService} from '../Services/Services';
import {IAppStore, AsyncData} from 'Store/Models';
import {RouteComponentProps} from 'react-router';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IOwnProps {
    t: Function;
}

interface IMatchParams {
    id: string;
}

interface IStateProps {
    board: AsyncData<IBoard>;
}

interface IDispatchProps {
    actions: IBoardActions;
}

type TProps = IStateProps & IOwnProps & IDispatchProps & RouteComponentProps<IMatchParams>;

/**
 * Component - board page which contains lists of cards - the main content of app.
 */
const BoardPage = (props: TProps): JSX.Element => {
    const {
        t,
        board,
        board: {
            data: boardData,
            status: boardStatus
        },
        actions,
        match
    } = props;

    const boardHasLists: boolean = !!get(board, 'data.lists', false);
    const addListButtonTitle: string = boardHasLists ? 'Add another list' : 'Add a list';
    const [updatedBoard, setUpdatedBoard] = useState<IBoard>(null);
    const boardId: string = match.params.id;

    useEffect(() => {
        actions.getBoardById(boardId);

        // Указываем, как сбросить этот эффект:
        return () => actions.clearBoardData();
    }, []);

    // useEffect(() => {
    //     actions.updateBoard(updatedBoard);

    //     // Указываем, как сбросить этот эффект:
    //     return () => actions.clearBoardData();
    // }, [updatedBoard]);

    const handleAddCard = (listIndex: number, title: string) => {
        const {lists} = boardData;
        const updatedCards = !isEmpty(lists[listIndex].cards) ? [...lists[listIndex].cards] : [];

        updatedCards.push({title});
        setUpdatedBoard(updatedBoard);
    };

    const renderCards = (cards: ICard[]) => {
        return (
            <div>
                {cards.map((card) => <div> 1</div>)}
            </div>
        )
    };

    const renderLists = () => {
        return (
            <div>
                {boardData.lists.map((list: IList, index: number) => {
                    const {cards, title} = list;

                    return (
                        <List
                            cards={cards}
                            onAddCard={handleAddCard}
                            title={title}
                            key={index}
                            t={t}
                            onUpdateCards={() => console.log(1)}
                            listIndex={index}
                        />
                    )
                })}
            </div>
        )
    };

    return (
        <div className="board-page">
            {boardHasLists && renderLists()}
            <button>{addListButtonTitle}</button>
        </div>
    )
}

const mapStateToProps = (state: IAppStore): IStateProps => { // TODO: replace any
    return {
        board: state.BoardModule.board // TODO: replace BoardReducer to Board
    }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        actions: new BoardActions(new BoardService, dispatch)
    }
}

export default compose<React.SFC>(
    withTranslation('boardPage'),
    connect(mapStateToProps, mapDispatchToProps)
)(BoardPage);
