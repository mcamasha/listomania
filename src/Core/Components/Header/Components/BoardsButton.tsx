import * as React from 'react';
import {useState, useCallback} from 'react';
import ReactModal from 'react-modal';

/**
 * Properties of component.
 *
 * @prop {Function} t Function for translation.
 */
interface IProps {
    t: Function;
}

/**
 * Component - boards button for header.
 */
export const BoardsButton = (props: IProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleCloseModalButtonClick = useCallback(() => {
        setShowModal(false);
    }, [])

    const handleOpenModalButtonClick = useCallback(() => {
        setShowModal(true);
    }, [])

    return (
        <div>
            <ReactModal
                isOpen={showModal}
                shouldCloseOnEsc
                shouldCloseOnOverlayClick
                onRequestClose={handleCloseModalButtonClick}
                ariaHideApp={false}
                style={{
                    content: {
                        width: '100px',
                        height: '100px'
                    }
                }}
            >
                <button onClick={handleCloseModalButtonClick}>Close Modal</button>
            </ReactModal>
            <button onClick={handleOpenModalButtonClick}>
                {props.t("boardsButton.title")}
            </button>
        </div>
    )
}
