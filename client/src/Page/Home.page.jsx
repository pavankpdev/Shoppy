// Libraries
import React, { useState, useEffect } from "react";
import { Container, Spinner, UncontrolledCarousel, Col, Row } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

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
  const [home, setHome] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector(({ products }) => ({ products }));

  // Destructuring auth data from Auth0 hook
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const homeDataAction = async () => {
      const homeData = await dispatch(getHomePageData());
      setHome(homeData.payload.allProducts);
      setNewArrivals(homeData.payload.newArrivals);
    };
    homeDataAction();
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

  console.log(user);

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
