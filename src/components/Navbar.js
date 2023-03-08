import { Container, Navbar, Nav, Col} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from 'react';
import {ControlledCarousel} from './NavCarousel';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    
    useEffect(() => {
        const onScroll = () => {
            window.scroll > 50 ? setScrolled(true) : setScrolled(false);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return(
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container className="container-fluid">
        <Row className="w-100">
        <Col className="align-items-center">
        <Navbar.Brand className="text-center mt-3" href="#home">
        <i className="fa-sharp fa-regular fa-binary-lock fa-2xl "></i>
        </Navbar.Brand>
        </Col>
        <Col>
          <Nav className="ms-auto">
          <div className="d-flex w-100">
            <ControlledCarousel/>
          </div>
          </Nav>
        </Col>
        <Col className="w-100 float-end text-end ms-auto">
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-researchgate"></i></a>
            </div>
            <button className="vvd" onClick={() => {console.log('connect')}}><span>Let's Connect</span></button>
          </span>
        </Col>
          </Row>
      </Container>
    </Navbar>
    );

}