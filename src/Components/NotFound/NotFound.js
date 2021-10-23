import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/error-404-concept-landing-page_52683-11840.jpg';

const NotFound = () => {
    return (
        <div>
            <img src={notfound} alt="" /> <br />
            <Link to="/"><Button variant="warning">Back Please</Button>
            </Link>

        </div>
    );
};

export default NotFound;