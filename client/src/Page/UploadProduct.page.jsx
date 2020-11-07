import React, { useState } from "react";
import {
  Card,
  CardBody,
  Input,
  CardHeader,
  Col,
  Container,
  Row,
  Label,
  Button,
} from "reactstrap";
import Select from "react-select";

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    product_description: "",
    product_category: [],
    seller_name: "",
    product_price: "",
  });

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const updateProductData = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const submitproductData = () => {
    console.log();
  };

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col md="7">
            <Card className="shadow">
              <CardHeader>
                <h1 className="display-4 font-weight-900 text-center text-primary">
                  Shoppy
                </h1>
              </CardHeader>
              <CardBody className="bg-secondary">
                <div>
                  <Label className="text-default font-weight-600">
                    Product name
                  </Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Gaming Laptop..."
                    type="text"
                    name="product_name"
                    value={productData.product_name}
                    onChange={updateProductData}
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product description
                  </Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="10th Generation Intel Processor..."
                    rows="3"
                    type="textarea"
                    name="product_description"
                    value={productData.product_description}
                    onChange={updateProductData}
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product image
                  </Label>
                  <Input type="file" name="file" />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product price
                  </Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="3000"
                    type="text"
                    name="product_price"
                    value={productData.product_price}
                    onChange={updateProductData}
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Seller name
                  </Label>
                  <Input
                    className="form-control-alternative"
                    placeholder="Pavan Kumar"
                    type="text"
                    name="seller_name"
                    value={productData.seller_name}
                    onChange={updateProductData}
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product category
                  </Label>
                  <Select options={options} isMulti name="product_category" />
                </div>
                <Button className="mt-4" color="primary" block>
                  Submit
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadProduct;
