import React, { useState } from "react";
import classnames from "classnames";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
import ElectricalsElectronics from "./ElectricalsElectronics.component";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("1");

  const settings = {
    autoplay: true,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "50px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "35px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "160px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "5px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

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
              <Slider {...settings}>
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="mt-4">
              <Slider {...settings}>
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="mt-4">
              <Slider {...settings}>
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
              </Slider>
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="mt-4">
              <Slider {...settings}>
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
                <ElectricalsElectronics />
              </Slider>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default FeaturedProducts;
