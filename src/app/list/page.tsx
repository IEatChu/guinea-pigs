import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  return (
    <main>
      <Container id="add" fluid className="py-3">
        <Row xs={1} md={2} lg={3} className="g-4">
          <Col>
            <h2>Share</h2>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ListPage;
