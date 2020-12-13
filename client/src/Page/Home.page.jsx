// Libraries
import React, {  useEffect } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import CustomSpinner from "../components/CustomSpinner/CustomSpinner.component";
import Footer from "../components/Footer/Footer.components";
import CategoryCard from "../components/CategoryCard/CategoryCard.component";
import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts.component";

// Utilities
import { carouselList } from "../utils/defaultData.util";

// Redux actions
import { getHomePageData } from "../redux/reducer/Products/Products.actions";
import { authCustomer } from "../redux/reducer/Customer/Customer.action";

const HomePage = () => {
  const dispatch = useDispatch();
  const reduxState = useSelector(({ products }) => ({ products }));

  // Destructuring auth data from Auth0 hook
  const {  user } = useAuth0();

  useEffect(() => {
    dispatch(getHomePageData());
  }, []);

  useEffect(() => {
    const authAction = async () => {
      if (user) {
        const id = await dispatch(
          authCustomer(user.email, user.nickname, user.picture)
        );
      }
    };
    authAction();
  }, [user]);

  return (
    <>
      {reduxState.products.loading ? (
        <CustomSpinner />
      ) : (
        <>
          <div className="carousel_style">
            <UncontrolledCarousel items={carouselList} />
          </div>
          <CategoryCard />

          <FeaturedProducts />
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
