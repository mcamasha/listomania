import axios from 'axios';
import {IBoard} from "../Models";
import {siteUrl} from '../../../Core/Const';

export interface IBoardService {
    getBoardById(boardId: string): Promise<IBoard>;
    updateBoard(board: IBoard): Promise<IBoard>;
}

const REST_URL = `${siteUrl}/board`;

export class BoardService implements IBoardService {
    getBoardById(boardId: string): Promise<IBoard> {
        return axios.get(`${REST_URL}/${boardId}`);
    }

    updateBoard(board: IBoard): Promise<IBoard> {
        return axios.put(`${REST_URL}/${board.id}`, board);
    }
}