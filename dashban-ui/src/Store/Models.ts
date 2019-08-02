export enum AsyncActionStatus {
    PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'
}

export interface AppStore {
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