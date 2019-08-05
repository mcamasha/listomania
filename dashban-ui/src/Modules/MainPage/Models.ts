import { EBoardBackgroundColor, EBoardVisibility } from "./Enums";
import { IBoard } from "Modules/Board/Models"; // move to common
import { AsyncData } from "Store/Models";

export interface IBoardView {
    name: string;
    backgroundColor: EBoardBackgroundColor;
    isFavorite: boolean;
    visibility: EBoardVisibility;
    isRecentViewed: boolean;
}

export interface IMainPageReduxStore {
    boards: AsyncData<IBoardView[]>
}
