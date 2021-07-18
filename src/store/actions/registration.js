export const add_user = (data) => {
  return {
    type: "REGISTER_NEW",
    payload: data,
  };
};

export const is_auth = (isAuth) => {
  return {
    type: "AUTH",
    payload: isAuth,
  };
};
