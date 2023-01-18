import logo from "./logo.svg";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import "./App.css";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
      </Routes>
      <div className="center-box">
        <div className="bg"></div>
      </div>
    </Router>
  );
}

export default App;
