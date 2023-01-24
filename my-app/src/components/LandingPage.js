import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const li = document.querySelectorAll("li");
    li.forEach((el) => el.classList.remove("underline")); // remove underline from all li elements

    switch (location.pathname) {
      case "/":
        li[0].classList.add("underline");
        break;
      case "/resume":
        li[1].classList.add("underline");
        break;
      case "/projects":
        li[2].classList.add("underline");
        break;
      case "/contact":
        li[3].classList.add("underline");
        break;
    }
  }, [location]);

  return (
    <>
      <h1 className="name">Bradley Rodriguez</h1>
      <h3 className="title">Full Stack Dev</h3>
      <br></br>
      <ul className="linkUl">
        <Link to={"/"}>
          <li className="links">Home</li>
        </Link>
        <Link to={"/resume"}>
          <li className="links">Resume</li>
        </Link>
        <Link to={"/projects"}>
          <li className="links">Projects</li>
        </Link>
        <Link to={"/contact"}>
          <li className="links">Contact </li>
        </Link>
      </ul>
    </>
  );
}

export default LandingPage;
