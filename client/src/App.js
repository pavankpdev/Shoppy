// Libraries
import { Route, Link, Switch } from "react-router-dom";

// Components
import HomePage from "./Page/Home.page";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
      </Switch>
    </div>
  );
}
export default App;
