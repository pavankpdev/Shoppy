// Libraries
import React, { useState, useEffect } from "react";
import { Container, Spinner, UncontrolledCarousel } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

// Components
import SelectedProducts from "../components/ProductTabs/SelectedProducts/SelectedProducts.component";
import FeaturedProducts from "../components/ProductTabs/FeaturedProducts/FeaturedProducts.components";
import CustomSpinner from "../components/CustomSpinner/CustomSpinner.component";
import Footer from "../components/Footer/Footer.components";

// Utilities
import { carouselList } from "../utils/defaultData.util";

// Redux actions
import { getHomePageData } from "../redux/reducer/Products/Products.actions";

const HomePage = () => {
  const [home, setHome] = useState([]);

  const dispatch = useDispatch();
  const reduxState = useSelector(({ products }) => ({ products }));

  useEffect(() => {
    const homeDataAction = async () => {
      const homeData = await dispatch(getHomePageData());
      setHome(homeData.payload);
      console.log(homeData.payload);
    };
    homeDataAction();
  }, []);

  return (
    <>
      {reduxState.products.loading ? (
        <CustomSpinner />
      ) : (
        <>
          <UncontrolledCarousel items={carouselList} />
          <Container>
            <SelectedProducts />
            <FeaturedProducts list={home} />
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};

export default HomePage;
