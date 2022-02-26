import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Asiding from "../components/Asiding";

function MainLayout({ children }) {
  return (
    <Row>
      <Col>{children}</Col>
      <Col sm={2} className="d-none d-md-block d-lg-block">
        <Asiding />
      </Col>
    </Row>
  );
}

export default MainLayout;
