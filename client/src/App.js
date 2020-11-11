// Libraries
import React, { Suspense } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { Spinner } from "reactstrap";

// Components
import HomePage from "./Page/Home.page";
const UploadPage = React.lazy(() => import("./Page/UploadProduct.page"));

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Suspense fallback={<Spinner color="primary" className="text-center" />}>
          <Route path="/upload" exact component={UploadPage} />
        </Suspense>
      </Switch>
    </div>
  );
}
export default App;
