import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <ul>
                <li>hi 1</li>
                <li>hi 2</li>
                <li>hi 3</li>
                <li>hi 4</li>
                <li>hi 5</li>
            </ul>
            <p>Go back to <Link to='/register'>Registration</Link></p>
        </div>
    );
};

export default TermsAndConditions;