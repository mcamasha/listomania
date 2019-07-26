import * as React from 'react';
import {useState, useCallback, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import ReactModal from 'react-modal';
import {ContentModal} from 'Core/Components/ContentModal/Components/ContentModal';
import {IContentModalConfig} from 'Core/Components/ContentModal/Models';
import {ELanguage} from 'Core/Enums';
import {changeLanguage} from 'Core/Actions/Actions';
import i18next from 'i18next';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 * @prop {ELanguage} language
 */
interface IProps {
    t: Function;
    language: ELanguage;
}

/**
 * Component - user info button for header.
 */
export const UserInfoButton = (props: IProps) => {
    const {language} = props;

    const dispatch = useDispatch()

    useEffect(() => {
        i18next.changeLanguage(props.language);
        setConfigModal(getChangeLanguageContentModalConfig());
    }, [language])

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
        setConfigModal(getInitialContentModalConfig());
    }, [])

    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, [])

    const handleChangeLanguage = useCallback((event) => {
        dispatch(changeLanguage(event.target.value));
    }, [])

    const handleClickChangeLanguageButton = useCallback(() => {
        setConfigModal(getChangeLanguageContentModalConfig);
    }, [])

    const getInitialContentModalConfig = useCallback((): IContentModalConfig => {
        return {
            headerTitle: 'login', //login from redux
            data: [
                <button onClick={handleClickChangeLanguageButton}>Change language</button>
            ],
        }
    }, [])

    const getChangeLanguageContentModalConfig = useCallback((): IContentModalConfig => {
        return {
            headerTitle: props.t('ChangeLanguageModal.headerTitle'),
            data: [
                <div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.CZECH}>Čeština</button></div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.ENGLISH}>English</button></div>
                    <div><button onClick={handleChangeLanguage} value={ELanguage.RUSSIAN}>Русский</button></div>
                </div>
            ],
        }
    }, [])

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
                />
            </ReactModal>
            <button onClick={handleOpenModal}>
                Avatar
            </button>
        </div>
    )
}
