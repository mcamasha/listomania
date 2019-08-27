import axios, { AxiosPromise } from 'axios';
import { siteUrl } from 'Core/Const';
import { ELanguage } from 'Core/Enums';

export interface ICoreService {
    changeLanguage(userId: string, language: ELanguage): AxiosPromise<string>;
}

const REST_URL = `${siteUrl}/`;

export class CoreService implements ICoreService {
    changeLanguage(userId: string, language: ELanguage): AxiosPromise<string> {
        return axios.put(`${REST_URL}/user${userId}/change-language/`, language);
    }
}
