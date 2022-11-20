import React from "react";
import classes from "../Modules/Customer.module.css";
const Customer = (props) => {
  return (
    <div className={classes.customer}>
      <img src={"/assets/" + props.photo} />
      <div className={classes.custom}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.content}>{props.content}</p>
        <p className={classes.date}>{props.date}</p>
      </div>
    </div>
  );
};
export default Customer;
