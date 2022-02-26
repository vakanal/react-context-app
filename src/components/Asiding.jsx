import { LinkContainer } from "react-router-bootstrap";
import { BsListTask, BsHouse, BsPencilSquare } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";

function Asiding() {
  return (
    <Nav className="flex-column" variant="pills">
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link eventKey="1">
            <BsHouse /> <span className="align-middle px-2">Home</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/list">
          <Nav.Link eventKey="2">
            <BsListTask /> <span className="align-middle px-2">List</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/add">
          <Nav.Link eventKey="3">
            <BsPencilSquare /> <span className="align-middle px-2">Form</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}

export default Asiding;
