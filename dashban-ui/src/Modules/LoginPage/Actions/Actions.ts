import { Dispatch } from 'redux';
import { ILoginService } from '../Services/Services';
import { LOGIN_ACTIONS } from './ActionTypes';
import { IUser } from 'Core/Models';
import { IUserLoginData } from '../Models';
import { AxiosPromise } from 'axios';

export interface ILoginActions {
    login(userLoginData: IUserLoginData): AxiosPromise<IUser>;
}

export class LoginActions<T extends ILoginService> implements ILoginActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) { }

    login(userLoginData: IUserLoginData): AxiosPromise<IUser> {
        this.dispatch({ type: `${LOGIN_ACTIONS.LOGIN}_BEGIN` });

        return this.service.login(userLoginData)
            .then(
                (response) => {
                    this.dispatch({ type: `${LOGIN_ACTIONS.LOGIN}_SUCCESS`, user: response.data });
                    return response;
                },
                (error) => {
                    this.dispatch({ type: `${LOGIN_ACTIONS.LOGIN}_FAILED`, error: error })
                    throw error;
                }
            );
    };
}
