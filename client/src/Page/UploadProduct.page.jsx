import React, { useState, useEffect } from "react";
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
  Alert,
  Spinner,
} from "reactstrap";
import Select from "react-select";
import { useSelector, useDispatch } from "react-redux";
import map from "lodash/map";

// Redux Actions
import { uploadProductData } from "../redux/reducer/Products/Products.actions";

// Components
import InputField from "../components/InputFields/InputField.component";

const UploadProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: [],
    seller: "",
    price: "",
    img1: "",
    img2: "",
  });
  const [error, setError] = useState({ server: "", client: "" });
  const [uploadStatus, setUploadStatus] = useState("");

  // Redux state
  const reduxstate = useSelector(({ products, error }) => ({
    products,
    error,
  }));

  // Initializing Hooks
  const dispatch = useDispatch();

  // eslint-disable-line
  useEffect(() => {
    if (reduxstate.error.server)
      setError({ ...error, server: reduxstate.error.server });
  }, [reduxstate.error.server]);

  useEffect(() => setTimeout(() => setUploadStatus(""), 3000), [uploadStatus]);

  const options = [
    { value: "Electricals & Electronics", label: "Electricals & Electronics" },
    { value: "Home Appliances", label: "Home Appliances" },
    { value: "Furniture", label: "Furniture" },
    { value: "Sports", label: "Sports" },
  ];

  const updateProductData = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const clearError = () => setError({ server: "", client: "" });

  const updateCategory = (value) =>
    setProductData({ ...productData, category: map(value, (e) => e.value) });

  const submitproductData = async () => {
    try {
      const isEmpty = Object.keys(productData).filter(
        (obj) => productData[obj] === ""
      );
      if (isEmpty.length !== 0) {
        return setError({ server: "", client: isEmpty });
      }
      const uploadNewProduct = await dispatch(uploadProductData(productData));
      if (uploadNewProduct.payload.message) {
        setProductData({
          name: "",
          description: "",
          category: [],
          seller: "",
          price: "",
          img1: "",
          img2: "",
        });
        setUploadStatus(uploadNewProduct.payload.message);
      }
    } catch (err) {
      setError({ ...err, server: err });
    }
  };
  console.log(reduxstate);
  return (
    <>
      <Alert
        isOpen={uploadStatus !== ""}
        className="text-center font-weight-500 h3"
      >
        {uploadStatus}
      </Alert>
      <Alert
        isOpen={error.server !== ""}
        className="text-center font-weight-500 h3"
        color="danger"
      >
        {`${error.server}`}
      </Alert>
      <Container className="pb-8 pt-5">
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

                  <InputField
                    placeHolderValue="Gaming Laptop..."
                    inputType="text"
                    name="name"
                    value={productData.name}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("name")}
                    errorText="Please enter the product name."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product description
                  </Label>

                  <InputField
                    placeHolderValue="10th Generation Intel Processor..."
                    inputType="textarea"
                    name="description"
                    value={productData.description}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("description")}
                    errorText="Please enter the product description."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product image 1
                  </Label>

                  <InputField
                    placeHolderValue="https://i.ibb.co/...."
                    inputType="text"
                    name="img1"
                    value={productData.img1}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("img1")}
                    errorText="Please enter the product image 1."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product image 2
                  </Label>
                  <InputField
                    placeHolderValue="https://i.ibb.co/...."
                    inputType="text"
                    name="img2"
                    value={productData.img2}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("img2")}
                    errorText="Please enter the product image 2."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product price
                  </Label>

                  <InputField
                    placeHolderValue="3000"
                    inputType="text"
                    name="price"
                    value={productData.price}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("price")}
                    errorText="Please enter the product price."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Seller name
                  </Label>

                  <InputField
                    placeHolderValue="Pavan Kumar"
                    inputType="text"
                    name="seller"
                    value={productData.seller}
                    onChangeTrigger={updateProductData}
                    onFocusTrigger={clearError}
                    error={error.client.includes("seller")}
                    errorText="Please enter the product seller name."
                  />
                </div>
                <div className="mt-3">
                  <Label className="text-default font-weight-600">
                    Product category
                  </Label>
                  <Select
                    options={options}
                    isMulti
                    name="category"
                    onChange={(value) => updateCategory(value)}
                  />
                </div>
                <Button
                  className="mt-4"
                  color="primary"
                  block
                  onClick={submitproductData}
                >
                  {reduxstate.products.loading ? (
                    <Spinner size="sm" />
                  ) : (
                    "Submit"
                  )}
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
