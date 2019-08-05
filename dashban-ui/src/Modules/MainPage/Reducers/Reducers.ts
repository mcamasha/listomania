import { IMainPageReduxStore } from '../Models';
import { MAIN_PAGE_ACTION } from '../Actions/ActionTypes';
import { AsyncDataStatus, AsyncActionStatus } from 'Store/Models';

const initialState: IMainPageReduxStore = {
    boards: {
        status: AsyncDataStatus.IDLE,
        data: null,
        error: null
    }
}

/**
 * Reducer for main page redux store.
 *
 * @param {IMainPageReduxStore} state
 * @param {any} action
 */
export const MainPageReducer = (state: IMainPageReduxStore = initialState, action: any): IMainPageReduxStore => {
    switch (action.type) {
        case MAIN_PAGE_ACTION.CLEAR_BOARDS_DATA:
            return {
                ...state,
                boards: initialState.boards
            }
        case `${MAIN_PAGE_ACTION.GET_BOARDS}_${AsyncActionStatus.PENDING}`:
        case `${MAIN_PAGE_ACTION.CREATE_BOARD}_${AsyncActionStatus.PENDING}`:
            return {
                ...state,
                boards: {
                    status: AsyncDataStatus.IDLE,
                    data: null,
                    error: null
                }
            }
        case `${MAIN_PAGE_ACTION.GET_BOARDS}_${AsyncActionStatus.FULFILLED}`:
        case `${MAIN_PAGE_ACTION.CREATE_BOARD}_${AsyncActionStatus.FULFILLED}`:
            return {
                ...state,
                boards: {
                    status: AsyncDataStatus.SUCCESS,
                    data: action.boards,
                    error: null
                }
            }
        case `${MAIN_PAGE_ACTION.CREATE_BOARD}_${AsyncActionStatus.REJECTED}`:
        case `${MAIN_PAGE_ACTION.GET_BOARDS}_${AsyncActionStatus.REJECTED}`:
            return {
                ...state,
                boards: {
                    status: AsyncDataStatus.FAILED,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export {MainPageReducer as MainPageModule};