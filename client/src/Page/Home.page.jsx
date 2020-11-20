// Libraries
import React, { useState } from "react";
import {
  Container,
  UncontrolledCarousel,
  Row,
  Card,
  CardBody,
  Col,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import NavBar from "../components/NavBar/NavBar.component";
import SelectedProducts from "../components/ProductTabs/SelectedProducts/SelectedProducts.component";
import FeaturedProducts from "../components/ProductTabs/FeaturedProducts/FeaturedProducts.components";
import Footer from "../components/Footer/Footer.components";

// Utilities
import { carouselList } from "../utils/defaultData.util";

const HomePage = () => {
  // Destructuring auth data from Auth0 hook
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <NavBar isAuth={isAuthenticated} user={user} />
      <UncontrolledCarousel items={carouselList} />
      <Container>
        <SelectedProducts />
        <FeaturedProducts />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
