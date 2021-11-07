import React from "react"
import { Carousel } from "react-bootstrap";
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import banner3 from '../../../images/banner3.jpg';
import Facebook from '../../../video/Facebook.mp4';

const Banner = () =>{
    return(
      <>
        <video autoPlay loop muted
            style = {{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }}
             >
             <source src={Facebook} type="video/mp4" />
             </video>
             <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      {/* <h3>Family Care Dental Zone</h3>
      <p>Simple & Essential Tips to Choose a Good Dental Clinic.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      {/* <h3>Family Care Dental Zone</h3>
      <p>From Simple Procedures to complex Surgeries.</p> */}
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 h-75"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
</>
      );   
    };

  

export default Banner;