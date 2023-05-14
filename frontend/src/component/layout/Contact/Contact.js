import React, { Fragment } from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";

const Contact = () => {
  return (
    <Fragment>
    <MetaData title="Contact" />
    <div className="contactContainer">
      <a className="mailBtn" href="SomethingUniqueness@gmail.com">
        <Button>Contact: SomethingUniqueness@gmail.com</Button>
      </a>
    </div>
    </Fragment>
  );
};

export default Contact;
