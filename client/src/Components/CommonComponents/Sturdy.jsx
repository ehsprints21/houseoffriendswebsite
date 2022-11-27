import React from "react";
import classes from "../../Modules/Sturdy.module.css";
const Sturdy = (props) => {
  return (
    <div className={classes.sturdypara}>
      <span>{props.num}</span>
      <p>{props.para}</p>
    </div>
  );
};
export default Sturdy;
