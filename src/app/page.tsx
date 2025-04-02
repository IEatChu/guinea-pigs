/* eslint-disable max-len */
import { Col, Container, Row } from 'react-bootstrap';
import { PersonHearts, Globe } from 'react-bootstrap-icons';

/** The Home page. */
const Home = () => (
  <main>
    <Container id="landing-page" fluid className="py-5 px-5 ">
      <Container>
        <Row className="text-center 5">
          <Col xs={4}>
            <PersonHearts size={100} color="brown" />
            <h1 className="rainbow-text"> Welcome to Guinea Pig Paradise! </h1>
            <h5 className="rainbow-text"> Share your guinea pigs with the world. Discover their stories, celebrate their charms, and connect with fellow guinea pig enthusiasts!</h5>
          </Col>
          <Col xs={4}>
            <h1>  </h1>
            <h5> </h5>
          </Col>
          <Col xs={4} className="text-center">
            <Globe size={100} color="brown" />
            <h1 className="rainbow-text"> Explore Guinea Pig Breeds </h1>
            <h5 className="rainbow-text"> Dive into a world of variety and learn about different breeds, their unique traits, and how to care for them.</h5>
          </Col>
        </Row>
      </Container>
    </Container>
  </main>
);

export default Home;
