import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./routes/home/HomeScreen";
import { OperationsScreen } from "./routes/operations/OperationsScreen";
import { OperationUpdate } from "./routes/operationUpdate/OperationUpdate";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/operations" component={OperationsScreen}></Route>
          <Route
            exact
            path="/operations/:id/update"
            component={OperationUpdate}
          ></Route>
          <Route exact path="/" component={HomeScreen}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
