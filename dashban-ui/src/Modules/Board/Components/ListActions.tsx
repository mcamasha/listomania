import * as React from 'react';
import {useState} from 'react';
import ReactModal from 'react-modal';
import {ContentModal} from 'Core/Components/ContentModal/Components/ContentModal';
import {IContentModalConfig} from 'Core/Components/ContentModal/Models';

interface IProps {
    
}

export const ListActions = (props: IProps) => {
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleOpenModal = () => {
        setShowModal(!showModal);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const getConfigModal = (): IContentModalConfig => {
        return {
            headerTitle: 'List Actions',
            data: [
                <React.Fragment>
                    <button>Add Card...</button>,
                    <button>Copy List...</button>
                    <button>Move List...</button>
                    <button>Watch</button>
                </React.Fragment>,
                <React.Fragment>
                    <button>Sort By...</button>
                </React.Fragment>,
                <React.Fragment>
                    <button>Move All Cards in This List...</button>,
                    <button>Archive All Cards in This List...</button>
                </React.Fragment>,
                <React.Fragment>
                    <button>Archive This List</button>,
                </React.Fragment>
            ]
        }
    };

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
                        width: '100px',
                        height: '100px'
                    }
                }}
            >
                <ContentModal
                    config={getConfigModal()}
                    onClose={handleCloseModal}
                />
            </ReactModal>
            <button onClick={handleOpenModal}>...</button>
        </div>
    );
};