import { LinkContainer } from "react-router-bootstrap";
import { BsListTask, BsHouse, BsPencilSquare } from "react-icons/bs";
import Nav from "react-bootstrap/Nav";

export default function Asiding() {
  return (
    <Nav className="flex-column" variant="pills" activeKey>
      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link>
            <BsHouse /> <span className="align-middle px-2">Home</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/list">
          <Nav.Link>
            <BsListTask /> <span className="align-middle px-2">List</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/add">
          <Nav.Link>
            <BsPencilSquare /> <span className="align-middle px-2">Form</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}