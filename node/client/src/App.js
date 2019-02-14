import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from './containers/ToggleButtonContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch, Link} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import MovieContainer from "./containers/MovieContainer";
import ProductContainer from "./containers/ProductContainer";
import MenuComponent from './components/MenuComponent';
import ProfileBanner from './containers/ProfileBanner';

class App extends Component {

  render() {

    return (
      <div className="App">
        <MenuComponent/>
        <header className="App-header">
            <ToggleButtonContainer/>
            <ProfileBanner/>
            <Router>
              <React.Fragment>
                  <Link to='/security/login'>Login</Link>
                  <Link to='/movies'>Movies</Link>
                <Switch>
                  <Route path="/security" component={SecurityContainer}/>
                  <Route path="/movies" component={MovieContainer}/>  
                  <Route path="/products" component={ProductContainer}/>    
                </Switch>
              </React.Fragment>       
            </Router>
        </header>
      </div>
    );
  }
}

export default App;
