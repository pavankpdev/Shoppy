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
  Spinner,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// Components
import ProductCard from "../components/ProductCard/ProductCard.component";

// Actions
import { getProductsWithCategory } from "../redux/reducer/Products/Products.actions";

const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [productData, setProductData] = useState([]);

  // Redux state
  const reduxState = useSelector(({ products }) => ({ products }));

  // Params hooks
  const { category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProductsAction = async () => {
      const getproductsData = await dispatch(getProductsWithCategory(category));
      setProductData(getproductsData.payload);
    };
    getProductsAction();
  }, [category]);

  // Function to toggle filter modal
  const toggle = () => setShowFilter(!showFilter);

  return (
    <>
      <Modal isOpen={showFilter} toggle={toggle} backdrop>
        <ModalHeader toggle={toggle}>
          <h3 className="text-primary">Filter Products</h3>
        </ModalHeader>
        <ModalBody>
          <Col>
            <Label className="font-weight-600">Price Range</Label>
            <input
              type="range"
              className="custom-range"
              id="customRange1"
              min={100}
              max={500}
              step={50}
              // onChange={(e) => setPoints(e.target.value)}
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
            <Spinner color="primary" />
          ) : (
            productData.map(
              ({
                Category,
                Product_image1,
                Product_name,
                Product_Price,
                Product_ID,
              }) =>
                Category.includes(category) && (
                  <ProductCard
                    img={Product_image1}
                    name={Product_name}
                    price={Product_Price}
                    Product_ID={Product_ID}
                    category={Category}
                    key={Product_ID}
                  />
                )
            )
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
