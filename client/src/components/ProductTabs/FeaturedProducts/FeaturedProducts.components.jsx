// Libraries
import React, { useState } from "react";
import classnames from "classnames";
import { useSelector } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Configs
import { FeaturedProductsCarousal } from "../../../config/Carousal.config";

// Components
import FeaturedProductCard from "./FeaturedProductCard.component";

const FeaturedProducts = ({ list }) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <div className="mt-5 ">
        <h1 className="display-3 mb-4 text-primary">Featured Products</h1>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames("pointer", {
                active: activeTab === "1",
                "bg-primary text-white": activeTab === "1",
              })}
              href="#"
              onClick={() => {
                toggle("1");
              }}
            >
              Electricals & Electronics
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames("pointer", {
                active: activeTab === "2",
                "bg-primary text-white": activeTab === "2",
              })}
              href="#"
              onClick={() => {
                toggle("2");
              }}
            >
              Home Appliances
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames("pointer", {
                active: activeTab === "3",
                "bg-primary text-white": activeTab === "3",
              })}
              href="#"
              onClick={() => {
                toggle("3");
              }}
            >
              Furniture
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames("pointer", {
                active: activeTab === "4",
                "bg-primary text-white": activeTab === "4",
              })}
              href="#"
              onClick={() => {
                toggle("4");
              }}
            >
              Sports
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="mt-4">
              <Slider {...FeaturedProductsCarousal}>
                {list.map(
                  (product) =>
                    product.Category.includes("Electricals") && (
                      <FeaturedProductCard {...product} />
                    )
                )}
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="mt-4">
              <Slider {...FeaturedProductsCarousal}>
                {list.map(
                  (product) =>
                    product.Category.includes("Home") && (
                      <FeaturedProductCard {...product} />
                    )
                )}
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="mt-4">
              <Slider {...FeaturedProductsCarousal}>
                {list.map(
                  (product) =>
                    product.Category.includes("Furniture") && (
                      <FeaturedProductCard {...product} />
                    )
                )}
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="mt-4">
              <Slider {...FeaturedProductsCarousal}>
                {list.map(
                  (product) =>
                    product.Category.includes("Sports") && (
                      <FeaturedProductCard {...product} />
                    )
                )}
              </Slider>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default FeaturedProducts;
