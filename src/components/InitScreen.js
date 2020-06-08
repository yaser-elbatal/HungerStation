import React, { Component } from "react";
import { AsyncStorage } from 'react-native';
import {connect} from "react-redux";
import {chooseLang , tempAuth} from "../actions";

class InitScreen extends Component {
    constructor(props) {
        super(props);
    }

    async componentWillMount() {
        console.log('auth..', this.props.auth , 'user profile ..', this.props.user);

           if (this.props.user == null || this.props.auth == null)
                this.props.navigation.navigate('login');
    }


    render() {
        return false;
    }
}

const mapStateToProps = ({ auth, profile, lang }) => {
    return {
        auth: auth.user,
        user: profile.user,
        lang: lang.lang
    };
};

export default connect(mapStateToProps, {chooseLang, tempAuth})(InitScreen);
