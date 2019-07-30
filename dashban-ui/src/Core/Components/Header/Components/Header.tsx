import React from 'react';
import {LeftSideHeader} from './LeftSideHeader';
import {RightSideHeader} from './RightSiteHeader';
import {Logo} from './Logo';
import 'Styles/Header.scss';
import {withTranslation} from 'react-i18next';
import { ELanguage } from 'Core/Enums';
import { connect } from 'react-redux';
import {compose} from 'redux';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IOwnProps {
    t: Function;
}

interface IStateProps {
    language: ELanguage;
}

type TProps = IStateProps & IOwnProps;

/**
 * Component - left side of header.
 */
const Header = (props: TProps): JSX.Element => {
    const {
        language,
        t
    } = props;

    return (
        <div className="header">
            <LeftSideHeader t={t} />
            <Logo />
            <RightSideHeader
                t={t}
                language={language}
            />
        </div>
    )
}

const mapStateToProps = (state: any): IStateProps => {
    return {
        language: state.CoreReducer.language // TODO: replace CoreReducer to Core
    }
}

export const HeaderContainer = compose<React.SFC>(
    withTranslation('header'),
    connect(mapStateToProps)
)(Header);
