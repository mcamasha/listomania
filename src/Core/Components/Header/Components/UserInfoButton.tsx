import * as React from 'react';
import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import ReactModal from 'react-modal';
import {CORE} from '../../../Actions/ActionTypes';
import {ContentModal} from '../../ContentModal/Components/ContentModal';
import {IContentModalConfig} from '../../ContentModal/Models';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IProps {
    t: Function;
}

/**
 * Component - user info button for header.
 */
export const UserInfoButton = (props: IProps) => {
    const dispatch = useDispatch()

    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCloseModal = useCallback(() => {
        setShowModal(false);
    }, [])

    const handleOpenModal = useCallback(() => {
        setShowModal(true);
    }, [])

    const handleChangeLanguage = useCallback(() => {
        dispatch({type: CORE.CHANGE_LANGUAGE})
    }, [])

    const handleClickLanguageButton = useCallback(() => {

    }, [])

    const getContentModalConfig = useCallback((): IContentModalConfig => {
        return {
            data: [
                <button>Change language</button>
            ],
            headerTitle: 'login' //login from redux
        }
    }, [])

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
                    config={getContentModalConfig()}
                    onClose={handleCloseModal}
                />
            </ReactModal>
            <button onClick={handleOpenModal}>
                Avatar
            </button>
        </div>
    )
}
