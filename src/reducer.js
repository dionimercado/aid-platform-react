const reducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      window.localStorage.setItem("JWT", payload.token);

      return {
        ...state,
        user: payload,
      };
    case "LOGOUT":
      window.localStorage.removeItem("JWT");

      return {
        ...state,
        user: {},
      };

    default:
      return state;
  }
};

export default reducer;
