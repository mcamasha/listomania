import React, { useEffect } from 'react';
import {LeftSideHeader} from './LeftSideHeader';
import {RightSideHeader} from './RightSiteHeader';
import {Logo} from './Logo';
import 'Styles/Header.scss';
import {withTranslation} from 'react-i18next';
import { ELanguage } from 'Core/Enums';
import { connect } from 'react-redux';
import {compose, Dispatch} from 'redux';
import { CoreActions, ICoreActions } from 'Core/Actions/Actions';
import { CoreService } from 'Core/Services/Services';
import { IUser } from 'Core/Models';
import { IAppStore, AsyncData, AsyncDataStatus } from 'Store/Models';
import { Spinner } from 'Common/Components/Spinner';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IOwnProps {
    t: Function;
}

interface IStateProps {
    user: AsyncData<IUser>;
}

interface IDispatchProps {
    actions: ICoreActions;
}

type TProps = IStateProps & IOwnProps & IDispatchProps;

/**
 * Component - left side of header.
 */
const Header = (props: TProps): JSX.Element => {
    const {
        t,
        actions,
        // user
    } = props;

    // delete hardcore
    const user: IUser = {
        id: '1',
        language: ELanguage.ENGLISH,
        login: 'mcamasha'
    }

    const isLoading: boolean = false;
    // const isLoading: boolean = user.status === AsyncDataStatus.LOADING;

    return (
        <div className="header">
            {
                isLoading ? <Spinner /> : (
                    <React.Fragment>
                        <LeftSideHeader t={t} />
                        <Logo />
                        <RightSideHeader
                            t={t}
                            actions={actions}
                            user={user} //
                        />
                    </React.Fragment>
                )
            }
        </div>
    )
}

const mapStateToProps = (state: IAppStore): IStateProps => {
    return {
        user: state.CoreModule.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        actions: new CoreActions(new CoreService, dispatch)
    }
}

export const HeaderContainer = compose<React.SFC>(
    withTranslation('header'),
    connect(mapStateToProps, mapDispatchToProps)
)(Header);
