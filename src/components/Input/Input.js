import React from "react";

import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.control}>
      <label className={classes.label}>{props.label}</label>
      {/* <input ref={inputRef} type={} id={} value={} onChange={} onBlur={} /> */}
      <input
        id={props.id}
        type={props.type}
        name={props.name}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
      {/* {props.nameInputHasError && (
        <p className="error-text">Name must not be empty</p>
      )} */}
      {props.isValid && (
        <label className={classes.invalid}>* {props.errorMessage}</label>
      )}
    </div>
  );
};

export default Input;
