import { IAppStore, AsyncData, AsyncDataStatus } from "Store/Models";
import { Dispatch, compose } from "redux";
import { withTranslation } from "react-i18next";
import { connect } from "react-redux";
import { IBoardView } from "../Models";
import { MainPageActions, IMainPageActions } from "../Actions/Actions";
import { MainPageService } from "../Services/Services";
import { Component } from "react";
import * as React from 'react';
import { IUser } from "Core/Models";
import { Link } from "react-router-dom";
import { BoardsView } from "./BoardsView";
import { EBoardBackgroundColor, EBoardVisibility } from "../Enums";

interface IOwnProps {
    t: Function;
}

interface IStateProps {
    boards: AsyncData<IBoardView[]>;
    user: AsyncData<IUser>;
}

interface IDispatchProps {
    actions: IMainPageActions;
}

interface IState {
    boardsTabActivated: boolean;
}

type TProps = IOwnProps & IStateProps & IDispatchProps;

/**
 * Component - board page which contains lists of cards - the main content of app.
 */
class MainPageLoader extends Component<TProps, IState> {

    state: IState = {
        boardsTabActivated: false
    }

    componentDidMount() {
        const {
            actions,
            user,
        } = this.props;

        // actions.getBoardsByUserId(user.data.id);
    };

    componentWillUnmount() {
        this.props.actions.clearBoardsData();
    }

    handleSwitchBoardsTab = () => {
        this.setState({ boardsTabActivated: true });
    }

    handleSwitchHomeTab = () => {
        this.setState({ boardsTabActivated: false });
    }

    render() {
        const { t, actions } = this.props;
        const { boardsTabActivated } = this.state;

        // delete
        const boards: IBoardView[] = [{
            backgroundColor: EBoardBackgroundColor.BLUE,
            isFavorite: false,
            isRecentViewed: false,
            name: 'first',
            visibility: EBoardVisibility.PRIVATE,
            id: '123'
        }];

        return (
            <div className="main-page container row">
                <div className="col-4 d-flex justify-content-center">
                    <div className="col-centered">
                        <div>
                            <Link to="boards">
                                <button
                                    onClick={this.handleSwitchBoardsTab}
                                >
                                    Boards
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to="/">
                                <button
                                    onClick={this.handleSwitchHomeTab}
                                >
                                    Home
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    {
                        boardsTabActivated ? (
                            <BoardsView
                                actions={actions}
                                boards={boards}
                                t={t}
                                userId={"2424"} // TODO
                            />
                        ) : (
                                <div>1</div>
                            )
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IAppStore): IStateProps => {
    return {
        boards: state.MainPageModule.boards,
        user: state.CoreModule.user
    }
}

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => {
    return {
        actions: new MainPageActions(new MainPageService, dispatch),
    }
}

export const MainPageContainer = compose<React.SFC>(
    withTranslation('mainPage'),
    connect(mapStateToProps, mapDispatchToProps)
)(MainPageLoader);
