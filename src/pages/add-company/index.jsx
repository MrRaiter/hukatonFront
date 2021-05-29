/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable operator-linebreak */
/* eslint-disable indent */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import SignUpImage from '../../assets/images/add-comany.svg';
import 'react-notifications/lib/notifications.css';
import '../login/auth.scss';
// useEffect
const SignUp = () => {
  const [emailDirty, setEmaiDirty] = useState(false);
  const [PasswordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email is empty !');
  const [passwordError, setPasswordError] = useState(
    'password less than 8 symbols !'
  );
  const [user, setUser] = useState({
    email: '',
    phone: '',
    inn: '',
    title: '',
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
    const company = await axios.post(
      `${process.env.REACT_APP_BACKEND}company`,
      user
    );
    if (company) {
      NotificationManager.success('Company was created');
    }
  };

  return (
    <div id="auth-container">
      <div id="auth-card">
        <div className="card-shadow">
          <div id="image-section">
            <img src={SignUpImage} alt="Login" />
          </div>
          <div id="form-section">
            <h4>Add company</h4>

            <form onSubmit={submitHanlder}>
              <div className="input-field mb-1">
                <input
                  placeholder="Title"
                  name="title"
                  onChange={inputHandler}
                />
              </div>
              <div className="input-field mb-1">
                <input placeholder="INN" name="inn" onChange={inputHandler} />
              </div>
              <div className="input-field mb-1">
                {emailDirty && emailError && (
                  <div style={{ color: 'red' }}>{emailError}</div>
                )}
                <input
                  onBlur={(e) => blurHandle(e)}
                  placeholder="phone"
                  name="phone"
                  onChange={inputHandler}
                />
              </div>
              <div className="input-field mb-2">
                {PasswordDirty && PasswordDirty && (
                  <div style={{ color: 'red' }}>{passwordError}</div>
                )}
                <input
                  onBlur={(e) => blurHandle(e)}
                  placeholder="email"
                  name="email"
                  onChange={inputHandler}
                />
              </div>
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
