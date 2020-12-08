// Libraries
import React, { useState } from "react";
import classnames from "classnames";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  CardText,
  Row,
  Col,
  CardImg,
  CardBody,
  CardFooter,
} from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import BestSeller from "./BestSeller.component";
import Trending from "./TrendingProducts.components";
import NewArrivals from "./NewArrivals.component";

const ProductTabs = ({ newArrivals }) => {
  const [activeTab, setActiveTab] = useState("1");
  const [bestSellers, setBestSellers] = useState({
    banner: "https://i.ibb.co/52vQY7V/banner.png",
    banner2: "https://i.ibb.co/0XH0KtZ/banner1.png",
  });
  const [trending, setTrending] = useState([
    {
      img:
        "https://i.ibb.co/z6c8n8q/D18553048-Jupiter-Phase-4esktop-Gateway-Category-Card-758-X608-2x-SY304-CB416489355.jpg",
      title: "Up to 40% off | Festive deals on top mobiles and accessories",
    },
    {
      img:
        "https://i.ibb.co/02RrfvT/Desktop-Gateway-Category-Card-758-X608-GPS-Wave-40-5x-SY304-CB418244413.jpg",
      title: "Up to 40% off | Festive deals on top home appliances",
    },
    {
      img:
        "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Jupiter2020/Phase_4_CC_QC/D18553048_Jupiter-_Phase_4esktopGateway_CategoryCard_758X608_2x._SY304_CB416489355_.jpg",
      title: "Up to 40% off | Festive deals on top mobiles and accessories",
    },
  ]);

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
          centerPadding: "100px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "130px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "10px",
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
        <h1 className="display-3 mb-4 text-primary">Selected Products</h1>
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
              Best Sellers
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
              Trending Products
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
              New Arrivals
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <BestSeller
              bestSellers={newArrivals.slice(0, 3)}
              {...bestSellers}
            />
          </TabPane>
          <TabPane tabId="2">
            <Row className="justify-content-between mt-4 bg-gradient-info p-3 rounded">
              {trending.map(({ img, title }) => (
                <>
                  <Trending img={img} title={title} />
                </>
              ))}
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <div className="mt-4">
              <Slider {...settings}>
                {newArrivals.map((product) => (
                  <NewArrivals {...product} />
                ))}
              </Slider>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </>
  );
};

export default ProductTabs;
