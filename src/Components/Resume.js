import React, { Component } from 'react';
import { connect } from 'react-redux'
import {getProfileData} from '../actions/profileAction';
import Minimal from './Templates/Minimal';



class Resume extends Component {
	componentDidMount() {
		this.props.fetchProfile();
	}
  render() {
    return (
        <Minimal />
    );
  }
}


function mapStateProps(state) {
	return state
}
function mapDispatchToProps(dispatch) {
	return {
		fetchProfile: () => dispatch(getProfileData())
	}
}
export default connect(mapStateProps, mapDispatchToProps)(Resume);