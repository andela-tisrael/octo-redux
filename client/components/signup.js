import React from 'react';
import SignupForm from './signupform';
import {connect} from 'react-redux';
import { signupRequest } from '../actions/signupAction';

class SignUpPage extends React.Component {
  render() {
    console.log(this.props)
    const {signupRequest} = this.props
    // console.log(this.props)
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={signupRequest}/>
        </div>
      </div>
    );
  }
}

SignUpPage.propTypes = {
  signupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { signupRequest })(SignUpPage);