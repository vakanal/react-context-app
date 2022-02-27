import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./contexts/GlobalContext";
import Spinner from "react-bootstrap/Spinner";
import MainLayout from "./layouts/MainLayout";
import Heading from "./components/Heading";
import Home from "./components/Home";
import TaskForm from "./components/TaskForm";

const TaskList = React.lazy(() => import("./components/TaskList"));

export default function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Heading />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route
              path="list"
              element={
                <React.Suspense
                  fallback={
                    <Spinner animation="border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  }
                >
                  <TaskList />
                </React.Suspense>
              }
            />
            <Route path="add" element={<TaskForm />} />
            <Route path="edit/:id" element={<TaskForm />} />
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}
