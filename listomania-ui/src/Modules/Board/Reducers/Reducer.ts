import { IBoardReduxStore } from '../Models';
import { BOARD } from '../Actions/ActionTypes';
import { AsyncDataStatus, IAppStore, AsyncActionStatus } from 'Store/Models';

const initialState: IBoardReduxStore = {
    board: {
        status: AsyncDataStatus.IDLE,
        data: null,
        error: null
    }
}

/**
 * Reducer for board redux store.
 *
 * @param {IBoardReduxStore} state
 * @param {any} action
 */
export const BoardReducer = (state: IBoardReduxStore = initialState, action: any): IBoardReduxStore => {
    switch (action.type) {
        case BOARD.CLEAR_BOARD_DATA:
            return {
                ...state,
                board: initialState.board
            }
        case `${BOARD.GET_BOARD}_${AsyncActionStatus.PENDING}`:
        case `${BOARD.UPDATE_BOARD}_${AsyncActionStatus.PENDING}`:
            return {
                ...state,
                board: {
                    data: null,
                    error: null,
                    status: AsyncDataStatus.IDLE
                }
            }
        case `${BOARD.UPDATE_BOARD}_${AsyncActionStatus.FULFILLED}`:
        case `${BOARD.GET_BOARD}_${AsyncActionStatus.FULFILLED}`:
            return {
                ...state,
                board: {
                    status: AsyncDataStatus.SUCCESS,
                    data: action.board,
                    error: null
                }
            }
        case `${BOARD.UPDATE_BOARD}_${AsyncActionStatus.REJECTED}`:
        case `${BOARD.GET_BOARD}_${AsyncActionStatus.REJECTED}`:
            return {
                ...state,
                board: {
                    status: AsyncDataStatus.FAILED,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export {BoardReducer as BoardModule};