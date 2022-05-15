import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Auth from "../pages/Auth";
import Plans from "../pages/Plans";

export default function AppNavigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Auth">
          <Auth />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="**">Resource not found</Route>
      </Switch>
    </Router>
  );
}
