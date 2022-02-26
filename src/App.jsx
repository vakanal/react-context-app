import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Heading from "./components/Heading";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import MainLayout from "./layouts/MainLayout";
import { ContextProvider } from "./contexts/GlobalContext";

function App() {
  return (
    <ContextProvider>
      <Container>
        <Heading />
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/list" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </MainLayout>
      </Container>
    </ContextProvider>
  );
}

export default App;
