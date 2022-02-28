import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsCheckCircle, BsXCircleFill, BsPen, BsTrash } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../contexts/GlobalContext";

export default function TaskList() {
  const { getState, deleteTask } = useContext(GlobalContext);
  const { tasks } = getState(); //! Version A
  const navigate = useNavigate();

  return (
    <Table responsive="sm" striped hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Description</th>
          <th className="text-end">Done</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{index + 1}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td className="text-end">
                {task.done ? <BsCheckCircle /> : <BsXCircleFill />}
              </td>
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
                    onClick={() => deleteTask(task.id)}
                  >
                    <BsTrash /> Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td className="text-center" colSpan={5}>
              No Tasks
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}
