import logo from "./logo.svg";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router basename="/">
      <LandingPage />
      <Routes>
        <Route path="/" element={<AboutMe />} />
      </Routes>
      <div className="center-box">
        <div className="bg"></div>
      </div>
    </Router>
  );
}

export default App;
