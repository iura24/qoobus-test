import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useInput from "../hooks/use-input";
import Card from "../components/Card/Card";
import Input from "../components/Input/Input";
import classes from "./RegisterPage.module.css";
import Button from "../components/Button/Button";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

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

  const {
    value: reEnteredPassword,
    isValid: reEnteredPasswordIsValid,
    hasError: reEnteredPasswordHasError,
    valueChangeHandler: reEnteredPasswordChangeHandler,
    inputBlurHandler: reEnteredPasswordBlurHandler,
    reset: resetReEnteredPInput,
  } = useInput(
    (value) =>
      value.trim() !== "" && value.length > 6 && value === enteredPassword
  );

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredLastNameIsValid &&
    enteredPasswordIsValid &&
    reEnteredPasswordIsValid
  ) {
    formIsValid = true;
  }

  const onSignupHandler = (event) => {
    event.preventDefault();
    if (
      !enteredNameIsValid &&
      !enteredEmailIsValid &&
      !enteredLastNameIsValid &&
      !enteredPasswordIsValid &&
      !reEnteredPasswordIsValid
    ) {
      return;
    }
    dispatch({
      type: "REGISTER_NEW",
      payload: {
        name: enteredName,
        lastName: enteredLastName,
        email: enteredEmail,
        password: enteredPassword,
      },
    });
    dispatch({
      type: "AUTH",
      payload: { isAuth: true },
    });
    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
    resetPasswordInput();
    resetReEnteredPInput();
    history.push("/");
  };

  return (
    <div className={classes.layout}>
      <Card className={classes.register}>
        <form onSubmit={onSignupHandler}>
          <h1>Sign up</h1>
          <Input
            id="name"
            label="First Name"
            isValid={nameInputHasError}
            errorMessage="First name should not be empty"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            name="name"
            type="text"
          />
          <Input
            id="lastName"
            label="Last Name"
            isValid={lastNameHasError}
            errorMessage="Last name should not be empty"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={enteredLastName}
            name="lastName"
            type="text"
          />
          <Input
            id="email"
            label="Email"
            isValid={emailInputHasError}
            errorMessage="Please enter a valid email"
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
            errorMessage="Password must contain more than 6 characters"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={enteredPassword}
            name="password"
            type="password"
          />
          <Input
            id="re-password"
            label="Repeat Password"
            isValid={reEnteredPasswordHasError}
            errorMessage="Password does not match"
            onChange={reEnteredPasswordChangeHandler}
            onBlur={reEnteredPasswordBlurHandler}
            value={reEnteredPassword}
            name="repeatPassword"
            type="password"
          />
          <div className={classes.actions}>
            <Button
              type="submit"
              disabled={!formIsValid}
              className={classes.btn}
            >
              Signup
            </Button>
            <Link to="/login">Back to login</Link>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default RegisterPage;
