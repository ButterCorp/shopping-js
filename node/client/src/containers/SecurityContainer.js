import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginForm from "../containers/LoginFormContainer";

export default class SecurityContainer extends React.Component {
  handleSubmit = (data) => {
      console.log(data);
      fetch('http://localhost:3000/login_check',
        {
          method: 'POST',
          headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(data)
      }).then(response => response.json())
      .then(data => localStorage.setItem('token', data.token));
  }
    render() {
        return (
            <Switch>
              <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        );
    }
}