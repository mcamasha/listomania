import {ITopicReduxStore} from '../Models';
import {TOPIC} from '../Actions/ActionTypes';
import {AsyncDataStatus, AsyncActionStatus} from 'Store/Models';

const initialState: ITopicReduxStore = {
    topic: {
        status: AsyncDataStatus.IDLE,
        data: null,
        error: null
    }
}

/**
 * Reducer for topic redux store.
 *
 * @param {ITopicReduxStore} state
 * @param {any} action
 */
export const TopicReducer = (state: ITopicReduxStore = initialState, action: any): ITopicReduxStore => {
    switch (action.type) {
        case TOPIC.CLEAR_TOPIC_DATA:
            return {
                ...state,
                topic: initialState.topic
            }
        case `${TOPIC.GET_TOPIC}_${AsyncActionStatus.PENDING}`:
        case `${TOPIC.UPDATE_TOPIC}_${AsyncActionStatus.PENDING}`:
            return {
                ...state,
                topic: {
                    data: null,
                    error: null,
                    status: AsyncDataStatus.IDLE
                }
            }
        case `${TOPIC.UPDATE_TOPIC}_${AsyncActionStatus.FULFILLED}`:
        case `${TOPIC.GET_TOPIC}_${AsyncActionStatus.FULFILLED}`:
            return {
                ...state,
                topic: {
                    status: AsyncDataStatus.SUCCESS,
                    data: action.board,
                    error: null
                }
            }
        case `${TOPIC.UPDATE_TOPIC}_${AsyncActionStatus.REJECTED}`:
        case `${TOPIC.GET_TOPIC}_${AsyncActionStatus.REJECTED}`:
            return {
                ...state,
                topic: {
                    status: AsyncDataStatus.FAILED,
                    data: null,
                    error: action.error
                }
            }
        default:
            return state
    }
}

export {TopicReducer as TopicModule};