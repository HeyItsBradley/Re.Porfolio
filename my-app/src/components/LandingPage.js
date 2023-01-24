import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    const li = document.querySelectorAll("li");

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

  //todo: if url = "/" add a "-" character behind the home li
  return (
    <>
      <h1 className="name">Bradley Rodriguez</h1>
      <h3 className="title">Full Stack Dev</h3>
      <br></br>
      <ul>
        <li>Home</li>
        <li>Resume</li>
        <li>Projects</li>
        <li>Contact </li>
      </ul>
    </>
  );
}

export default LandingPage;
