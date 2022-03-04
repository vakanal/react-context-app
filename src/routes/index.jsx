import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import MainLayout from "../layouts/Main";
import Home from "../views/Home";

const TaskList = lazy(() => import("../views/TaskList"));
const UserList = lazy(() => import("../views/UserList"));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route
          path="tasks"
          element={
            <Suspense
              fallback={
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading Tasks...</span>
                </Spinner>
              }
            >
              <TaskList />
            </Suspense>
          }
        />
        <Route
          path="users"
          element={
            <Suspense
              fallback={
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading Users...</span>
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
