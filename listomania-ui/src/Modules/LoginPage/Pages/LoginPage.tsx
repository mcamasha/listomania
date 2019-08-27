import { isEmpty } from 'lodash';
import * as React from 'react';
import {useState, useEffect} from 'react';
import { Dispatch, compose } from 'redux';
import { IAppStore, AsyncData, AsyncDataStatus } from 'Store/Models';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { IUser } from 'Core/Models';
import { LoginService } from '../Services/Services';
import { ILoginActions, LoginActions } from '../Actions/Actions';
import { IUserLoginData } from '../Models';
import { Redirect } from 'react-router';

interface IOwnProps {
    t: Function;
}

interface IStateProps {
    user: AsyncData<IUser>;
}

interface IDispatchProps {
    actions: ILoginActions;
}

type TProps = IOwnProps & IStateProps & IDispatchProps;

export const LoginPage = (props: TProps) => {
    const {actions, user: {data, status}} = props;

    const hasError: boolean = status === AsyncDataStatus.FAILED;

    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLogining, setIsLogining] = useState<boolean>();

    useEffect(() => {
        if (isLogining) {
            const userLoginData: IUserLoginData = {
                login,
                password
            }

            actions.login(userLoginData).then(() => setIsLogining(false));
        }
    }, [isLogining]);

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.currentTarget.value);
    }

    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.currentTarget.value);
    }

    const handleLoginClick = () => {
        setIsLogining(true);
    }

    const validationForm = () => {
        return login.length > 0 && password.length > 0;
    }

    return (
        <div>
            <div>
                <span>Login:</span>
                <input
                    onChange={handleLoginChange}
                    placeholder="Enter login..."
                />
            </div>
            <div>
                <span>Password:</span>
                <input
                    onChange={handlePasswordChange}
                    placeholder="Enter password..."
                    type="password"
                />
            </div>
            <div>
                <button
                    onClick={handleLoginClick}
                    disabled={!validationForm() && isLogining}
                >
                    Log in
                </button>
            </div>
            {hasError && <span>Error. Sorry, try again!</span>}
            {!hasError && !isEmpty(data) && (
                <Redirect to="/"/>
            )}
        </div>
    );
}

const mapStateToProps = (state: IAppStore): IStateProps => {
    return {
        user: state.LoginModule.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        actions: new LoginActions(new LoginService, dispatch),
    }
}

export const MainPageContainer = compose<React.SFC>(
    withTranslation('login'),
    connect(mapStateToProps, mapDispatchToProps)
)(LoginPage);
