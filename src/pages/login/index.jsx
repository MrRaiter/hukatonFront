/* eslint-disable consistent-return */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { NotificationManager } from 'react-notifications';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import 'react-notifications/lib/notifications.css';
import { Button, TextField, Typography } from '@material-ui/core';
import LoginImage from '../../assets/images/login.svg';
import './auth.scss';

const LoginPage = () => {
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

  const setTokens = (data) => {
    localStorage.setItem('token', JSON.stringify(data.authorization));
    localStorage.setItem('user', JSON.stringify(data.user));
    // setAuthTokens({ token: data.authorization, user: data.user });
  };
  const defaultAxios = async (data) => {
    const { authorization } = data;

    axios.defaults.headers.common.authorization = authorization
      ? JSON.parse(`"${authorization}"`)
      : '';
  };
  const submitHanlder = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND}login`, user,
      );
      if (response) {
        setTokens(response.data);
        defaultAxios(response.data);
        history.push('/profile');
      }
    } catch (error) {
      NotificationManager.error('Error');
    }
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={LoginImage} alt="Login" />
          </div>
          <div id="form-section">
            <Typography align="center" variant="h6" style={{ marginTop: 20 }}>Welcome back</Typography>

            <form onSubmit={submitHanlder} className="authForm">

              <TextField id="name" label="Email" />

              <TextField
                id="password"
                label="Password"
                type="password"
              />

              <Button className="loginButton" variant="contained" type="submit" color="primary">
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
