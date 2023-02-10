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
import externalLink from "../assets/externalLink.png";

function Projects() {
  const [previewImg, setPreviewImg] = useState(placeHolder);
  const [selectedProject, setSelectedProject] = useState(null);
  const [previewLink, setPreviewLink] = useState("");
  const [previewDescription, setPreviewDescription] = useState(
    "Click on project to get started."
  );
  const projectArr = [
    {
      title: "Dev.log  ",
      href: "https://github.com/btempini/dev-log",
      link: "https://dev-log.herokuapp.com/",
      image: devLog,
      description:
        "A social Media for developers. Includes image upload via Cloudinary and authentication with JWT. Post, comment, and interact with other developers. Utilized the MERN stack. (Click on image to go to deployed app.)",
    },
    {
      title: "DevDive  ",
      href: "https://github.com/BluSkreen/DevDive",
      link: "https://dev-dive.herokuapp.com/",
      image: devDive,
      description:
        "A reqruitment concept for only devlopers. Includes user authentication via cookies. Create a personalized profile and apply to jobs by searching through tags. Built using SERN stack. (Click on image to go to deployed app.) ",
    },
    {
      title: "National Park Finder  ",
      href: "https://github.com/HeyItsBradley/National-Park-Finder-with-Directions",
      link: "https://heyitsbradley.github.io/National-Park-Finder-with-Directions/",
      image: parkFinder,
      description:
        "A tool for finding National Parks based on state filters set by the user. Returns the user directions, a picture, and description of the Park. Also stores previous searches using local storage. Built using JavaScript, Waze Api, and NPS api. (Click on image to go to deployed app.)",
    },
    {
      title: "Valorant Agents  ",
      href: "https://github.com/HeyItsBradley/Valorant-Agents",
      link: "https://heyitsbradley.github.io/Valorant-Agents/",
      image: agents,
      description:
        "A site for viewing Valorant agents. Fetches data from an api and returns pictures and descriptions of agents to the user. Built using JavaScript and a Valorant Api. (Click on image to go to deployed app.)",
    },
    {
      title: "Weather Dashboard  ",
      href: "https://github.com/HeyItsBradley/Weather-Dashboard",
      link: "https://heyitsbradley.github.io/Weather-Dashboard/",
      image: weather,
      description:
        "A tool to show a user the current weather and a 5 day forecast. User can search for any city. Searches will be stored in local storage. Built using JavaScript and OpenWeather Api. (Click on image to go to deployed app.)",
    },
    {
      title: "Text Editor(PWA)  ",
      href: "https://github.com/HeyItsBradley/Text-Editor",
      link: "https://bradleys-text-editor.herokuapp.com/",
      image: textEditor,
      description:
        "A tool for writing code in the browser. Automatically saves data and works offline. Utilized service workers and a manifest file. Built using JavaScript. (Click on image to go to deployed app.)",
    },
    {
      title: "Password Generator  ",
      href: "https://github.com/HeyItsBradley/RandomPasswordGenerator",
      link: "https://heyitsbradley.github.io/RandomPasswordGenerator/",
      image: password,
      description:
        "A tool for generating random password. Takes in user inputs and makes a password based on the filters the user applies. Built using JavaScript. (Click on image to go to deployed app.) ",
    },
  ];
  return (
    <div className="container">
      <p className=" newFont projectDescription">{previewDescription}</p>
      <a href={previewLink} target="_blank" rel="noreferrer" className="imgDiv">
        {/* <img className="link" src={externalLink} alt={"External link Icon"} /> */}
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
                setPreviewDescription(project.description);
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
