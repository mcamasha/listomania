import {isEmpty}  from 'lodash';
import * as React from 'react';
import {withTranslation} from 'react-i18next';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {IList, ICard} from '../Models';
import {List} from '../Components/List';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IOwnProps {
    t: Function;
}

interface IStateProps {
    lists: IList[];
}

type TProps = IStateProps & IOwnProps;

/**
 * Component - board page which contains lists of cards - the main content of app.
 */
const BoardPage = (props: TProps): JSX.Element => {
    const {
        t,
        lists
    } = props;

    const addListButtonTitle: string = !isEmpty(lists) ? 'Add another list' : 'Add a list';

    const handleAddCard = (listIndex: number, title: string) => {
        const updatedCards = !isEmpty(lists[listIndex].cards) ? [...lists[listIndex].cards] : [];

        updatedCards.push({title});
    };

    const renderCards = (cards: ICard[]) => {
        return (
            <div>
                {cards.map((card) => )}
            </div>
        )
    };

    const renderLists = () => {
        return (
            <div>
                {lists.map((list: IList, index: number) => {
                    const {cards, title} = list;

                    return (
                        <List
                            cards={cards}
                            onAddCard={handleAddCard}
                            title={title}
                            key={index}
                            t={t}
                            onUpdateCards={handleUpdateCards}
                        />
                    )
                })}
            </div>
        )
    };

    return (
        <div className="board-page">
            {!isEmpty(lists) && renderLists()}
            <button>{addListButtonTitle}</button>
        </div>
    )
}

const mapStateToProps = (state: any): IStateProps => { // TODO: replace any
    return {
        lists: state.BoardReducer.lists // TODO: replace CoreReducer to Core
    }
}

export const BoardPageContainer = compose<React.SFC>(
    withTranslation('boardPage'),
    connect(mapStateToProps)
)(BoardPage);
