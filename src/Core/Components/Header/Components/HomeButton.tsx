import * as React from 'react';
import {Link} from "react-router-dom";

/**
 * Component - home button for header.
 */
export const HomeButton = () => {
    return (
        <div>
            <Link to="/boards">
                Home Icon
            </Link>
        </div>
    )
}
