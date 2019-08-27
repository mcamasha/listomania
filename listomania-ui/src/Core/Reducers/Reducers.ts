import { ICoreReduxStore } from '../Models';
import { CORE_ACTIONS } from '../Actions/ActionTypes';
import { AsyncDataStatus, AsyncActionStatus } from 'Store/Models';

const initialState: ICoreReduxStore = {
    user: {
        status: AsyncDataStatus.IDLE,
        data: null,
        error: null
    }
}

/**
 * Reducer for core redux store.
 *
 * @param {ICoreReduxStore} state
 * @param {any} action
 */
const CoreReducer = (state: ICoreReduxStore = initialState, action: any): ICoreReduxStore => {
    switch (action.type) {
        case `${CORE_ACTIONS.CHANGE_LANGUAGE}_${AsyncActionStatus.PENDING}`:
            return {
                ...state,
                user: {
                    status: AsyncDataStatus.IDLE, // TODO
                    data: null,
                    error: null
                }
            }
        case `${CORE_ACTIONS.CHANGE_LANGUAGE}_${AsyncActionStatus.FULFILLED}`:
            return {
                ...state,
                user: {
                    status: AsyncDataStatus.SUCCESS,
                    data: action.user,
                    error: null
                }
            }
        case `${CORE_ACTIONS.CHANGE_LANGUAGE}_${AsyncActionStatus.REJECTED}`:
            return {
                ...state,
                user: {
                    status: AsyncDataStatus.FAILED,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export {CoreReducer as CoreModule};