// Libraries
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import NavBar from "./components/NavBar/NavBar.component";
import Spinner from "./components/CustomSpinner/CustomSpinner.component";

// Pages
const HomePage = React.lazy(() => import("./Page/Home.page"));
const UploadPage = React.lazy(() => import("./Page/UploadProduct.page"));
const ProductPage = React.lazy(() => import("./Page/Products.page"));
const SelectedProduct = React.lazy(() => import("./Page/SelectedProduct.page"));
const CartPage = React.lazy(() => import("./Page/Cart.page"));
const OrderPage = React.lazy(() => import("./Page/Orders.page"));
const TrackPage = React.lazy(() => import("./Page/Track.page"));
const SearchPage = React.lazy(() => import("./Page/Search.page"));

function App() {
  // Destructuring auth data from Auth0 hook
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <NavBar isAuth={isAuthenticated} user={user} />
      <Switch>
        <Suspense
          fallback={<Spinner color="primary" className="text-center" />}
        >
          <Route path="/" exact component={HomePage} />
          <Route path="/upload" exact component={UploadPage} />
          <Route path="/products/:category" exact component={ProductPage} />
          <Route
            path="/products/:category/:product_id"
            exact
            component={SelectedProduct}
          />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/orders" exact component={OrderPage} />
          <Route path="/track/:shippingId" exact component={TrackPage} />
          <Route path="/search" exact component={SearchPage} />
        </Suspense>
      </Switch>
    </div>
  );
}
export default App;
