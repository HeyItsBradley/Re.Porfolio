import React from "react";
import "../styles/projects.css";
import Github from "../assets/Github.png";

function Projects() {
  return (
    <ul className="list">
      <li className="newFont project">
        Dev.Log
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/btempini/dev-log"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        DevDive
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/BluSkreen/DevDive"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        National Park Finder
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyItsBradley/National-Park-Finder-with-Directions"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        Agent Select
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyItsBradley/Valorant-Agents"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        Text Editor
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyItsBradley/Text-Editor"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        Weather Dashboard
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyItsBradley/Weather-Dashboard"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
      <li className="newFont project">
        Password Generator
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/HeyItsBradley/RandomPasswordGenerator"
        >
          <img className="github" src={Github} alt="github icon" />
        </a>
      </li>
    </ul>
  );
}

export default Projects;
