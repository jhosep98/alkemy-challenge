import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { OperationContextProvider } from "./context/OperationContext";

import { Home } from "./routes/Home";
import { Navbar } from "./components/Navbar.jsx";
import { UpdatePage } from "./routes/UpdatePage.jsx";
import { OperationList } from "./routes/OperationList";

function App() {
  return (
    <OperationContextProvider>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/operations" component={OperationList}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route
              exact
              path="/operations/:id/update"
              component={UpdatePage}
            ></Route>
          </Switch>
        </div>
      </Router>
    </OperationContextProvider>
  );
}

export default App;
