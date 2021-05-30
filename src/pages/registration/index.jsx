/* eslint-disable consistent-return */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useState, useEffect, useContext } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button, Typography } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { AuthContext } from '../../context/index';
import SignUpImage from '../../assets/images/register.svg';

import '../login/auth.scss';

const SignUp = () => {
  const { isLoggedIn, signUp } = useContext(AuthContext);
  const [emailDirty, setEmaiDirty] = useState(false);
  const [PasswordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is empty !');
  const [passwordError, setPasswordError] = useState(
    'password less than 8 symbols !'
  );
  const history = useHistory();
  const [companies, setCompanies] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    company_id: '',
  });
  const inputHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (e.target.name === 'email') {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const error = !re.test(String(e.target.value).toLowerCase())
        ? 'Incorrect email'
        : '';
      setEmailError(error);
    } else if (e.target.name === 'password') {
      const passwordErr =
        e.target.value.length < 8
          ? 'the password must be more than 8 characters long'
          : '';
      setPasswordError(passwordErr);
    }
  };

  const getApi = async () => {
    const company = await axios.get(`${process.env.REACT_APP_BACKEND}company`);
    if (company.data) {
      setCompanies(company.data);
    }
  };
  useEffect(() => {
    getApi();
  }, []);

  useEffect(() => {
    getApi();
  }, []);

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
  };
  const defaultAxios = async (data) => {
    const { authorization } = data;

    axios.defaults.headers.common.authorization = authorization
      ? JSON.parse(`"${authorization}"`)
      : '';
  };
  const submitHanlder = async (e) => {
    e.preventDefault();
    await signUp(user);
  };
  if (isLoggedIn) {
    return <Redirect to="/notes" />;
  }

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section" style={{ padding: 20 }}>
            <img src={SignUpImage} alt="Login" />
          </div>
          <div id="form-section" style={{ paddingTop: 20, paddingBottom: 10 }}>
            <Typography align="center" variant="h6">
              Sign up
            </Typography>

            <form
              onSubmit={submitHanlder}
              className="authForm"
              style={{ minWidth: 350, gap: 5 }}
            >
              <TextField
                id="name"
                label="Name"
                name="firstname"
                onChange={inputHandler}
              />

              <TextField
                id="lastname"
                label="Last Name"
                name="lastname"
                onChange={inputHandler}
              />

              <TextField
                id="email"
                label="Email"
                type="email"
                name="email"
                onChange={inputHandler}
              />

              <TextField
                id="password"
                label="Password"
                type="password"
                name="password"
                onChange={inputHandler}
              />
              <TextField
                id="repeat_password"
                label="Repeat Password"
                type="password"
                name="password"
                onChange={inputHandler}
              />

              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={companies}
                getOptionLabel={(option) => option.title}
                onChange={(event, newValue) => {
                  setUser({ ...user, company_id: newValue.id });
                }}
                renderInput={(params) => (
                  <TextField
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...params}
                    label="Find your company"
                    margin="normal"
                    variant="outlined"
                    InputProps={{ ...params.InputProps, type: 'search' }}
                    style={{ marginTop: 30 }}
                  />
                )}
              />

              <Button
                className="loginButton"
                variant="contained"
                type="submit"
                color="primary"
              >
                Sign up
              </Button>
            </form>

            <p className="redirect">
              Already have an account?
              {'  '}
              <Link to="/login" style={{ marginLeft: '5px', color: '#222273' }}>
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
