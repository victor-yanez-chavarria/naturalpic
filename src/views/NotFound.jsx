import { Container } from 'react-bootstrap';

export default function NotFound() {
  return (
    <Container>
      <p className="text-dark text-center fs-2 mt-5">
        La url que intentas ingresar <span className="fw-bold">no existe </span>
        😑
      </p>
    </Container>
  );
}
