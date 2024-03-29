import * as React from 'react';
import {useState} from "react";
import ReactModal from 'react-modal';

ReactModal.defaultStyles.overlay = {
    backgroundColor: 'none',
    width: '100vw',
    height: '96vh'
}

/**
 * Component - search input for header.
 */
export const SearchInput = () => {
    const [inputValue, setValue] = useState<string>('');
    const [showModal, setShowModal] = useState<boolean>(false);

    const handleChange = (event: React.FocusEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    const handleInputClick = () => {
        setShowModal(true);
    };

    const handleCloseModalButtonClick = () => {
        setShowModal(false);
    };

    return (
        <div className="search-input">
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
            <div className={`wrapper-input ${showModal ? 'close--icon' : 'search--icon'}`}>
                <input
                    onChange={handleChange}
                    type="text"
                    onClick={handleInputClick}
                    value={inputValue}
                />
            </div>
        </div>
    )
}
