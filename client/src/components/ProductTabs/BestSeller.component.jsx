import React from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  CardImg,
} from "reactstrap";

const BestSeller = ({bestSellers}) => {
  return (
    <>
      <Row className="mt-4">
        <Col md="6">
          <img src={bestSellers.banner} alt="banner" />
        </Col>
        <Col md="6">
          <img src={bestSellers.banner2} alt="banner" />
          <Row className="mt-3 justify-content-between">
            {bestSellers.product.map(({ img, rating, name, price }) => (
              <Col md="4">
                <Card className="p-2 shadow-lg " style={{ width: "10rem" }}>
                  <CardImg top width="100%" src={img} alt="Card image cap" />
                  <span>
                    <i
                      className={classnames("fas fa-star fa-xs text-primary", {
                        "text-gray": rating - 1 < 0,
                      })}
                    />
                    <i
                      className={classnames("fas fa-star fa-xs text-primary", {
                        "text-gray": rating - 2 < 0,
                      })}
                    />
                    <i
                      className={classnames("fas fa-star fa-xs text-primary", {
                        "text-gray": rating - 3 < 0,
                      })}
                    />
                    <i
                      className={classnames("fas fa-star fa-xs text-primary", {
                        "text-gray": rating - 4 < 0,
                      })}
                    />
                    <i
                      className={classnames("fas fa-star fa-xs text-primary", {
                        "text-gray": rating - 5 < 0,
                      })}
                    />
                  </span>
                  <h4 className="mt-1 text-truncate">{name}</h4>
                  <h3 className="mt--1">₹{price}</h3>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default BestSeller;
