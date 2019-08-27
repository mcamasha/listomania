import {get} from 'lodash';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { ContentModal } from 'Core/Components/ContentModal/Components/ContentModal';
import { IContentModalConfig } from 'Core/Components/ContentModal/Models';
import { ELanguage } from 'Core/Enums';
import { ICoreActions } from 'Core/Actions/Actions';
import i18next from 'i18next';
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
 * Component - user info button for header.
 */
export const UserInfoButton = (props: IProps) => {
    const { actions, user } = props;

    const [newLanguage, setNewLanguage] = useState<ELanguage>();

    useEffect(() => {
        actions.changeLanguage(user.id, newLanguage);
        setConfigModal(getChangeLanguageContentModalConfig());
    }, [newLanguage])

    const handleCloseModal = () => {
        setShowModal(false);
        setConfigModal(getInitialContentModalConfig());
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleChangeLanguage = (event: any) => {
        setNewLanguage(event.currentTarget.value);
    };

    const handleClickChangeLanguageButton = () => {
        setConfigModal(getChangeLanguageContentModalConfig);
    };

    const getInitialContentModalConfig = (): IContentModalConfig => {
        return {
            headerTitle: user.login,
            data: [
                <button onClick={handleClickChangeLanguageButton}>Change language</button>
            ]
        }
    };

    const getChangeLanguageContentModalConfig = (): IContentModalConfig => {
        return {
            headerTitle: props.t('ChangeLanguageModal.headerTitle'),
            data: [
                <div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.CZECH}>Čeština</button></div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.ENGLISH}>English</button></div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.RUSSIAN}>Русский</button></div>
                </div>
            ],
            hasReturnButton: true
        }
    };

    const handleReturnContentModal = () => {
        setConfigModal(getInitialContentModalConfig());
    };

    const [showModal, setShowModal] = useState<boolean>(false);
    const [configModal, setConfigModal] = useState<IContentModalConfig>(getInitialContentModalConfig());

    return (
        <div>
            <ReactModal
                isOpen={showModal}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={handleCloseModal}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '200px',
                        height: '600px'
                    }
                }}
            >
                <ContentModal
                    config={configModal}
                    onClose={handleCloseModal}
                    onReturnClick={handleReturnContentModal}
                />
            </ReactModal>
            <button onClick={handleOpenModal}>
                Avatar
            </button>
        </div>
    )
}
