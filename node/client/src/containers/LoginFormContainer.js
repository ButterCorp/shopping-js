import React from "react";

export default class LoginFormContainer extends React.Component {
    state = {
        username: "",
        password: ""
    }

    handleKeyUp = (event, field) => {
        const input = event.currentTarget;

        /*  Reviens à : 
            const newState = {}
            newState[field] = input.value
        */
        this.setState({
            [field]: input.value
        });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Username</label>
                <input onKeyUp = {(event) => this.handleKeyUp(event,"username")} />
                <label>Password</label>
                <input onKeyUp = {(event) => this.handleKeyUp(event,"password")} />
                <button type="submit">Submit</button>
            </form>
        );
    }
}