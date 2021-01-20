import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "./components/home/HomeScreen";
import { Navbar } from "./components/Navbar";
import { OperationsScreen } from "./components/operations/OperationsScreen";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/operations" component={OperationsScreen}></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
