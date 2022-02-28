import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { AppReducer } from "./AppReducer";
import { useEnhancedReducer } from "../hooks/customHooks";
import { logMiddleware } from "../middlewares/customMiddlewares";

const initialState = {
  tasks: [
    {
      id: uuidv4(),
      title: "Task 1",
      description: "Description 1",
      done: false,
    },
    {
      id: uuidv4(),
      title: "Task 2",
      description: "Description 2",
      done: true,
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const ContextProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(AppReducer, initialState); //! Original

  const [state, dispatch, getState] = useEnhancedReducer(AppReducer, initialState, undefined, [logMiddleware(1)]); //! Version A
  
  // const [state, dispatch] = useReducerX(AppReducer, initialState, [logReducerMiddleware]); //! Version B

  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: { ...task, id: uuidv4() } });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const updateTask = (task) => dispatch({ type: "UPDATE_TASK", payload: task });

  return (
    <GlobalContext.Provider
      value={{ state, getState, addTask, deleteTask, updateTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
