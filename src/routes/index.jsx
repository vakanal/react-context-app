import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MainLayout from "../layouts/MainLayout";
import Home from "../views/Home";
import TaskForm from "../views/TaskForm";

const TaskList = lazy(() => import("../views/TaskList"));
const UserList = lazy(() => import("../views/UserList"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="list"
          element={
            <Suspense
              fallback={
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              }
            >
              <TaskList />
            </Suspense>
          }
        />
        <Route path="add" element={<TaskForm />} />
        <Route path="edit/:id" element={<TaskForm />} />
        <Route
          path="users"
          element={
            <Suspense
              fallback={
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              }
            >
              <UserList />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
