import {IBoardView} from "../Models";
import {IMainPageActions} from "../Actions/Actions";
import {useEffect, useState} from 'react';
import * as React from 'react';
import {isEmpty, get} from 'lodash';
import ReactModal from 'react-modal';
import {getEmptyNewBoard} from "../Utils/Utils";
import {EBoardVisibility} from "../Enums";
import {Redirect} from "react-router";

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

    const [newBoard, setNewBoard] = useState<IBoardView>(getEmptyNewBoard());
    const [isOpenCreationModal, setIsOpenCreationModal] = useState<boolean>(false);
    const [isRedirectToBoard, setIsRedirectToBoard] = useState<boolean>(false);
    const [selectedBoardId, setSelectedBoardId] = useState<string>(null);

    const isCreateBoardButtonDisabled: boolean = !get(newBoard, 'name', null);

    useEffect(() => {
        actions.getBoardsByUserId(userId);

        // Remove boards data from redux.
        return () => actions.clearBoardsData();
    }, []);

    useEffect(() => {
        actions.createBoard(userId, newBoard);
    }, [newBoard]);

    const handleCreateBoard = () => {
        actions.createBoard(userId, newBoard).then(() => {
            setNewBoard(null);
            setIsOpenCreationModal(false);
        })
    }

    const handleBoardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const updatedBoard: IBoardView = {...newBoard};

        updatedBoard.name = event.currentTarget.value;

        setNewBoard(updatedBoard);
    }

    const handleCloseModal = () => {
        setIsOpenCreationModal(false);
    }

    const handleOpenModal = () => {
        setIsOpenCreationModal(true);
    }

    const handleBoardVisibilityChange = (event: any) => {
        const updatedBoard: IBoardView = {...newBoard};

        updatedBoard.visibility = event.currentTarget.value;

        setNewBoard(updatedBoard);
    }

    const handleBoardClick = (id: string) => () => {
        setSelectedBoardId(id);
        setIsRedirectToBoard(true);
    }

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
                            <div key={index} onClick={handleBoardClick(board.id)}>
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
            {isOpenCreationModal && (
                <ReactModal
                    isOpen={isOpenCreationModal}
                    shouldCloseOnEsc
                    shouldCloseOnOverlayClick
                    onRequestClose={handleCloseModal}
                    ariaHideApp={false}
                    style={{
                        content: {
                            width: '300px',
                            height: '300px'
                        }
                    }}
                >
                    <div>
                        <input
                            type="text"
                            placeholder="Add board title"
                            value={newBoard.name}
                            onChange={handleBoardNameChange}
                        />
                    </div>
                    <div>
                        <select onChange={handleBoardVisibilityChange} value={newBoard.visibility}>
                            <option value={EBoardVisibility.PRIVATE}>Private</option>
                            <option value={EBoardVisibility.PUBLIC}>Public</option>
                        </select>
                    </div>
                    <button onClick={handleCloseModal}>Close Modal</button>
                    <button
                        onClick={handleCreateBoard}
                        disabled={isCreateBoardButtonDisabled}
                    >
                        Create Board
                    </button>
                </ReactModal>
            )}
            {!isEmpty(boards) && renderBoards()}
            <button
                onClick={handleOpenModal}
            >
                Create new board
            </button>
            {
                isRedirectToBoard && <Redirect to={`/board/${selectedBoardId}`} />
            }
        </div>
    )
}
