import * as React from 'react';
import {UserInfoButton} from './UserInfoButton'
import {ELanguage} from 'Core/Enums';
import { ICoreActions } from 'Core/Actions/Actions';
import { IUser } from 'Core/Models';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 * @prop {ICoreActions} actions
 * @prop {IUser} user
 */
interface IProps {
    t: Function;
    actions: ICoreActions;
    user: IUser;
}

/**
 * Component - right side of header.
 */
export const RightSideHeader = (props: IProps) => {
    const {
        t,
        actions,
        user
    } = props;

    return (
        <div className="right-side">
            <div>Add</div>
            <div>Info</div>
            <div>Notifications</div>
            <UserInfoButton
                t={t} // TODO replace into i18n
                actions={actions}
                user={user}
            />
        </div>
    )
}
