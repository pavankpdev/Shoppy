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
import { toNumber } from "lodash";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import RatingStars from "../components/RatingStars/RatingStars.component";
import Footer from "../components/Footer/Footer.components";
import ReviewCard from "../components/ReviewCard/ReviewCard.component";

// Redux Actions
import { addToCart, removeFromCart } from "../redux/reducer/Cart/Cart.action";
import { getSpecificProductData } from "../redux/reducer/Products/Products.actions";
import { getReviews, postReview } from "../redux/reducer/Review/Review.action";
import { authCustomer } from "../redux/reducer/Customer/Customer.action";

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
  const [subject, setSubject] = useState("");
  const [review, setReview] = useState("");
  const [reviewData, setReviewData] = useState([]);

  // Redux State
  const reduxState = useSelector(({ products, cart, customer }) => ({
    products,
    cart,
    customer,
  }));

  // Initializing Hooks
  const { product_id } = useParams();
  const dispatch = useDispatch();
  const { isAuthenticated, loginWithPopup, user } = useAuth0();

  // Updating selected product
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });

    const selectedProduct =
      reduxState.products.home.length !== 0
        ? reduxState.products.home.allProducts.filter(
            ({ Product_ID }) => Product_ID === toNumber(product_id)
          )
        : [];

    if (selectedProduct.length !== 0) {
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
      return;
    }

    const getSelectedProductDataAction = async () => {
      const getSelectedProductData = await dispatch(
        getSpecificProductData(product_id)
      );

      const isInCart = reduxState.cart.cart.filter(
        ({ Product_ID }) => Product_ID === toNumber(product_id)
      );

      if (isInCart.length !== 0) {
        setAddedToCart(true);
      }

      setSelectedProductData(getSelectedProductData.payload);
      setCarousalImage([
        {
          key: "1",
          src: getSelectedProductData.payload.Product_image1,
        },
        {
          key: "2",
          src: getSelectedProductData.payload.Product_image2,
        },
      ]);
    };

    getSelectedProductDataAction();
  }, []);

  useEffect(() => {
    const getReviewsAction = async () => {
      const getReviewsData = await dispatch(getReviews(product_id));
      console.log(getReviewsData);
      setReviewData(getReviewsData.payload);
    };
    getReviewsAction();
  }, []);

  useEffect(() => {
    const authAction = async () => {
      if (user) {
        const id = await dispatch(
          authCustomer(user.email, user.nickname, user.picture)
        );
      }
    };
    authAction();
  }, [user]);

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

  // Function to check for auth and toggle review modal
  const addnewReviewToggle = () => {
    if (isAuthenticated) {
      setToggleReview(!toggleReview);
    }
    loginWithPopup();
  };

  // Function to post review
  const addnewReview = async () => {
    if (reduxState.customer.customerID) {
      const postReviewAction = await dispatch(
        postReview(
          product_id,
          reduxState.customer.customerID,
          rating,
          review,
          subject
        )
      );
      setToggleReview(!toggleReview);
      setReviewData(postReviewAction.payload.getReviews);
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
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <Label className="mt-3 font-weight-700">Review</Label>
              <Input
                className="form-control-alternative"
                placeholder="Type your review"
                rows="3"
                type="textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
              />
              <Label className="mt-3 font-weight-700 mr-2">Rating</Label>
              <span>
                <i
                  className={
                    rating > 0
                      ? "fas fa-star text-primary pointer"
                      : "fas fa-star text-gray pointer"
                  }
                  onClick={() => setRating(1)}
                />
                <i
                  className={
                    rating > 1
                      ? "fas fa-star text-primary pointer"
                      : "fas fa-star text-gray pointer"
                  }
                  onClick={() => setRating(2)}
                />
                <i
                  className={
                    rating > 2
                      ? "fas fa-star text-primary pointer"
                      : "fas fa-star text-gray pointer"
                  }
                  onClick={() => setRating(3)}
                />
                <i
                  className={
                    rating > 3
                      ? "fas fa-star text-primary pointer"
                      : "fas fa-star text-gray pointer"
                  }
                  onClick={() => setRating(4)}
                />
                <i
                  className={
                    rating > 4
                      ? "fas fa-star text-primary pointer"
                      : "fas fa-star text-gray pointer"
                  }
                  onClick={() => setRating(5)}
                />
              </span>
            </Col>
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              disabled={!subject && !review}
              onClick={addnewReview}
            >
              Submit review
            </Button>
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
          <Button outline color="primary" onClick={addnewReviewToggle}>
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
          {reviewData.length > 0 ? (
            reviewData.map((review) => <ReviewCard {...review} />)
          ) : (
            <>
              <h1 className="text-center text-default">
                There are no reviews for this product yet,
              </h1>
              <div className="d-flex justify-content-center">
                <Button
                  outline
                  color="primary"
                  className="text-center"
                  onClick={addnewReviewToggle}
                >
                  Be the first one to review
                </Button>
              </div>
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SelectedProduct;
