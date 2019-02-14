import React from "react";
import {Switch, Route} from "react-router-dom";
import LoginForm from '../containers/LoginForm'

export default class SecurityContainer extends React.Component {

    handleSubmit = (data) => {

        //Gerer le submit
        console.log(JSON.stringify(data));
    }

    render() { 
        return ( 
            <Switch>
                <Route path="/security/login" render={() => <LoginForm onSubmit={this.handleSubmit}/>}/>
            </Switch>
        )
    }

}