export const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return { ...state, user: action.payload, isUserLogin: true };
    case "USER_LOGOUT":
      return { ...state, isUserLogin: false };
    default:
      return state;
  }
};
