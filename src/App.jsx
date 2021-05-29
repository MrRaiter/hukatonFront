import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ButtonAppBar from './components/button-app-bar';
import LoginPage from './pages/login';
import AddCompany from './pages/add-company';
import RegistrationPage from './pages/registration';
import Dashboard from './pages/dashboard';

import './App.scss';

function App() {
  return (
    <div className="App">
      <NotificationContainer />
      <header className="App-header" />
      <ButtonAppBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={RegistrationPage} />
          <Route exact path="/add-company" component={AddCompany} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
