import React from "react";
import "../styles/projects.css";
import Github from "../assets/Github.png";

function Projects() {
  const projectArr = [
    {
      title: "Dev.log",
      href: "https://github.com/btempini/dev-log",
    },
    {
      title: "DevDive",
      href: "https://github.com/BluSkreen/DevDive",
    },
    {
      title: "National Park Finder",
      href: "https://github.com/HeyItsBradley/National-Park-Finder-with-Directions",
    },
    {
      title: "Valorant Agents",
      href: "https://github.com/HeyItsBradley/Valorant-Agents",
    },
    {
      title: "Weather Dashboard",
      href: "https://github.com/HeyItsBradley/Weather-Dashboard",
    },
    {
      title: "Text Editor",
      href: "https://github.com/HeyItsBradley/Text-Editor",
    },
    {
      title: "Password Generator",
      href: "https://github.com/HeyItsBradley/RandomPasswordGenerator",
    },
  ];
  return (
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
  );
}

export default Projects;
