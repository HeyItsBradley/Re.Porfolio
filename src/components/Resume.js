import React from "react";
import resume from "../assets/BradleyRodriguezResume.pdf";

import "../styles/resume.css";

function Resume() {
  return (
    <div className="containerDiv">
      <h2 className="newFont download" hre>
        <a target={"_blank"} rel="noreferrer" href={resume}>
          <p>Download Resume</p>
        </a>
      </h2>
      <p className="newFont header">Technology:</p>
      <ul className="tecList">
        <li className="li newFont">MongoDB</li>
        <li className="li newFont">Express</li>
        <li className="li newFont">React</li>
        <li className="li newFont">NodeJS</li>
        <li className="li newFont">JavaScript</li>
        <li className="li newFont">HTML</li>
        <li className="li newFont">CSS</li>
        <li className="li newFont">mySQL</li>
        <li className="li newFont">GraphQL</li>
        <li className="li newFont">Apollo</li>
      </ul>
    </div>
  );
}

export default Resume;
