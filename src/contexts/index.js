import { createContext } from "react";
import { initialState } from "./state";
import { TasksReducer, UsersReducer, ModalsReducer } from "./reducers";
import { useEnhancedReducer } from "../hooks";
import { combineReducers } from "./utils";
import { logMiddleware } from "../middlewares";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch, getState] = useEnhancedReducer(
    combineReducers({
      tasks: TasksReducer,
      users: UsersReducer,
      modals: ModalsReducer,
    }),
    initialState,
    undefined,
    [logMiddleware(1)]
  );

  return (
    <AppContext.Provider value={{ state, getState, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// const [state, dispatch] = useReducer(AppReducer, initialState); //! Original
// const [state, dispatch] = useReducerX(AppReducer, initialState, [logReducerMiddleware]); //! Version B
