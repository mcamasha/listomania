import {IBoard} from '../Models';
import {BOARD} from '../Actions/ActionTypes';
import {AxiosPromise} from 'axios';

// move to Models
interface IBoardReduxStore {
    board: AxiosPromise<IBoard>;
}

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
        case BOARD.GET_BOARD:
            return {
                ...state,
                board: action.board
            }
        case BOARD.UPDATE_BOARD:
            return {
                ...state,
                board: action.board
            }
        default:
            return state
    }
}
