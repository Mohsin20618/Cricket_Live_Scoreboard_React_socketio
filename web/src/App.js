import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Admin from "./Components/Admin/Admin";
import { Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <>
     
      <Switch>  
        <Route path="/Admin">
          <Admin />
        </Route>

       

        <Route exact path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
