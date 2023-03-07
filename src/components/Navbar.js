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
            <ControlledCarousel/>
            {/* <Nav.Link href="#home" className={activeLink == 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink == 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#project-gallery" className={activeLink == 'project-gallery' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('project-gallery')}>Project Gallery</Nav.Link> */}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-brands fa-researchgate"></i></a>
            </div>
            <button className="vvd" onClick={() => {console.log('connect')}}><span>Let's Connect</span></button>
          </span>
      </Container>
    </Navbar>
    );

}