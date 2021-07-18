import Animation from "../components/Animation/Animation";
import Button from "../components/Button/Button";
import Chart from "../components/Chart.js/Chart";

import classes from "./HomePage.module.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const logoutHandler = () => {
    dispatch({
      type: "LOGOUT",
      payload: {
        isAuth: false,
      },
    });
    history.push("/");
  };
  return (
    <div className={classes.layout}>
      <div className={classes.actions}>
        <Button onClick={logoutHandler}>Logout</Button>
      </div>
      <h2>Tesla stock price last 10 days</h2>
      <Animation>
        <Chart />
      </Animation>
    </div>
  );
};

export default HomePage;
