/* eslint-disable no-restricted-globals */
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

import './App.scss';

function App() {
  return (
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
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={RegistrationPage} />
            <Route exact path="/add-company" component={AddCompany} />
            <Route exact path="/dashboard" component={ProfilePage} />
            <Route exact path="/companies" component={Companies} />
            <Route
              exact
              path="/dashboard/contracts"
              component={ContractsPage}
            />
            <Route exact path="/orders/:id" component={OrderPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
