import { Switch, BrowserRouter as Router } from 'react-router-dom';
import ButtonAppBar from './navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <ButtonAppBar />
      <Router>
        <Switch />
      </Router>
    </div>
  );
}

export default App;
