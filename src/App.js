import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { Container } from "react-bootstrap";
import About from "./components/pages/About";
import { Routes } from "./components/shared/Routes";

export default function App() {
  return (
    <Container>
      <Router>
        <Routes />
        <div>
          <Switch>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/services">
              <Services />
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
    </Container>
  );
}

const Services = () => {
  return <h1>Services</h1>;
};
