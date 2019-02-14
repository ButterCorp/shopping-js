import React, { Component } from 'react';
import './App.css';
import ToggleButtonContainer from './containers/ToggleButtonContainer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Switch, Link} from 'react-router-dom';
import SecurityContainer from "./containers/SecurityContainer";
import MovieContainer from "./containers/MovieContainer";
import ProductContainer from "./containers/ProductContainer";
import MyObjectsContainer from "./containers/MyObjectsContainer";
import TransactionContainer from "./containers/TransactionContainer";
import MenuComponent from './components/MenuComponent';
import ProfileBanner from './containers/ProfileBanner';

class App extends Component {

  render() {

    return (
      <Router>
      <div className="App">
        <MenuComponent/>
        <header className="App-header">
            <ToggleButtonContainer/>
            <ProfileBanner/>
              <React.Fragment>
                  <Link to='/security/login'>Login</Link>
                  <Link to='/movies'>Movies</Link>
                <Switch>
                  <Route path="/security" component={SecurityContainer}/>
                  <Route path="/movies" component={MovieContainer}/>  
                  <Route path="/products" component={ProductContainer}/>     
                  <Route path="/my-objects" component={MyObjectsContainer}/>     
                  <Route path="/transactions" component={TransactionContainer}/>     
                </Switch>
              </React.Fragment>       
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
