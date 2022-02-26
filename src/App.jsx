import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Container fluid>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
      </Routes>
    </Container>
  );
}

export default App;
