import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ButtonAppBar from './components/button-app-bar';
import LoginPage from './pages/login';
import AddCompany from './pages/add-company';
import RegistrationPage from './pages/registration';
import CompanyPage from './pages/company';
import ContractsPage from './pages/contracts';
import ContractPage from './pages/contract';

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
          <Route exact path="/profile" component={CompanyPage} />
          <Route exact path="/contracts" component={ContractsPage} />
          <Route exact path="/contracts/:id" component={ContractPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
