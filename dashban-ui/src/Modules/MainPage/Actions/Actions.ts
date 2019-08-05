import { IBoardView } from '../Models';
import { Dispatch } from 'redux';
import { IMainPageService } from '../Services/Services';
import { MAIN_PAGE_ACTION } from './ActionTypes';
import { AxiosPromise } from 'axios';

export interface IMainPageActions {
    getBoardsByUserId(userId: string): AxiosPromise<IBoardView[]>;
    createBoard(userId: string, board: IBoardView): AxiosPromise<IBoardView[]>;
    clearBoardsData(): void;
}

export class MainPageActions<T extends IMainPageService> implements IMainPageActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) { }

    getBoardsByUserId(userId: string): AxiosPromise<IBoardView[]> {
        this.dispatch({ type: `${MAIN_PAGE_ACTION.GET_BOARDS}_BEGIN` });

        return this.service.getBoardsByUserId(userId)
            .then(
                (response) => {
                    this.dispatch({ type: `${MAIN_PAGE_ACTION.GET_BOARDS}_SUCCESS`, boards: response });
                    return response;
                },
                (error) => {
                    this.dispatch({ type: `${MAIN_PAGE_ACTION.GET_BOARDS}_FAILED`, error: error })
                    throw error;
                }
            );
    };

    createBoard(userId: string, board: IBoardView): AxiosPromise<IBoardView[]> {
        this.dispatch({ type: `${MAIN_PAGE_ACTION.CREATE_BOARD}_BEGIN` });

        return this.service.createBoard(userId, board)
            .then(
                (response) => {
                    this.dispatch({ type: `${MAIN_PAGE_ACTION.CREATE_BOARD}_SUCCESS`, boards: response });
                    return response;
                },
                (error) => {
                    this.dispatch({ type: `${MAIN_PAGE_ACTION.CREATE_BOARD}_FAILED`, error: error })
                    throw error;
                }
            );
    };

    clearBoardsData(): void {
        this.dispatch({ type: MAIN_PAGE_ACTION.CLEAR_BOARDS_DATA });
    }
}
