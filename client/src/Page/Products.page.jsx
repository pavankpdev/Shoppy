// Libraries
import React, { useState } from "react";
import {
  Container,
  Row,
  Modal,
  ModalHeader,
  Col,
  ModalBody,
  Label,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Components
import ProductCard from "../components/ProductCard/ProductCard.component";

const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  // Redux state
  const reduxState = useSelector(({ products }) => ({ products }));

  // Params hooks
  const { category } = useParams();

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
          {reduxState.products.home.map(
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
                />
              )
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
