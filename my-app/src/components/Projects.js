import React from "react";
import "../styles/projects.css";
import Github from "../assets/Github.png";

function Projects() {
  return (
    <ul className="list">
      <li className="newFont project">
        Dev.Log
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        DevDive
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        National Park Finder
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        Agent Select
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        Text Editor
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        Weather Dashboard
        <img className="github" src={Github} alt="github icon" />
      </li>
      <li className="newFont project">
        Password Generator
        <img className="github" src={Github} alt="github icon" />
      </li>
    </ul>
  );
}

export default Projects;
