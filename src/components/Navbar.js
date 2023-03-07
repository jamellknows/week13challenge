import { Container, Navbar, Nav } from 'react-bootstrap';
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
      <Container>
        <Navbar.Brand href="#home">
        <i class="fa-sharp fa-regular fa-binary-lock"></i>
        </Navbar.Brand>
          <Nav className="me-auto">
          <div className="d-flex carousel-position">
            <ControlledCarousel/>
          </div>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><i className=''="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i className="fa-brands fa-github"></i></a>
                <a href="#"><i className="fa-brands fa-researchgate"></i></a>
            </div>
            <button className="vvd" onClick={() => {console.log('connect')}}><span>Let's Connect</span></button>
          </span>
      </Container>
    </Navbar>
    );

}