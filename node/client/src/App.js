import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from './containers/ToggleButtonContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch, Link} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import MovieContainer from "./containers/MovieContainer";

class App extends Component {

  render() {
    const style = {
      maxHeight: 50,
      maxWidth: "100%"
    };


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={style} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <ToggleButtonContainer/>
          <Router>
            <React.Fragment>
            <Link to="/security/login">Login</Link>
            <Link to="/movies">Movies</Link>
            <Switch>
              <Route path="/security" component={SecurityContainer} />
              <Route path="/" component={ToggleButtonContainer} />
              <Route path="/movies" component={MovieContainer} />
            </Switch>
            </React.Fragment>
          </Router>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
