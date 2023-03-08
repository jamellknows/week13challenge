import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from 'react-router-dom';

export const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom carousel-position'>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }>Home
        </NavLink>
     </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom carousel-position'>
        <NavLink
          to="project-gallery"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='d-flex flex-row align-bottom carousel-position'>
      <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

