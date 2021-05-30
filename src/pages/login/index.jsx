/* eslint-disable import/order */
/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect, useContext } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link, useHistory, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/index';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';

import { Button, TextField, Typography } from '@material-ui/core';
import LoginImage from '../../assets/images/login.svg';
import './auth.scss';

const LoginPage = () => {
  const { isLoggedIn, postLogin } = useContext(AuthContext);
  const [emailDirty, setEmaiDirty] = useState(false);
  const [PasswordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is empty !');
  const [passwordError, setPasswordError] = useState(
    'password less than 8 symbols !',
  );
  const [isFormValid, setIsFormValid] = useState(false);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const history = useHistory();

  useEffect(() => {
    if (emailError || passwordError) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [emailError, passwordError]);

  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      // eslint-disable-next-line operator-linebreak
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const error = !re.test(String(e.target.value).toLowerCase())
        ? 'Incorrect email'
        : '';
      setEmailError(error);
    } else if (e.target.name === 'password') {
      const passwordErr = e.target.value.length < 8
        ? 'the password must be more than 8 characters long'
        : '';
      setPasswordError(passwordErr);
    }
  };
  const blurHandle = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmaiDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        break;
    }
  };

  const submitHanlder = async (e) => {
    e.preventDefault();
    try {
      await postLogin(user);
    } catch (error) {
      NotificationManager.error('Error');
    }
  };
  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section" style={{ padding: 20 }}>
            <img src={LoginImage} alt="Login" />
          </div>
          <div id="form-section">
            <Typography align="center" variant="h6" style={{ marginTop: 20 }}>Welcome back</Typography>

            <form onSubmit={submitHanlder} className="authForm" style={{ gap: 10 }}>

              <TextField id="name" label="Email" type="email" name="email" onChange={inputHandler} />

              <TextField
                name="password"
                id="password"
                label="Password"
                type="password"
                name="password"
                onChange={inputHandler}
              />

              <Button className="loginButton" variant="contained" type="submit" color="primary" onChange={inputHandler}>
                Login
              </Button>
            </form>

            <p className="redirect">
              Don&apos;t have an account?
              <Link to="/signup" style={{ marginLeft: '10px', color: '#222273' }}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
