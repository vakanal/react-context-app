import { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GlobalContext } from "../contexts/GlobalContext";

const initialTask = {
  id: null,
  title: "",
  description: "",
  done: false,
};

export default function TaskForm() {
  const [task, setTask] = useState(initialTask);
  const [validated, setValidated] = useState(false);
  const { getState, addTask, updateTask } = useContext(GlobalContext);
  const { tasks } = getState(); //! Version A
  const navigate = useNavigate();
  const params = useParams();

  const handleChange = (event) => {
    const { target } = event;
    const tName = target.name;
    const tValue = tName !== "done" ? target.value : target.checked;

    setTask({ ...task, [tName]: tValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      if (!task.id) {
        addTask(task);
      } else {
        updateTask(task);
      }

      navigate("/list");
    }

    setValidated(true);
  };

  useEffect(() => {
    setTask(initialTask);

    const taskFound = tasks.find((task) => task.id === params.id);

    if (taskFound) {
      setTask(taskFound);
    } else {
      navigate("/add");
    }
  }, [params.id, tasks, navigate]);

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>Title</Form.Label>
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
      </Form.Group>

      <Form.Group className="mb-3" controlId="formDesc">
        <Form.Label>Description</Form.Label>
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

      <Button variant="primary" type="submit">
        {task.id ? "Update" : "Create"} Task
      </Button>
    </Form>
  );
}
