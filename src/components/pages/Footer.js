import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import CV from '../pages/CV'

export const Footer = () => {

    return(
        <Container className="container-flex justify-content-center">
        <Row>
            <Col className='mt-5'>
                <h1>Links</h1>
                <div className='social-icon'>
                <a href="https://www.linkedin.com/in/jamell-ivan-samuels/"><i className="fa-brands fa-linkedin-in fa-2xl"></i></a>
                <a href="https://github.com/jamellknows"><i className="fa-brands fa-github fa-2xl"></i></a>
                <a href="https://www.researchgate.net/profile/Yajudah-John-Jamell-Samuels-Elnathan"><i className="fa-brands fa-researchgate fa-2xl"></i></a>
            </div>
            </Col>
            <Col>
                <h1>Footer</h1>
            </Col>
            <Col>
                <h1 className="mt-5">Links</h1>
                <h3><Link to="cv">View CV</Link></h3>
            </Col>
        </Row> 
        </Container>
    );
}