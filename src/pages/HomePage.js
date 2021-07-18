import Animation from "../components/Animation/Animation";
import Button from "../components/Button/Button";
import Chart from "../components/Chart.js/Chart";

import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={classes.layout}>
      <div className={classes.actions}>
        <Button>Logout</Button>
      </div>
      <h2>Tesla stock price last 10 days</h2>
      <Animation>
        <Chart />
      </Animation>
    </div>
  );
};

export default HomePage;
