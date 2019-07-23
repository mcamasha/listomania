import React from 'react';
import {LeftSideHeader} from './LeftSideHeader';
import {RightSideHeader} from './RightSiteHeader';
import {Logo} from './Logo';
import '../../../../Styles/Header.scss';

/**
 * Component - left side of header.
 */
export const Header = () => {
    return (
        <div className="header">
            <LeftSideHeader />
            <Logo />
            <RightSideHeader />
        </div>
    )
}
