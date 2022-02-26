import { LinkContainer } from "react-router-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Heading() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="mb-4">
      <Container>
        <Navbar.Brand>ToDo List App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/list">
              <Nav.Link>Task List</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add">
              <Nav.Link>Task Form</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Heading;
