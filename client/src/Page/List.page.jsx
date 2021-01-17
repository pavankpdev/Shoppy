// Libraries
import React, { useState, useEffect } from "react";
import { Container, Col, Card, Row, Button } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";

// Redux Action
import {
  getAllList,
  deleteList,
} from "../redux/reducer/Products/Products.actions";
import { addToCart } from "../redux/reducer/Cart/Cart.action";

const List = (props) => {
  const [list, setList] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const reduxState = useSelector(({ customer, products }) => ({
    customer,
    products,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    const getAllSavedListAction = async () => {
      const savedList = await dispatch(
        getAllList(reduxState.customer.customerID)
      );
      setList(savedList.payload);
    };
    getAllSavedListAction();
  }, [reduxState.customer.customerID]);

  const deleteItem = async (Product_ID) => {
    const updatedList = await dispatch(
      deleteList({ Product_ID, Customer_ID: reduxState.customer.customerID })
    );

    setList(updatedList.payload);
  };

  //  Function add the selected product to cart
  const addProductToCart = async (selectedProductData) => {
    const updateCart = dispatch(addToCart(selectedProductData));
    if (updateCart.payload) {
      await deleteItem(updateCart.payload.product.Product_ID);
      setAddedToCart(true);
    }
  };

  return (
    <>
      <Container>
        <div className="mt-3 border-bottom border-primary d-flex justify-content-between">
          <h1 className="text-primary">Your Saved List</h1>
        </div>
        {list.length === 0 ? (
          <>
            <div className="d-flex justify-content-center">
              <img
                src="https://assets-ouch.icons8.com/free-download/178/0d17b1e0-b37f-4500-ae7b-177e9c86d6ec.png?filename=cherry-list-is-empty-1.png"
                alt="empty cart"
                className="mt-3 w-25 img-fluid"
              />
            </div>
            <h1 className="mt-3 display-3 text-primary text-center">
              Your saved list is empty.
            </h1>
          </>
        ) : (
          <>
            <Row>
              <Col>
                <Card className="my-3">
                  {list.map(
                    ({
                      Product_name,
                      Product_Price,
                      saved_date,
                      list_id,
                      Product_ID,
                      ...rest
                    }) => (
                      <div className="d-flex justify-content-between align-items-baseline px-3 py-2 border-bottom border-gray">
                        <h3 className="w-50 col-sm-8 text-truncate">
                          {Product_name}
                        </h3>
                        <h3 className="font-weight-700">
                          {moment(saved_date).format("DD MMM")}
                        </h3>
                        <h3 className="font-weight-700">₹ {Product_Price}</h3>
                        <Button
                          onClick={() =>
                            addProductToCart({
                              Product_name,
                              Product_Price,
                              saved_date,
                              list_id,
                              Product_ID,
                              ...rest,
                            })
                          }
                          outline
                          size="sm"
                        >
                          <i className="fas fa-shopping-cart" /> Move To Cart
                        </Button>
                        <i
                          className="far fa-trash-alt text-danger pointer"
                          onClick={() => deleteItem(Product_ID)}
                        />
                      </div>
                    )
                  )}
                </Card>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default List;
