import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom justify-content-center'>
        <i class="fa-solid fa-house"></i>
        <p>Home</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom'>
        <i class="fa-solid fa-gallery-thumbnails"></i>
        <p>Gallery</p>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom'>
        <i class="fa-solid fa-address-book"></i>
        <p>Contact</p>
      </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

