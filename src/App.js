import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import logo from './logo.svg';
import { Navbar, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/menu" component={Menu} />
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
