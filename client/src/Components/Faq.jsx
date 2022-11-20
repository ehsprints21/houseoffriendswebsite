import React, { useState } from "react";
import classes from "../Modules/Faq.module.css";
const Faq = (props) => {
  const [showanswer, setShowanswer] = useState(false);
  return (
    <div className={showanswer === true ? classes.answer : classes.faq}>
      <div>
        <p className={classes.question}>{props.question}</p>
        {showanswer && <p className={classes.ans}>Ans.{props.answer}</p>}
      </div>
      <button onClick={() => setShowanswer(!showanswer)}>
        View More <span>{showanswer === true ? "▲" : "▼"}</span>
      </button>
    </div>
  );
};
export default Faq;
