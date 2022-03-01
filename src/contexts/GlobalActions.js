import { v4 as uuidv4 } from "uuid";

export const addTask = (dispatch, task) =>
  dispatch({ type: "ADD_TASK", payload: { ...task, id: uuidv4() } });

export const deleteTask = (dispatch, id) =>
  dispatch({ type: "DELETE_TASK", payload: id });

export const updateTask = (dispatch, task) =>
  dispatch({ type: "UPDATE_TASK", payload: task });
