import React from "react";
import classes from "../Modules/Popular.module.css";
const Popularlisting = (props) => {
  return (
    <div className={classes.popular}>
      <img src={"/assets/" + props.image} />
      <p className={classes.city}>{props.city}</p>
      <p className={classes.totalcity}>{props.citytotal}</p>
    </div>
  );
};
export default Popularlisting;
