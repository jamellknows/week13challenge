import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useResolvedPath } from 'react-router-dom';
import styled from 'styled-components'
export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const linkStyle = {
    fontFamily: 'Tilt Prism',
    fontSize: "2rem",
    textDecoration: 'none',
    color: '#121212'
  }
  

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} data-interal={false}>
    
      <Carousel.Item>
      <div className='d-flex flex-row'>
        <Link
          to="/"
          style={linkStyle}
           >Home
        </Link>
     </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row'>
        <Link
          to="project-gallery"
          style={linkStyle}
        >Projects
        </Link>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row'>
      <Link
          to="contact"
          style={linkStyle}
        >Contact
        </Link>
      </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

