import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {

    return(
        <Container className="container-flex justify-content-center">
        <Row>
            <Col className='mt-5'>
                <h1>About Me</h1>
                <p>Hello! My name is Jamell</p>
            </Col>
            <Col>
                <h1 className='text-center'>Home</h1>
            </Col>
            <Col>
                Image
            </Col>
        </Row> 
        </Container>
    );
}