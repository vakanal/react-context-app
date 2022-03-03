import { v4 as uuidv4 } from "uuid";

export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: { ...task, id: uuidv4() },
});

export const deleteTask = (id) => ({ type: "DELETE_TASK", payload: id });

export const updateTask = (task) => ({ type: "UPDATE_TASK", payload: task });
