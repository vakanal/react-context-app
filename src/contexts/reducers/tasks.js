export const TasksReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE_TASK": {
      const updatedTask = action.payload;
      const updatedTasks = state.map((task) => {
        if (task.id === updatedTask.id) {
          task.title = updatedTask.title;
          task.description = updatedTask.description;
          task.done = updatedTask.done;
        }

        return task;
      });

      return updatedTasks;
    }
    default:
      return state;
  }
};
