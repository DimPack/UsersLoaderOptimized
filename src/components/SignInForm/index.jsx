import React, { Component } from 'react';
import styles from './SignInForm.module.css';

const initialState = {
  email: '',
  password: '',
  login: '',
};

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }
  handlerSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.login.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    this.setState({ ...initialState });
  };

  handlerChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value });

  render() {
    const { login, email, password } = this.state;
    return (
      <form className={styles.form} onSubmit={this.handlerSubmit}>
        <input
          type="text"
          name="login"
          placeholder="login"
          value={login}
          onChange={this.handlerChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handlerChange}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={this.handlerChange}
        />
        <input type="submit" value="sign in" />
      </form>
    );
  }
}

export default SignInForm;
