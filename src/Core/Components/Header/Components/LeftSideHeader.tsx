import * as React from 'react';
import {HomeButton} from './HomeButton';
import {SearchInput} from './SearchInput';
import {BoardsButton} from './BoardsButton';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IProps {
    t: Function;
}

/**
 * Component - left side of header.
 */
export const LeftSideHeader = (props: IProps) => {
    return (
        <div className="left-side">
            <HomeButton />
            <BoardsButton t={props.t} />
            <SearchInput />
        </div>
    )
}
