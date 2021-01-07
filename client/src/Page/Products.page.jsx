// Libraries
import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Modal,
  ModalHeader,
  Col,
  ModalBody,
  Label,
  Button,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toNumber } from "lodash";

// Components
import ProductCard from "../components/ProductCard/ProductCard.component";
import Spinner from "../components/CustomSpinner/CustomSpinner.component";
// Actions
import { getProductsWithCategory } from "../redux/reducer/Products/Products.actions";

const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [productData, setProductData] = useState([]);
  const [priceRange, setPriceRange] = useState("100");
  const [productDataCopy, setProductDataCopy] = useState([]);

  // Redux state
  const reduxState = useSelector(({ products }) => ({ products }));

  // Params hooks
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsAction = async () => {
      const getproductsData = await dispatch(getProductsWithCategory(category));
      setProductData(getproductsData.payload);
      setProductDataCopy(getproductsData.payload);
    };
    getProductsAction();
  }, [category]);

  useEffect(() => {
    setProductData(
      productDataCopy.filter(
        ({ Product_Price }) => Product_Price < toNumber(priceRange)
      )
    );
  }, [priceRange]);

  // Function to toggle filter modal
  const toggle = () => setShowFilter(!showFilter);

  // Function to reset price range filter
  const resetPriceRange = () => {
    toggle();
    setProductData(productDataCopy);
    setPriceRange("30000");
  };
  console.log(productData);
  return (
    <>
      <Modal isOpen={showFilter} toggle={toggle} backdrop>
        <ModalHeader toggle={toggle}>
          <h3 className="text-primary">Filter Products</h3>
        </ModalHeader>
        <ModalBody>
          <Col>
            <div className="d-flex justify-content-between">
              <Label className="font-weight-600">
                Price Range - {priceRange}
              </Label>
              <Button outline size="sm" onClick={resetPriceRange}>
                Reset <i className="fas fa-redo-alt" />
              </Button>
            </div>
            <input
              type="range"
              className="custom-range"
              id="customRange1"
              min={100}
              max={330000}
              step={50}
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
          </Col>
        </ModalBody>
      </Modal>
      <Container>
        <Row className="mt-3 justify-content-between border-bottom border-primary">
          <h1 className="text-primary">{category}</h1>
          <h3
            className="text-default pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter <i className="fas fa-sliders-h" />
          </h3>
        </Row>
        <Row className="justify-content-center">
          {reduxState.products.loading ? (
            <Spinner color="primary" text={`Fetching ${category} data`} />
          ) : (
            productData.map(
              (product) =>
                product.Category.includes(category) && (
                  <ProductCard {...product} key={product.Product_ID} />
                )
            )
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
