import React from "react";
import Table from "react-bootstrap/Table";
import { useAppContext } from "../hooks";

export default function UserList() {
  const { getState } = useAppContext();
  const { users } = getState();

  return (
    <Table responsive="sm" striped hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
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
