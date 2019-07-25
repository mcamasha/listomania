import React from 'react';
import {LeftSideHeader} from './LeftSideHeader';
import {RightSideHeader} from './RightSiteHeader';
import {Logo} from './Logo';
import 'Styles/Header.scss';
import {withTranslation} from 'react-i18next';

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
const Header = (props: IProps) => {
    return (
        <div className="header">
            <LeftSideHeader t={props.t} />
            <Logo />
            <RightSideHeader t={props.t} />
        </div>
    )
}

export default withTranslation('header')(Header);