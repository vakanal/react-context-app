import { LinkContainer } from "react-router-bootstrap";
import { BsListTask, BsHouse, BsFillPersonLinesFill } from "react-icons/bs";
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
        <LinkContainer to="/tasks">
          <Nav.Link>
            <BsListTask /> <span className="align-middle px-2">Tasks</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
      <Nav.Item>
        <LinkContainer to="/users">
          <Nav.Link>
            <BsFillPersonLinesFill />{" "}
            <span className="align-middle px-2">Users</span>
          </Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </Nav>
  );
}
