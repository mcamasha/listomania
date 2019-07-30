import React from 'react';
import {IContentModalConfig} from '../Models';

/**
 * Properties of component.
 *
 * @prop {IContentModalConfig} config Configuration for content of modal.
 * @prop {Function} onClose Handler close modal window.
 * @prop {Function} onReturnClick Handler return button click.
 */
interface IProps {
    config: IContentModalConfig;
    onClose: () => void;
    onReturnClick?: () => void;
}

/**
 * Content of modal window.
 */
export const ContentModal = (props: IProps): JSX.Element => {
    const {config: {data, headerTitle, hasReturnButton}, onReturnClick, onClose} = props;

    return (
        <div>
            <div className="d-flex justify-content-center grey">
                {hasReturnButton && <button onClick={onReturnClick}>back</button>}
                {headerTitle}
                <span>
                    <button onClick={onClose}>&times;</button>
                </span>
            </div>
            {data.map((item: JSX.Element, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <hr />
                        {item}
                    </React.Fragment>
                );
            })}
        </div>
    );
}
