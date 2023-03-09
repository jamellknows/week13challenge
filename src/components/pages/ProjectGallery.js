import Carousel from 'react-bootstrap/Carousel';
import module12 from '../../assets/TeamProfileGenerator.png'
import module11 from '../../assets/Module11.png'
import module9 from '../../assets/Module9.png'
import module8 from '../../assets/Module8.png'
import module7 from '../../assets/Module7.png'
import module6 from '../../assets/CodingQuiz.png'
import styled from 'styled-components'



export const ProjectGallery = () => {
  
  const styledImage = {
    width: '100vw',
    height: '75vh',

  }
  
  
  return (
    <div className="container-fluid">
    <h1 className='text-center'>Project Gallery</h1>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 h-75 img-fluid"
          src={module12}
          height={500}
          alt="Team Profile Generator"
        />
        <Carousel.Caption>
          <h3>Team Profile Generator</h3>
          <p>A Team Profile Generator for Engineering Teams</p>
          <button href="https://github.com/jamellknows/weeek12challenge">Visit!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-inline-block w-100 h-75 img-fluid"
          src={module11}
          alt="README Generator"
          style={{ height: '300px'}}
          height={500}
        />
        <Carousel.Caption>
          <h3>README Generator</h3>
          <p>This is the module 11 challenge project which is a readme generator. </p>
          <button href="https://github.com/jamellknows/week11challenge">Visit!</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        className="d-inline-block w-100 h-75 img-fluid"
        src={module9}
        alt="Module 9 Group Project"
        style={{ height: '300px'}}
        height={500}
      />
      <Carousel.Caption>
        <h3>Module 9 Group Project</h3>
        <p>This is a web application called Commute Me that was created as part of a collaborative effort</p>
        <button href="https://github.com/jamellknows/module-9-group-project">Visit!</button>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-inline-block w-100 h-75 img-fluid"
      src={module8}
      alt="Module 8 Challenge"
      style={{ height: '300px'}}
      height={500}
    />
    <Carousel.Caption>
      <h3>Module 8 Challenge</h3>
      <p>A weather API to get the forecast for your local area</p>
      <button href="https://github.com/jamellknows/module8challenge">Visit!</button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
    className="d-inline-block w-100 h-75 img-fluid"
    src={module7}
    alt="Module 7 Challenge"
    style={{ height: '300px'}}
    height={500}
  />
  <Carousel.Caption>
    <h3>Module 7 Challenge</h3>
    <p>A work day scheduler for people working a 9-5.</p>
    <button href="https://github.com/jamellknows/module7challenge"></button>
  </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
<img
  className="d-inline-block w-100 h-75 img-fluid"
  src={module6}
  alt="Module 7 Challenge"
  style={{ height: '300px'}}
  height={500}
/>
<Carousel.Caption>
  <h3>Module 6 Challenge</h3>
  <p>A Code Quiz for student developers</p>
  <button href="https://github.com/jamellknows/module6challenge">Visit!</button>
</Carousel.Caption>
</Carousel.Item>
    </Carousel>
    </div>
  );
}

