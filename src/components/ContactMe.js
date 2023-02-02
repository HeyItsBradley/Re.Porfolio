import React from "react";
import "../styles/contact.css";
import externalLink from "../assets/externalLink.png";

function ContactMe() {
  return (
    <div className="linkContainer">
      <h2 className="newFont contact">
        <img src={externalLink} className="icon" alt="external link Icon" />
        <a
          href="https://github.com/HeyItsBradley"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </h2>
      <br></br>
      <h2 className="newFont contact">
        {" "}
        <img src={externalLink} className="icon" alt="external link Icon" />
        <a
          href="https://www.linkedin.com/in/bradley-rodriguez/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </h2>
      <br></br>
      <h2 className="newFont contact">
        {" "}
        <img src={externalLink} className="icon" alt="external link Icon" />
        <a
          href="mailto: bradleyrodriguez77@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          Email
        </a>
      </h2>
    </div>
  );
}

export default ContactMe;
