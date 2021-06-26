import './App.css';
import LandingPage from './components/LandingPage';
import { Switch, Route } from "react-router-dom"
import Register from './components/Register';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage}/>
      <Route exact path="/register" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  );
}

export default App;
