import axios, {AxiosPromise} from 'axios';
import {IBoardView} from "../Models";
import {siteUrl} from 'Core/Const';

export interface IMainPageService {
    getBoardsByUserId(userId: string): AxiosPromise<IBoardView[]>;
    createBoard(userId: string, board: IBoardView): AxiosPromise<IBoardView[]>;
}

const REST_URL = `${siteUrl}/boards`;

export class MainPageService implements IMainPageService {
    getBoardsByUserId(userId: string): AxiosPromise<IBoardView[]> {
        return axios.get(`${REST_URL}/user${userId}`);
    }

    createBoard(userId: string, board: IBoardView): AxiosPromise<IBoardView[]> {
        return axios.put(`${REST_URL}/user${userId}/create`, board);
    }
}