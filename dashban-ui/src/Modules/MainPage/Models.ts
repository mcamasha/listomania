import { EBoardBackgroundColor, EBoardVisibility } from "./Enums";
import { AsyncData } from "Store/Models";

export interface IBoardView {
    id: string;
    name: string;
    backgroundColor: EBoardBackgroundColor;
    isFavorite: boolean;
    visibility: EBoardVisibility;
    isRecentViewed: boolean;
}

export interface IMainPageReduxStore {
    boards: AsyncData<IBoardView[]>
}
