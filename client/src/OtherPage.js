import React from "react";
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
            This is the dummy page for the main app.
            <Link to="/">Go to main page</Link>
        </div>
    )
}