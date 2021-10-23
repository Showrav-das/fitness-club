import React from 'react';
import { Card,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({service}) => {
    const { id, name, details, img, AlreadyAdmitted } = service;
    
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 g-4">
     <Card  className="h-100"> 
        <Card.Img variant="top" src={img} />
         <Card.Body>
          <Card.Title className="text-xl-md "> {name}</Card.Title>
                    <p className="text-primary">Already Admitted:  {AlreadyAdmitted}</p>
          <Card.Text>
            {details}
         </Card.Text>
        <Link to={`details/${id}`} > <Button  variant="dark rounded-pill">Details</Button></Link>
        </Card.Body>
      </Card>
        </div>
    );
};

export default Service;

