import React from 'react';
import Banner from '../components/Banner';
import {connect} from 'react-redux';

class ProfileBanner extends React.Component {
    render () {
        const { user, isLogged } = this.props;
        return (<Banner content={isLogged ? user.name : 'Not Connected'}/>)
    }
}

const mapStateToProps = function (state, ownProps) {
    const {security: {user, isLogged}} = state;
    return {
        user,
        isLogged
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        //logUser: (username, password) => dispatch(logUser(username, password))
    }
}

const ConnectedProfileBanner = connect(mapStateToProps, mapDispatchToProps)(ProfileBanner);

export default ConnectedProfileBanner;