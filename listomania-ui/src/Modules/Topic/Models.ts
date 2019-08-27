import {AsyncData} from "Store/Models";
import {ITopicView} from "Modules/MainPage/Models";

export interface IListItem {
    name: string;
    description?: string;
}

export interface IList {
    id: string;
    name: string;
    items: IListItem[];
}

export interface ITopic extends ITopicView {
    lists?: IList[];
}

export interface ITopicReduxStore {
    topic: AsyncData<ITopic>
}