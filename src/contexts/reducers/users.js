export const UsersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);
    case "UPDATE_USER": {
      const updatedUser = action.payload;
      const updatedUsers = state.users.map((user) => {
        if (user.id === updatedUser.id) {
          user.name = updatedUser.name;
          user.username = updatedUser.username;
          user.email = updatedUser.email;
        }

        return user;
      });
      return updatedUsers;
    }
    default:
      return state;
  }
};
