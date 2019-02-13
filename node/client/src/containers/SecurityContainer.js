import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginForm from '../containers/LoginForm'

export default class SecurityContainer extends React.Component {

    handleSubmit = (data) => {

        //Gerer le submit
        console.log(JSON.stringify(data));
        fetch('http://localhost:3000/login_check', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'   
            },
            body: JSON.stringify(data)
        }).then(response => response.json())
        .then(data => localStorage.setItem('token', data.token))
    }

    render() { 
        return ( 
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        )
    }

}