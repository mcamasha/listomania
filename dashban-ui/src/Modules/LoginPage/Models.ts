import { AsyncData } from "Store/Models";
import { IUser } from "Core/Models";

export interface ILoginReduxStore {
    user: AsyncData<IUser>;
}

export interface IUserLoginData {
    login: string;
    password: string;
}