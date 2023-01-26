import React, { useState } from "react";
import "../styles/projects.css";
import Github from "../assets/Github.png";
import devLog from "../assets/devLog.png";
import devDive from "../assets/devDive.png";
import parkFinder from "../assets/parkFinder.png";
import agents from "../assets/agents.png";
import weather from "../assets/weather.png";
import textEditor from "../assets/textEditor.png";
import password from "../assets/password.png";
import placeHolder from "../assets/placeholder.png";

function Projects() {
  const [previewImg, setPreviewImg] = useState(placeHolder);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewLink, setPreviewLink] = useState("");
  const projectArr = [
    {
      title: "Dev.log",
      href: "https://github.com/btempini/dev-log",
      link: "https://dev-log.herokuapp.com/",
      image: devLog,
    },
    {
      title: "DevDive",
      href: "https://github.com/BluSkreen/DevDive",
      link: "https://dev-dive.herokuapp.com/",
      image: devDive,
    },
    {
      title: "National Park Finder",
      href: "https://github.com/HeyItsBradley/National-Park-Finder-with-Directions",
      link: "https://heyitsbradley.github.io/National-Park-Finder-with-Directions/",
      image: parkFinder,
    },
    {
      title: "Valorant Agents",
      href: "https://github.com/HeyItsBradley/Valorant-Agents",
      link: "https://heyitsbradley.github.io/Valorant-Agents/",
      image: agents,
    },
    {
      title: "Weather Dashboard",
      href: "https://github.com/HeyItsBradley/Weather-Dashboard",
      link: "https://heyitsbradley.github.io/Weather-Dashboard/",
      image: weather,
    },
    {
      title: "Text Editor(PWA)",
      href: "https://github.com/HeyItsBradley/Text-Editor",
      link: "https://bradleys-text-editor.herokuapp.com/",
      image: textEditor,
    },
    {
      title: "Password Generator",
      href: "https://github.com/HeyItsBradley/RandomPasswordGenerator",
      link: "https://heyitsbradley.github.io/RandomPasswordGenerator/",
      image: password,
    },
  ];
  return (
    <div className="container">
      <a href={previewLink} target="_blank" rel="noreferrer">
        <img className="preview" src={previewImg} alt={"Project Preview"} />
      </a>
      <ul className="list">
        {projectArr &&
          projectArr.map((project) => (
            <li
              className={`newFont project ${
                selectedProject === project.title ? "selected" : ""
              }`}
              onClick={() => {
                setSelectedProject(project.title);
                setPreviewImg(project.image);
                setPreviewLink(project.link);
              }}
            >
              {project.title}
              <a target="_blank" rel="noreferrer" href={project.href}>
                <img
                  className={`github ${
                    selectedProject === project.title ? "github-visible" : ""
                  }`}
                  src={Github}
                  alt="github icon"
                />
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Projects;
