import React from 'react';
import {IContentModalConfig} from '../Models';

/**
 * Properties of component.
 *
 * @prop {IContentModalConfig} config Configuration for content of modal.
 * @prop {Function} onClose Handler close modal window.
 */
interface IProps {
    config: IContentModalConfig;
    onClose: () => void;
}

/**
 * Content of modal window.
 */
export const ContentModal = (props: IProps): JSX.Element => {
    const {config: {data, headerTitle}, onClose} = props;

    return (
        <div>
            <div className="d-flex justify-content-center grey">
                {headerTitle}
                <span>
                    <button onClick={onClose}>&times;</button>
                </span>
            </div>
            {data.map((item: JSX.Element) => {
                return (
                    <React.Fragment>
                        <hr />
                        {item}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
