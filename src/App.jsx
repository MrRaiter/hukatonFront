import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ButtonAppBar from './components/button-app-bar';
import LoginPage from './pages/login';
import AddCompany from './pages/add-company';
import RegistrationPage from './pages/registration';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <ButtonAppBar />
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={RegistrationPage} />
          <Route exact path="/add-company" component={AddCompany} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
