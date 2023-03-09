import { Container, Navbar, Nav, Col} from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from 'react';
import {ControlledCarousel} from './NavCarousel';
import {Connect} from '../components/Modal'



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
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
        <Navbar.Brand className="text-center mt-3" href="/">
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
                <a href="https://www.linkedin.com/in/jamell-ivan-samuels/"><i className="fa-brands fa-linkedin-in fa-2xl"></i></a>
                <a href="https://github.com/jamellknows"><i className="fa-brands fa-github fa-2xl"></i></a>
                <a href="https://www.researchgate.net/profile/Yajudah-John-Jamell-Samuels-Elnathan"><i className="fa-brands fa-researchgate fa-2xl"></i></a>
            </div>
            <button className="vvd" onClick={() => {handleShow}}><span>Let's Connect</span></button>
          </span>
        </Col>
          </Row>
      </Container>
    </Navbar>
    );

}