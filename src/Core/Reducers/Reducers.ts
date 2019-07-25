import {ICoreReduxStore} from '../Models';
import {CORE} from '../Actions/ActionTypes';

const initialState: ICoreReduxStore = {
    language: 'en'
}

/**
 * Reducer for core redux store.
 *
 * @param {ICoreReduxStore} state
 * @param {any} action
 */
export const CoreReducer = (state: ICoreReduxStore = initialState, action: any) => {
    switch (action.type) {
        case CORE.CHANGE_LANGUAGE:
          return {
            ...state,
            language: action.payload
          }
        default:
          return state
    }
}
