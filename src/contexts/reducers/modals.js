export const ModalsReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return action.payload;
    case "CLOSE_MODAL":
      return action.payload;
    default:
      return state;
  }
};
