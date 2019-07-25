import * as React from 'react';
import {UserInfoButton} from './UserInfoButton'

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IProps {
    t: Function;
}

/**
 * Component - right side of header.
 */
export const RightSideHeader = (props: IProps) => {
    return (
        <div className="right-side">
            <div>Add</div>
            <div>Info</div>
            <div>Notifications</div>
            <UserInfoButton t={props.t}/>
        </div>
    )
}
