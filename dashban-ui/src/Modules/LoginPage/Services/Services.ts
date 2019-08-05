import axios, { AxiosPromise } from 'axios';
import { siteUrl } from 'Core/Const';
import { IUser } from 'Core/Models';
import { IUserLoginData } from '../Models';

export interface ILoginService {
    login(userLoginData: IUserLoginData): AxiosPromise<IUser>;
}

const REST_URL = `${siteUrl}/login`;

export class LoginService implements ILoginService {
    login(userLoginData: IUserLoginData): AxiosPromise<IUser> {
        return axios.post(`${REST_URL}`, userLoginData);
    }
}
