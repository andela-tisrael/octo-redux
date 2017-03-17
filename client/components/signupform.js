import React from 'react';
import timezone from '../data/timezone';
import map from 'lodash/map';

export default class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      timezone: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  onChange(e) {
    this.setState ({
      [e.target.name]: e.target.value
    })
  }
  render() {
    const options = map(timezone, (val, key) =>
      <option key={val} value={val}>{key}</option>
    );
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Join our community</h1>
        <div className="form-group">
          <label htmlFor="username" className="control-label">Username</label>
          <input
            value={this.state.username}
            onChange={this.onChange}
            type="text"
            id="username"
            name="username"
            className="form-control"
            />
          </div>

        <div className="form-group">
          <label htmlFor="email" className="control-label">Email</label>
          <input
            value={this.state.email}
            onChange={this.onChange}
            type="text"
            id="email"
            name="email"
            className="form-control"
            />
          </div>

        <div className="form-group">
          <label htmlFor="password" className="control-label">Password</label>
          <input
            value={this.state.password}
            onChange={this.onChange}
            type="password"
            id="password"
            name="password"
            className="form-control"
            />
          </div>

        <div className="form-group">
          <label htmlFor="passwordConfirmation" className="control-label">Password Confirmation</label>
          <input
            value={this.state.passwordConfirmation}
            onChange={this.onChange}
            type="password"
            id="passwordConfirmation"
            name="passwordConfirmation"
            className="form-control"
            />
        </div>

        <div className="form-group">
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
        </div>
          
          <div className="form-group">
            <button className="btn btn-primary btn-lg">
              Sign up
              </button>
            </div>
          </form>
    );
  }
}
