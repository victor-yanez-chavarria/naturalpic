import { Container, Row } from 'react-bootstrap';
import Gallery from '../componentes/Gallery';

export default function Favoritos() {
  return (
    <Container>
      <h1 className='py-3'>Favoritos</h1>
      <Row xs={1} md={2} lg={4} className="g-3 mb-3">
          <Gallery filtro={'favoritos'}/>
        </Row>
    </Container>
  );
}
