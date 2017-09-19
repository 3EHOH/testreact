import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Software from './components/Software';
import Writing from './components/Writing';
import Art from './components/Art';
import {PageHeader} from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div className="container">
      <div className="App">
        <div className="App-header">
        <PageHeader>Zenon Evans
          <br />
          <small>Full Stack Software Engineer</small>
          <h4>Want to collaborate?
          Me too. <a href="https://www.linkedin.com/in/zenon-evans-10b10373">Let's talk</a>.
          </h4>
        </PageHeader>
        </div>
        <Intro />
        <Software />
        <Writing />
        <Art />
      </div>
      </div>
    );
  }
}

export default App;
