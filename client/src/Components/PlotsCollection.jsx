import React from "react";
import classes from "../Modules/PlotsCollection.module.css";
const Plotscollection = (props) => {
  return (
    <div className={classes.plotsphoto}>
      <img src={props.photo} />
      <div className={classes.overlayplots}>
        <div className={classes.content}>
          <p>{props.propertyType}</p>
        </div>
      </div>
    </div>
  );
};
export default Plotscollection;
