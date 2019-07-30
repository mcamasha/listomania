import axios from 'axios';
import {IBoard, IList, ICard} from "../Models";
import {siteUrl} from '../../../Core/Const';

export interface IBoardService {
    getBoardById(boardId: string): Promise<IBoard>;
    createList(boardId: string, list: IList): Promise<IList>;
    createCard(listId: string, card: ICard): Promise<ICard>;
    updateList(list: IList): Promise<IList>;
    updateCard(listId: string, card: ICard): Promise<ICard>;
    deleteCard(cardId: string): Promise<void>;
    deleteList(listId: string): Promise<void>;
}

const REST_URL = `${siteUrl}/board`;

export class BoardService implements IBoardService {
    getBoardById(boardId: string): Promise<IBoard> {
        return axios.get(`${REST_URL}/${boardId}`);
    }

    createList(boardId: string, list: IList): Promise<IList> {
        return axios.post(`${REST_URL}/${boardId}/list`, list);
    }

    createCard(listId: string, card: ICard): Promise<ICard> {
        return axios.post(`${REST_URL}/list/${listId}/card`, card);
    }

    updateList(list: IList): Promise<IList> {
        return axios.put(`${REST_URL}/list/${list.id}`, list);
    }

    updateCard(listId: string, card: IList): Promise<IList> {
        return axios.put(`${REST_URL}/list/${listId}/card`, card);
    }

    deleteCard(cardId: string): Promise<void> {
        return axios.delete(`${REST_URL}/card/${cardId}`);
    }

    deleteList(listId: string): Promise<void> {
        return axios.delete(`${REST_URL}/list/${listId}`);
    }
}