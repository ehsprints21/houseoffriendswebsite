import React from "react";
import classes from "../../Modules/Sturdy.module.css";
const Sturdy = (props) => {
  return (
    <div className={classes.sturdypara}>
      <div>{props.num}</div>
      <p>{props.para}</p>
    </div>
  );
};
export default Sturdy;
