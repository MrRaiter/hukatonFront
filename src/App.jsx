import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ButtonAppBar from './components/button-app-bar';
import LoginPage from './pages/login';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
