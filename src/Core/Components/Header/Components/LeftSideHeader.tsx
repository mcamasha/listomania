import * as React from 'react';
import {HomeButton} from './HomeButton';
import {SearchInput} from './SearchInput';

/**
 * Component - left side of header.
 */
export const LeftSideHeader = () => {
    return (
        <div className="left-side">
            <HomeButton />
            <div>Descs</div>
            <SearchInput />
        </div>
    )
}
