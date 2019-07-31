import {IBoard} from '../Models';
import {BOARD} from '../Actions/ActionTypes';

// move to Models
interface IBoardReduxStore {
    board: IBoard;
}

const initialState: IBoardReduxStore = {
    board: null
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
        case BOARD.UPDATE_BOARD:
            return {
                ...state,
                board: action.board
            }
        default:
            return state
    }
}
