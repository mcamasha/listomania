import { AsyncData } from "Store/Models";

export interface ICard {
    title: string;
    description?: string;
    comments?: string[]; //replace into IComment[]
}

export interface IList {
    id: string;
    title: string;
    cards?: ICard[];
}

export interface IBoard {
    id: string;
    title: string;
    lists?: IList[];
}

export interface IBoardReduxStore {
    board: AsyncData<IBoard>
}