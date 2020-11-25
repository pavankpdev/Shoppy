// Libraries
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  UncontrolledCarousel,
  Row,
  Col,
  Button,
  Modal,
  Input,
  Label,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";

// Components
import RatingStars from "../components/RatingStars/RatingStars.component";
import Footer from "../components/Footer/Footer.components";
import { toNumber, update } from "lodash";

// Redux Actions
import { addToCart, removeFromCart } from "../redux/reducer/Cart/Cart.action";

const SelectedProduct = () => {
  // Component State
  const [carousalImages, setCarousalImage] = useState([
    {
      src:
        "https://images-na.ssl-images-amazon.com/images/I/51IOmsWQVAL._SL1050_.jpg",
      key: "1",
    },
    {
      src:
        "https://images-na.ssl-images-amazon.com/images/I/71O23Hqq3jL._SL1500_.jpg",
      key: "2",
    },
  ]);
  const [selectedProductData, setSelectedProductData] = useState({});
  const [toggleReview, setToggleReview] = useState(false);
  const [rating, setRating] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // Redux State
  const reduxState = useSelector(({ products, cart }) => ({ products, cart }));

  // Initializing Hooks
  const { product_id, category } = useParams();
  const dispatch = useDispatch();

  // Updating selected product
  useEffect(() => {
    const selectedProduct = reduxState.products.home.filter(
      ({ Product_ID }) => Product_ID === toNumber(product_id)
    );

    const isInCart = reduxState.cart.cart.filter(
      ({ Product_ID }) => Product_ID === toNumber(product_id)
    );

    if (isInCart.length !== 0) {
      setAddedToCart(true);
    }

    setSelectedProductData(selectedProduct[0]);
    setCarousalImage([
      {
        key: "1",
        src: selectedProduct[0].Product_image1,
      },
      {
        key: "2",
        src: selectedProduct[0].Product_image2,
      },
    ]);
  }, []);

  //  Function add the selected product to cart
  const addProductToCart = () => {
    const updateCart = dispatch(addToCart(selectedProductData));
    if (updateCart.payload) {
      setAddedToCart(true);
    }
  };
  //  Function remove the selected product from the cart
  const removeProductToCart = () => {
    const updateCart = dispatch(removeFromCart(selectedProductData));
    if (updateCart.payload) {
      setAddedToCart(false);
    }
  };

  return (
    <>
      <Container className="pb-8 pt-5 ">
        <Modal
          isOpen={toggleReview}
          toggle={() => setToggleReview(!toggleReview)}
        >
          <ModalHeader className="d-flex justify-content-end">
            <button
              aria-label="Close"
              className="close float-right"
              data-dismiss="modal"
              type="button"
              onClick={() => setToggleReview(!toggleReview)}
            >
              <span aria-hidden={true}>
                <i className="fas fa-times" />
              </span>
            </button>
          </ModalHeader>
          <ModalBody className="bg-secondary">
            <Col>
              <Label className="mt-3 font-weight-700">Subject</Label>
              <Input
                className="form-control-alternative"
                placeholder="Type your review subject"
                type="text"
              />
              <Label className="mt-3 font-weight-700">Review</Label>
              <Input
                className="form-control-alternative"
                placeholder="Type your review"
                rows="3"
                type="textarea"
              />
              <Label className="mt-3 font-weight-700 mr-2">Rating</Label>
              <span>
                <i
                  className={
                    rating > 0
                      ? "fas fa-star text-primary"
                      : "fas fa-star text-gray"
                  }
                />
                <i
                  className={
                    rating > 1
                      ? "fas fa-star text-primary"
                      : "fas fa-star text-gray"
                  }
                />
                <i
                  className={
                    rating > 2
                      ? "fas fa-star text-primary"
                      : "fas fa-star text-gray"
                  }
                />
                <i
                  className={
                    rating > 3
                      ? "fas fa-star text-primary"
                      : "fas fa-star text-gray"
                  }
                />
                <i
                  className={
                    rating > 4
                      ? "fas fa-star text-primary"
                      : "fas fa-star text-gray"
                  }
                />
              </span>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Submit review</Button>
          </ModalFooter>
        </Modal>
        <Row>
          <Col lg="6">
            <UncontrolledCarousel items={carousalImages} />
          </Col>
          <Col lg="6">
            <h2 className="mt-3 mt-lg-0">{selectedProductData.Product_name}</h2>
            <div className="mt-2">
              <RatingStars rating={5} lg />
            </div>
            <h1 className="display-3 mt-1 font-weight-900">
              ₹ {selectedProductData.Product_Price}
            </h1>
            {addedToCart ? (
              <Button color="primary" outline onClick={removeProductToCart}>
                <i className="fas fa-times" /> Remove from Cart
              </Button>
            ) : (
              <Button color="primary" onClick={addProductToCart}>
                <i className="fas fa-shopping-cart" /> Add To Cart
              </Button>
            )}
            <h2 className="mt-4 font-weight-700">Delivery:</h2>
            <h4 className="mt--1">
              Free delivery available, expect within 2 weks
            </h4>
            <h2 className="mt-4 font-weight-700">Payment:</h2>
            <h4 className="mt--1">
              Credit card, Debit card, UPI, & COD accepted
            </h4>
          </Col>
        </Row>
        <h1 className="mt-6 display-3 text-primary border-bottom border-primary">
          Product description
        </h1>
        <p>{selectedProductData.Product_description}</p>
        <div className="mt-6 border-bottom border-primary d-flex justify-content-between align-items-center">
          <h1 className="text-primary">Product reviews</h1>
          <Button
            outline
            color="primary"
            onClick={() => setToggleReview(!toggleReview)}
          >
            Write a product review
          </Button>
        </div>
        <div
          style={{
            maxHeight: "300px",
            marginBottom: "10px",
            overflowY: "auto",
          }}
        >
          <div className="mt-4 d-flex justify-content-center">
            <Col lg="8">
              <div className="d-flex justify-content-start align-items-center">
                <i className="fas fa-user-circle fa-3x" />
                <h3 className="mt-2 ml-2">
                  Pavan Kumar{" "}
                  <span className="h5 font-weight-300">
                    ( Reviewed on 2 October 2020 )
                  </span>
                </h3>
              </div>
              <RatingStars rating={5} />
              <h4 className="mt-1">Waste of money</h4>
              <p>
                Very bad product.customer care service is very .They deliver me
                defective laptop and not returning or replacing it within its
                period .Amazon say talk to Dell and Dell say your product is not
                register so you talk to amazon .In these day amazon service is
                very bad. I suggest you all to chose another online platforms to
                buy any thing
              </p>
            </Col>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <Col lg="8">
              <div className="d-flex justify-content-start align-items-center">
                <i className="fas fa-user-circle fa-3x" />
                <h3 className="mt-2 ml-2">
                  Pavan Kumar{" "}
                  <span className="h5 font-weight-300">
                    ( Reviewed on 2 October 2020 )
                  </span>
                </h3>
              </div>
              <RatingStars rating={5} />
              <h4 className="mt-1">Waste of money</h4>
              <p>
                Very bad product.customer care service is very .They deliver me
                defective laptop and not returning or replacing it within its
                period .Amazon say talk to Dell and Dell say your product is not
                register so you talk to amazon .In these day amazon service is
                very bad. I suggest you all to chose another online platforms to
                buy any thing
              </p>
            </Col>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <Col lg="8">
              <div className="d-flex justify-content-start align-items-center">
                <i className="fas fa-user-circle fa-3x" />
                <h3 className="mt-2 ml-2">
                  Pavan Kumar{" "}
                  <span className="h5 font-weight-300">
                    ( Reviewed on 2 October 2020 )
                  </span>
                </h3>
              </div>
              <RatingStars rating={5} />
              <h4 className="mt-1">Waste of money</h4>
              <p>
                Very bad product.customer care service is very .They deliver me
                defective laptop and not returning or replacing it within its
                period .Amazon say talk to Dell and Dell say your product is not
                register so you talk to amazon .In these day amazon service is
                very bad. I suggest you all to chose another online platforms to
                buy any thing
              </p>
            </Col>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SelectedProduct;
