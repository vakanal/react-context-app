export const logMiddleware =
  (id) => (state) => (getState) => (next) => (action) => {
    console.log(id, "before action", action, getState());
    next(action);
    console.log(id, "after action", action, getState()); // *NOTE*: because `dispatch(action)`` is not synchronous. it does not gurantee that this getState() call return the value after the action is applied.
  };

export const logReducerMiddleware = ({ getState, dispatch }) => {
  return (next) => (action) => {
    console.log("prev state:", getState());
    console.log("action:", action);
    next(action);
    console.log("next state:", getState());
  };
};
