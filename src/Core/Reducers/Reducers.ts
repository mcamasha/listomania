import {ICoreReduxStore} from '../Models';
import {CORE} from '../Actions/ActionTypes';
import {ELanguage} from '../Enums';

const initialState: ICoreReduxStore = {
    language: ELanguage.ENGLISH
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
            language: action.language
          }
        default:
          return state
    }
}
