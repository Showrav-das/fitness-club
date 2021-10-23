import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
        <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75 img-fluid"
            src="https://image.freepik.com/free-photo/online-training-man-doing-exercise-with-rubber-bands-home-free-space-doing-sports-home_173815-10649.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://image.freepik.com/free-vector/dumbbells-barbells-weight-fitness_1284-13523.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block  h-75 w-100 img-fluid"
            src="https://image.freepik.com/free-photo/strong-legs-exercising-couple_329181-14159.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      </>
      );
   
};

export default Banner;