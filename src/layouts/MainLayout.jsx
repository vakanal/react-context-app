import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ErrorBoundary from "../components/ErrorBoundary";
import Asiding from "../components/Asiding";

export default function MainLayout() {
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <ErrorBoundary>
            <Outlet />
          </ErrorBoundary>
        </Col>
        <Col sm={2} className="d-none d-md-block d-lg-block">
          <Asiding />
        </Col>
      </Row>
    </Container>
  );
}
