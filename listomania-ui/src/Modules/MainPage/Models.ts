import { AsyncData } from "Store/Models";

export interface ITopicView {
    id: string;
    name: string;
    isFavorite: boolean;
    isPrivate: boolean;
    isRecentViewed: boolean;
}

export interface IMainPageReduxStore {
    boards: AsyncData<ITopicView[]>
}
