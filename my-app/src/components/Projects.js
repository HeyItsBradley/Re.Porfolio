import React from "react";
import "../styles/projects.css";
import Github from "../assets/Github.png";
import devLog from "../assets/devLog.png";
import devDive from "../assets/devDive.png";
import parkFinder from "../assets/parkFinder.png";
import agents from "../assets/agents.png";
import weather from "../assets/weather.png";
import textEditor from "../assets/textEditor.png";
import password from "../assets/password.png";

function Projects() {
  const projectArr = [
    {
      title: "Dev.log",
      href: "https://github.com/btempini/dev-log",
      image: devLog,
    },
    {
      title: "DevDive",
      href: "https://github.com/BluSkreen/DevDive",
      image: devDive,
    },
    {
      title: "National Park Finder",
      href: "https://github.com/HeyItsBradley/National-Park-Finder-with-Directions",
      image: parkFinder,
    },
    {
      title: "Valorant Agents",
      href: "https://github.com/HeyItsBradley/Valorant-Agents",
      image: agents,
    },
    {
      title: "Weather Dashboard",
      href: "https://github.com/HeyItsBradley/Weather-Dashboard",
      image: weather,
    },
    {
      title: "Text Editor(PWA)",
      href: "https://github.com/HeyItsBradley/Text-Editor",
      image: textEditor,
    },
    {
      title: "Password Generator",
      href: "https://github.com/HeyItsBradley/RandomPasswordGenerator",
      image: password,
    },
  ];
  return (
    <div className="container">
      <img className="preview" src={devLog} alt={"Project Preview"} />
      <ul className="list">
        {projectArr &&
          projectArr.map((project) => (
            <li className="newFont project">
              {project.title}
              <a target="_blank" rel="noreferrer" href={project.href}>
                <img className="github" src={Github} alt="github icon" />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Projects;
