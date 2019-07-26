import * as React from 'react';
import {UserInfoButton} from './UserInfoButton'
import {ELanguage} from 'Core/Enums';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 * @prop {ELanguage} language
 */
interface IProps {
    t: Function;
    language: ELanguage;
}

/**
 * Component - right side of header.
 */
export const RightSideHeader = (props: IProps) => {
    const {
        language,
        t
    } = props;

    return (
        <div className="right-side">
            <div>Add</div>
            <div>Info</div>
            <div>Notifications</div>
            <UserInfoButton
                t={t}
                language={language}
            />
        </div>
    )
}
