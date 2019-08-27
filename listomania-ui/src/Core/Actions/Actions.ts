import { Dispatch } from 'redux';
import { ICoreService } from '../Services/Services';
import { CORE_ACTIONS } from './ActionTypes';
import { ELanguage } from 'Core/Enums';
import i18next from 'i18next';

export interface ICoreActions {
    changeLanguage(userId: string, language: ELanguage): void;
}

export class CoreActions<T extends ICoreService> implements ICoreActions {
    constructor(
        protected service: T,
        protected dispatch: Dispatch
    ) { }

    changeLanguage(userId: string, language: ELanguage): void {
        this.dispatch({ type: `${CORE_ACTIONS.CHANGE_LANGUAGE}_BEGIN` });

        this.service.changeLanguage(userId, language)
            .then(
                (response) => {
                    this.dispatch({ type: `${CORE_ACTIONS.CHANGE_LANGUAGE}_SUCCESS`, language: response.data });
                    i18next.changeLanguage(response.data);
                },
                (error) => {
                    this.dispatch({ type: `${CORE_ACTIONS.CHANGE_LANGUAGE}_FAILED`, error: error })
                }
            );
    };
}
