import { ICoreReduxStore } from "Core/Models";
import { IBoardReduxStore } from "Modules/Board/Models";
import { IMainPageReduxStore } from "Modules/MainPage/Models";
import { ILoginReduxStore } from "Modules/LoginPage/Models";

export enum AsyncActionStatus {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}

export interface AsyncAction<T> {
    type: string;
    payload: T
}

export interface AsyncData<T> {
    status: AsyncDataStatus;
    data: T;
    error: Error;
}

export enum AsyncDataStatus {
    IDLE,
    LOADING,
    SUCCESS,
    FAILED
}

export interface IAppStore {
    CoreModule: ICoreReduxStore;
    BoardModule: IBoardReduxStore;
    MainPageModule: IMainPageReduxStore;
    LoginModule: ILoginReduxStore;
}