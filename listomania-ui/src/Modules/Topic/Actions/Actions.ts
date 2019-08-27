import {ITopic} from '../Models';
import {Dispatch} from 'redux';
import {ITopicService} from '../Services/Services';
import {TOPIC} from './ActionTypes';
import { AxiosPromise } from 'axios';

export interface ITopicActions {
    getTopicById(topicId: string): AxiosPromise<ITopic>;
    updateTopic(topic: ITopic): AxiosPromise<ITopic>;
    clearTopicData(): void;
}

export class TopicActions<T extends ITopicService> implements ITopicActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) {}

    getTopicById(topicId: string): AxiosPromise<ITopic> {
        this.dispatch({type: `${TOPIC.GET_TOPIC}_BEGIN`});

        return this.service.getTopicById(topicId)
            .then(
                (response) => {
                    this.dispatch({type: `${TOPIC.GET_TOPIC}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${TOPIC.GET_TOPIC}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    updateTopic(topic: ITopic): AxiosPromise<ITopic> {
        this.dispatch({type: `${TOPIC.UPDATE_Topic}_BEGIN`});

        return this.service.updateTopic(topic)
            .then(
                (response) => {
                    this.dispatch({type: `${TOPIC.UPDATE_TOPIC}_SUCCESS`, Topic: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${TOPIC.UPDATE_TOPIC}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    clearTopicData(): void {
        this.dispatch({type: TOPIC.CLEAR_TOPIC_DATA});
    }
}
