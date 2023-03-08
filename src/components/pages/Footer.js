import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Footer = () => {

    return(
        <Container className="container-flex justify-content-center">
        <Row>
            <Col className='mt-5'>
                <h1>Links</h1>
            </Col>
            <Col>
                <h1>Footer</h1>
            </Col>
            <Col>
                <h1 className="mt-5">Links</h1>
            </Col>
        </Row> 
        </Container>
    );
}