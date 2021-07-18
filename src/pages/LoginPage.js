import { useDispatch, useSelector } from "react-redux";

import useInput from "../hooks/use-input";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import classes from "./LoginPage.module.css";
import Button from "../components/Button/Button";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState(false);

  const state = useSelector((state) => state);
  const registeredUser = state.newUser;

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => /\S+@\S+\.\S+/.test(value));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim() !== "" && value.length > 6);

  let formIsValid = false;

  if (enteredEmailIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const onSignupHandler = (event) => {
    event.preventDefault();
    if (!registeredUser) {
      setErrorMessage(true);
      resetEmailInput();
      resetPasswordInput();
      return;
    }
    setErrorMessage(true);

    if (
      registeredUser.email === enteredEmail &&
      registeredUser.password === enteredPassword
    ) {
      dispatch({
        type: "AUTH",
        payload: {
          isAuth: true,
        },
      });
      resetEmailInput();
      resetPasswordInput();
      setErrorMessage(false);
      history.push("/");
    }

    if (!enteredEmailIsValid && !enteredPasswordIsValid) {
      return;
    }
  };
  return (
    <div className={classes.layout}>
      <Card className={classes.register}>
        <form onSubmit={onSignupHandler}>
          <h1>Login</h1>
          <Input
            id="email"
            label="Email"
            isValid={emailInputHasError}
            errorMessage="Email or password may be wrong"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            name="email"
            type="email"
          />
          <Input
            id="password"
            label="Password"
            isValid={passwordHasError}
            errorMessage="Email or password may be wrong"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            name="password"
            type="password"
          />
          {errorMessage ? (
            <p style={{ color: "red", fontSize: "12px" }}>
              No such user found, please create an account
            </p>
          ) : (
            ""
          )}
          <div className={classes.actions}>
            <Button
              type="submit"
              disabled={!formIsValid}
              className={classes.btn}
            >
              Login
            </Button>
            <Link to="/signup">Create new account</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
