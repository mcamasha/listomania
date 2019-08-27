import { ELanguage } from "./Enums";
import { AsyncData } from "Store/Models";

/**
 * Redux branch of store for core informations.
 *
 * @prop {AsyncData<IUser>} user Current user
 */
export interface ICoreReduxStore {
    user: AsyncData<IUser>;
}

export interface IUser {
    id: string;
    login: string;
    language: ELanguage;
}