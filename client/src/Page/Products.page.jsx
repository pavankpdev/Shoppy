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

// Components
import ProductCard from "../components/ProductCard/ProductCard.component";

const ProductPage = () => {
  const [showFilter, setShowFilter] = useState(false);

  // Params hooks
  const { product } = useParams();

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
          <h1 className="text-primary">{product}</h1>
          <h3
            className="text-default pointer"
            onClick={() => setShowFilter(!showFilter)}
          >
            Filter <i className="fas fa-sliders-h" />
          </h3>
        </Row>
        <Row className="justify-content-center">
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/61pRgm0%2BbbL._SL1024_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/41XWQI4A6LL.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/71LcWGgFOkL._SL1500_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/81ho2uFyrLL._SL1500_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/61B7e9pNOPL.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/71Wxed3-zrL._SL1384_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/711h5gqoBLL._SL1500_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/71hdYpK6ioL._SL1500_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/61pRgm0%2BbbL._SL1024_.jpg" />
          <ProductCard img="https://images-na.ssl-images-amazon.com/images/I/61pRgm0%2BbbL._SL1024_.jpg" />
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
