/* eslint-disable no-restricted-globals */
import React, { useState, useEffect, useContext } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ButtonAppBar from './components/button-app-bar';
import LoginPage from './pages/login';
import AddCompany from './pages/add-company';
import RegistrationPage from './pages/registration';
import PrivateRoute from './components/private-route';
import ContractPage from './pages/contract';
import ContractsPage from './pages/contracts';
import ProfilePage from './pages/profile';
import Dashboard from './pages/dashboard';
import Companies from './pages/companies';
import OrderPage from './pages/order';
import Home from './pages/home';
import Footer from './components/footer';
import { AuthContextProvider } from './context/index';

import './App.scss';

function App() {
  return (
    <AuthContextProvider>
      <div
        className={`App ${
          !['/login', '/signup', '/'].includes(location.pathname)
            ? 'with-sidebar'
            : ''
        }`}
      >
        <NotificationContainer />
        <Router>
          {!['/login', '/signup', '/'].includes(location.pathname) ? (
            <ButtonAppBar />
          ) : null}
          <div
            className={`${
              !['/login', '/signup', '/'].includes(location.pathname)
                ? 'content'
                : ''
            }`}
          >
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={RegistrationPage} />
              <Route exact path="/add-company" component={AddCompany} />
              <Route exact path="/dashboard" component={ProfilePage} />
              <Route exact path="/companies" component={Companies} />
              <Route path="/contracts" component={ContractsPage} />
              <Route
                exact
                path="/dashboard/contracts"
                component={ContractsPage}
              />
              <Route exact path="/dashboard/orders" component={ContractsPage} />
              <Route exact path="/orders/:id" component={OrderPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    </AuthContextProvider>
  );
}

export default App;
