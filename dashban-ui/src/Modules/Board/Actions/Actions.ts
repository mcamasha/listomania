import {IBoard, IList, ICard} from '../Models';
import {Dispatch} from 'redux';
import {IBoardService} from '../Services/Services';
import {BOARD} from './ActionTypes';

export interface IBoardActions {
    getBoardById(boardId: string): Promise<IBoard>;
    updateBoard(board: IBoard): Promise<IBoard>;
    clearBoardData(): void;
}

export class BoardActions<T extends IBoardService> implements IBoardActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) {}

    async getBoardById(boardId: string): Promise<IBoard> {
        this.dispatch({type: `${BOARD.GET_BOARD}_BEGIN`});

        return this.service.getBoardById(boardId)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.GET_BOARD}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.GET_BOARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async updateBoard(board: IBoard): Promise<IBoard> {
        this.dispatch({type: `${BOARD.UPDATE_BOARD}_BEGIN`});

        return this.service.updateBoard(board)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.UPDATE_BOARD}_SUCCESS`, board: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.UPDATE_BOARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    clearBoardData(): void {
        this.dispatch({type: BOARD.CLEAR_BOARD_DATA});
    }
}
