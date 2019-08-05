import { ILoginReduxStore } from '../Models';
import { LOGIN_ACTIONS } from '../Actions/ActionTypes';
import { AsyncDataStatus, AsyncActionStatus } from 'Store/Models';

const initialState: ILoginReduxStore = {
    user: {
        status: AsyncDataStatus.IDLE,
        data: null,
        error: null
    }
}

/**
 * Reducer for core redux store.
 *
 * @param {ILoginReduxStore} state
 * @param {any} action
 */
const LoginReducer = (state: ILoginReduxStore = initialState, action: any): ILoginReduxStore => {
    switch (action.type) {
        case `${LOGIN_ACTIONS.LOGIN}_${AsyncActionStatus.PENDING}`:
            return {
                ...state,
                user: {
                    status: AsyncDataStatus.IDLE,
                    data: null,
                    error: null
                }
            }
        case `${LOGIN_ACTIONS.LOGIN}_${AsyncActionStatus.FULFILLED}`:
            return {
                ...state,
                user: {
                    status: AsyncDataStatus.SUCCESS,
                    data: action.user,
                    error: null
                }
            }
        case `${LOGIN_ACTIONS.LOGIN}_${AsyncActionStatus.REJECTED}`:
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

export {LoginReducer as LoginModule};
