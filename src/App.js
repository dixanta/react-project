import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}
function About() {
  return <h1>About Page</h1>;
}
function Contact() {
  return <h1>Contact Page</h1>;
}
