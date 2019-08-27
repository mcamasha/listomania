import { AsyncData } from "Store/Models";
import {EBoardBackgroundColor, EBoardVisibility} from "Modules/MainPage/Enums";
import {IBoardView} from "Modules/MainPage/Models";

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

export interface IBoard extends IBoardView {
    lists?: IList[];
}

export interface IBoardReduxStore {
    board: AsyncData<IBoard>
}