import {IBoard, IList, ICard} from '../Models';
import {Dispatch} from 'redux';
import {IBoardService} from '../Services/Services';
import {BOARD} from './ActionTypes';

export interface IBoardActions {
    getBoardById(boardId: string): Promise<IBoard>;
    createList(boardId: string, list: IList): Promise<IList>;
    createCard(listId: string, card: ICard): Promise<ICard>;
    updateList(list: IList): Promise<IList>;
    updateCard(listId: string, card: ICard): Promise<ICard>;
    deleteCard(cardId: string): Promise<void>;
    deleteList(listId: string): Promise<void>;
}

export class BoardActions<T extends IBoardService> implements IBoardActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) {}

    async getBoardById(boardId: string): Promise<IBoard> {
        this.dispatch({type: `${BOARD.GET_BOARD}_BEGIN`});

        return this.service.getBoardById(boardId)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.GET_BOARD}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.GET_BOARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async createList(boardId: string, list: IList): Promise<IList> {
        this.dispatch({type: `${BOARD.CREATE_LIST}_BEGIN`});

        return this.service.createList(boardId, list)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.CREATE_LIST}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.CREATE_LIST}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async createCard(listId: string, card: ICard): Promise<ICard> {
        this.dispatch({type: `${BOARD.CREATE_CARD}_BEGIN`});

        return this.service.createCard(listId, card)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.CREATE_CARD}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.CREATE_CARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async updateList(list: IList): Promise<IList> {
        this.dispatch({type: `${BOARD.UPDATE_LIST}_BEGIN`});

        return this.service.updateList(list)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.UPDATE_LIST}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.UPDATE_LIST}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async updateCard(listId: string, card: ICard): Promise<ICard> {
        this.dispatch({type: `${BOARD.UPDATE_CARD}_BEGIN`});

        return this.service.updateCard(listId, card)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.UPDATE_CARD}_SUCCESS`, payload: response});
                    return response;
                },
                (error) => {
                    this.dispatch({type: `${BOARD.UPDATE_CARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async deleteCard(cardId: string): Promise<void> {
        this.dispatch({type: `${BOARD.DELETE_CARD}_BEGIN`});

        return this.service.deleteCard(cardId)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.DELETE_CARD}_SUCCESS`, payload: response});
                },
                (error) => {
                    this.dispatch({type: `${BOARD.DELETE_CARD}_FAILED`, error: error})
                    throw error;
                }
            );
    };

    async deleteList(listId: string): Promise<void> {
        this.dispatch({type: `${BOARD.DELETE_LIST}_BEGIN`});

        return this.service.deleteList(listId)
            .then(
                (response) => {
                    this.dispatch({type: `${BOARD.DELETE_LIST}_SUCCESS`, payload: response});
                },
                (error) => {
                    this.dispatch({type: `${BOARD.DELETE_LIST}_FAILED`, error: error})
                    throw error;
                }
            );
    };
}
