// Libraries
import React, { useState } from "react";
import { Container, UncontrolledCarousel, Row } from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import NavBar from "../components/NavBar/NavBar.component";
import ProductTab from "../components/ProductTabs/ProductTabs.component";

// Utilities
import { carouselList } from "../utils/defaultData.util";

const HomePage = () => {
  // Destructuring auth data from Auth0 hook
  const { isAuthenticated, user } = useAuth0();
  return (
    <>
      <UncontrolledCarousel items={carouselList} />
      <Container>
        <ProductTab />
      </Container>
    </>
  );
};

export default HomePage;
