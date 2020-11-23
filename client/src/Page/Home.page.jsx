// Libraries
import React, { useState } from "react";
import { Container, UncontrolledCarousel } from "reactstrap";

// Components
import SelectedProducts from "../components/ProductTabs/SelectedProducts/SelectedProducts.component";
import FeaturedProducts from "../components/ProductTabs/FeaturedProducts/FeaturedProducts.components";
import Footer from "../components/Footer/Footer.components";

// Utilities
import { carouselList } from "../utils/defaultData.util";

const HomePage = () => {
  return (
    <>
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
