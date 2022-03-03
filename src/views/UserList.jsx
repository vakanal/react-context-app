import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { BsCheckCircle, BsXCircleFill, BsPen, BsTrash } from "react-icons/bs";
import Table from "react-bootstrap/Table";
// import ButtonGroup from "react-bootstrap/ButtonGroup";
// import Button from "react-bootstrap/Button";
import { AppContext } from "../contexts";
// import { deleteTask } from "../contexts/actions";

export default function UserList() {
  const { getState } = useContext(AppContext);
  const { users } = getState();
  // const navigate = useNavigate();

  return (
    <Table responsive="sm" striped hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          {/*<th></th>*/}
        </tr>
      </thead>
      <tbody>
        {users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              {/*
              <td className="text-end">
                <ButtonGroup size="sm">
                  <Button
                    variant="outline-success"
                    onClick={() => navigate(`/edit/${task.id}`)}
                  >
                    <BsPen /> Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => dispatch(deleteTask(task.id))}
                  >
                    <BsTrash /> Delete
                  </Button>
                </ButtonGroup>
              </td>
              */}
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={4}>
              No Users
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
