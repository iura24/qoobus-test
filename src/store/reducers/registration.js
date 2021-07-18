const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_NEW":
      const newUser = {
        id: Math.random(),
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        password: action.payload.password,
      };
      return { newUser };
    case "AUTH":
      return { ...state, isAuth: action.payload.isAuth };
    case "LOGOUT":
      return { ...state, isAuth: action.payload.isAuth };
    default:
      return state;
  }
};

export default reducer;
