import {CORE} from "./ActionTypes";
import i18next from "i18next";
import {ELanguage} from "Core/Enums";

const changeLanguage = (language: ELanguage) => {    
    return {
        type: CORE.CHANGE_LANGUAGE,
        language
    }
};

export {changeLanguage};