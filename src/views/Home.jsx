import { Container, Row } from 'react-bootstrap';
import Gallery from '../componentes/Gallery';

export default function Home() {
  return (
    <>
      <Container>
        <h1 className="my-3">Natural Pic</h1>
        <Row xs={1} md={2} lg={4} className="g-3 mb-3">
          <Gallery filtro={'home'}/>
        </Row>
      </Container>
    </>
  );
}
