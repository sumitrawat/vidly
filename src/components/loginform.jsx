import React, { Component } from "react";
import Input from "./common/input";
class LoginForm extends Component {
  state = { account: { username: "", password: "" } };
  handleSubmit() {}
  handleChange = e => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };
  render() {
    return (
      <form className="container">
        <Input
          value={this.state.account.username}
          type="email"
          fieldName="username"
          fieldText="UserName"
          mutedText="We will not share it with anyone"
          onUpdate={this.handleChange}
        />
        <div className="form-group">
          <Input
            type="password"
            fieldName="password"
            fieldText="Password"
            value={this.state.account.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          type="submit"
          onClick={this.handleSubmit}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default LoginForm;
