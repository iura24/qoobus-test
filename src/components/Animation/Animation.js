import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import Button from "../Button/Button";

import "./Animation.css";

const Animation = (props) => {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <div style={{ padding: "1rem" }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)}>Show Chart</Button>
      )}
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {props.children}
          <Button
            style={{ marginTop: "1rem" }}
            onClick={() => setShowMessage(false)}
          >
            Close
          </Button>
        </div>
      </CSSTransition>
    </div>
  );
};

export default Animation;
