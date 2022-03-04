import { useState, useContext, useEffect } from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { AppContext } from "../contexts";
import { addTask, updateTask } from "../contexts/actions";

const initialTask = {
  id: null,
  title: "",
  description: "",
  done: false,
};

export default function TaskForm({ handleClose, taskId }) {
  const [task, setTask] = useState(initialTask);
  const [validated, setValidated] = useState(false);
  const { getState, dispatch } = useContext(AppContext);
  const { tasks } = getState();

  const handleChange = (event) => {
    const { target } = event;
    const tName = target.name;
    const tValue = tName !== "done" ? target.value : target.checked;

    setTask({ ...task, [tName]: tValue });
  };

  const handleReset = () => {
    setTask(initialTask);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!task.id) {
        dispatch(addTask(task));
      } else {
        dispatch(updateTask(task));
      }

      handleClose();
    }

    setValidated(true);
  };

  useEffect(() => {
    setTask(initialTask);

    const taskFound = tasks.find((task) => task.id === taskId);

    if (taskFound) {
      setTask(taskFound);
    }
  }, [taskId, tasks]);

  return (
    <Card>
      <Card.Body>
        <Form
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
          onReset={handleReset}
        >
          <Form.Group className="mb-3" controlId="formTitle">
            <FloatingLabel controlId="formTitle" label="Enter Title">
              <Form.Control
                type="text"
                name="title"
                value={task.title}
                placeholder="Enter title"
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Title is required.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDesc">
            <FloatingLabel controlId="formDesc" label="Enter description">
              <Form.Control
                as="textarea"
                name="description"
                value={task.description}
                rows={3}
                placeholder="Enter description"
                required
                onChange={handleChange}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Description is required.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDone">
            <Form.Check
              type="checkbox"
              label="Check me if done"
              name="done"
              checked={task.done}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mt-5" controlId="formActions">
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="save-task-form">
                  {task.id ? "Update" : "Create"} a task
                </Tooltip>
              }
            >
              <Button variant="outline-primary" type="submit" className="me-4">
                SUBMIT
              </Button>
            </OverlayTrigger>

            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="reset-task-form">Reset form</Tooltip>}
            >
              <Button variant="outline-warning" type="reset">
                RESET
              </Button>
            </OverlayTrigger>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
