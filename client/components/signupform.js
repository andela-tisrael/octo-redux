import React from 'react';
import timezone from '../data/timezone';
import map from 'lodash/map';
import classnames from 'classnames';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      matchPassword: '',
      timezone: '',
      errors: {},
      isLoading: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    this.setState({errors: {}, isLoading: true});
    e.preventDefault();
    console.log(this.state);
    this.props.userSignupRequest(this.state).then(
      ()=>{}
      ).catch((error) =>  {
        console.log(error.response.data)
        this.setState({errors: error.response.data, isLoading: false})
      });
  }
  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const { errors } = this.state;  
    const options = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className={classnames("form-group", {"has-error": errors.username})}>
          <label htmlFor="username" className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            id="username"
            name="username"
            className="form-control"
            />
            { errors.username && <span className="help-block">{errors.username}</span>}
          </div>

        <div className={classnames("form-group", {"has-error": errors.email})}>
          <label htmlFor="email" className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            id="email"
            name="email"
            className="form-control"
            />
            { errors.email && <span className="help-block">{errors.email}</span>}
          </div>

        <div className={classnames("form-group", {"has-error": errors.password})}>
          <label htmlFor="password" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            id="password"
            name="password"
            className="form-control"
            />
            { errors.password && <span className="help-block">{errors.password}</span>}
          </div>

        <div className={classnames("form-group", {"has-error": errors.passwordConfirmation || errors.matchPassword})}>
          <label htmlFor="passwordConfirmation" className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            className="form-control"
            />
            { errors.passwordConfirmation && <span className="help-block">{errors.passwordConfirmation}</span>}
            { errors.matchPassword && <span className="help-block">{errors.matchPassword}</span>}
            
        </div>

        <div className={classnames("form-group", {"has-error": errors.timezone})}>
          <label htmlFor="timezone" className="control-label">Timezone</label>
          <select
            className="form-control"
            name="timezone"
            id="timezone"
            onChange={this.onChange}
            value={this.state.timezone}
            >
            <option value="" disabled>Choose Your Timezone</option>
            {options}
            </select>
            { errors.timezone && <span className="help-block">{errors.timezone}</span>}
        </div>
          
          <div className="form-group">
            <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
              Sign up
              </button>
            </div>
          </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}