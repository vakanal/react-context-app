import React from "react";
import { BsCheckCircle, BsXCircleFill, BsPen, BsTrash } from "react-icons/bs";
import Table from "react-bootstrap/Table";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useAppContext } from "../hooks";
import { deleteTask, showModal } from "../contexts/actions";
import ModalsLayout from "../layouts/Modals";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [taskId, setTaskId] = React.useState(null);
  const { getState, dispatch } = useAppContext();
  const { tasks } = getState();
  const handleShowModal = () => dispatch(showModal());
  const handleEdit = (id) => {
    setTaskId(id);
    handleShowModal();
  };

  return (
    <Card>
      <ModalsLayout title="Task Form">
        <TaskForm taskId={taskId} />
      </ModalsLayout>

      <Card.Header>
        <Button onClick={handleShowModal}>Add Task</Button>
      </Card.Header>

      <Card.Body>
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
                        variant="outline-primary"
                        onClick={() => handleEdit(task.id)}
                      >
                        <BsPen /> Edit
                      </Button>
                      <Button
                        variant="outline-primary"
                        onClick={() => dispatch(deleteTask(task.id))}
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
      </Card.Body>
    </Card>
  );
}
