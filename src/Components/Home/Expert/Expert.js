import React from 'react';
import { Card } from 'react-bootstrap';

const Expert = ({expert}) => {
    // console.log(expert);
    const { name, img ,graduate} = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 g-4">
           <Card className="bg-dark text-white">
  <Card.Img src={img} alt="Card image" />
  <Card.ImgOverlay className="mt-5"> <br /><br /><br /><br /> <br />
         <div className="bg-dark opacity-50">  
        <Card.Text className="text-light">
         <Card.Title>Trainer Name: { name}</Card.Title>
         Graduation: {graduate}
        </Card.Text>
        </div>
  </Card.ImgOverlay>
    </Card>
    </div>
    );
};

export default Expert;