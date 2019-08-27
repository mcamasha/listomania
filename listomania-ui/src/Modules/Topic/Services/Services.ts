import axios, {AxiosPromise} from 'axios';
import {ITopic} from "../Models";
import {siteUrl} from '../../../Core/Const';

export interface ITopicService {
    getBoardById(topicId: string): AxiosPromise<ITopic>;
    updateTopic(topic: ITopic): AxiosPromise<ITopic>;
}

const REST_URL = `${siteUrl}/`;

export class TopicService implements ITopicService {
    getBoardById(topicId: string): AxiosPromise<ITopic> {
        return axios.get(`${REST_URL}/${topicId}`);
    }

    updateTopic(topic: ITopic): AxiosPromise<ITopic> {
        return axios.put(`${REST_URL}/${topic.id}`, topic);
    }
}