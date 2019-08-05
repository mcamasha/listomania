import { IBoardView } from "../Models";
import { IMainPageActions } from "../Actions/Actions";
import { useEffect } from 'react';
import * as React from 'react';
import { IBoard } from "Modules/Board/Models";
import {isEmpty} from 'lodash';

interface IProps {
    boards: IBoardView[];
    t: Function;
    actions: IMainPageActions;
    userId: string;
}

/**
 * Component - board page which contains lists of cards - the main content of app.
 */
export const BoardsView = (props: IProps): JSX.Element => {
    const {
        t,
        boards,
        actions,
        userId
    } = props;
    
    useEffect(() => {
        // actions.getBoardsByUserId(userId);

        // Указываем, как сбросить этот эффект:
        return () => actions.clearBoardsData();
    }, []);

    const renderBoards = () => {
        const recentViewBoards: IBoardView[] = boards.filter((board) => board.isRecentViewed);

        return (
            <React.Fragment>
                {!isEmpty(recentViewBoards) && (
                    <div>
                        <div>Recently Viewed</div>
                        {recentViewBoards.map((board: IBoardView, index: number) => {
                            return (
                                <div key={index}>
                                    {board.name}
                                </div>
                            )
                        })}
                    </div>
                )}
                <div>
                    <div>Personal Boards</div>
                    {boards.map((board: IBoardView, index: number) => {
                        return (
                            <div key={index}>
                                {board.name}
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    };

    return (
        <div className="board-page">
            {!isEmpty(boards) && renderBoards()}
            <button>Create new board</button>
        </div>
    )
}
