import axios, {AxiosPromise} from 'axios';
import {IBoard} from "../Models";
import {siteUrl} from '../../../Core/Const';

export interface IBoardService {
    getBoardById(boardId: string): AxiosPromise<IBoard>;
    updateBoard(board: IBoard): AxiosPromise<IBoard>;
}

const REST_URL = `${siteUrl}/board`;

export class BoardService implements IBoardService {
    getBoardById(boardId: string): AxiosPromise<IBoard> {
        return axios.get(`${REST_URL}/${boardId}`);
    }

    updateBoard(board: IBoard): AxiosPromise<IBoard> {
        return axios.put(`${REST_URL}/${board.id}`, board);
    }
}