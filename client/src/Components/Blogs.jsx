import React from "react";
import classes from "../Modules/Blog.module.css";
const Blogs = (props) => {
  return (
    <div className={classes.blogs}>
      <img src={"/assets/" + props.photo} />
      <p>{props.title}</p>
      <p>{props.date}</p>
    </div>
  );
};
export default Blogs;
