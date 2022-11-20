import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "../Modules/Form.module.css";
import Navbar from "../Components/CommonComponents/Navbar";
const Form = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6nc6hho",
        "template_egwovsj",
        form.current,
        "xPyN3DMC7dSZ5RRxC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.container}>
        <form className={classes.formcontainer} onSubmit={sendEmail} ref={form}>
          <p>Kindly fill the Form</p>
          <input type="text" placeholder="First Name:" />
          <input type="text" placeholder="Last Name:" />
          <input type="text" placeholder="Email id:" />
          <input type="text" placeholder="Phone no.:" />
          <input type="text" placeholder="Address" />
          <button type="submit">Submit</button>
        </form>
        <div className={classes.imagecontainer}>
          <img src="/assets/form.png" />
        </div>
      </div>
    </React.Fragment>
  );
};
export default Form;
