import React from "react";
import { Link } from "react-router-dom";

// Styles import
import "./CategoryCard.scss";

const CategoryCard = () => {
  return (
    <>
      <div className=" mx-4 category-container">
        <h1 className="display-2 text-center font-weight-400 mb--6 title">
          <u>Categories</u>
        </h1>
        <div className=" d-md-flex justify-content-between ">
          <div className="category-parent category-parent_1 px-2 ">
            <Link to="/products/Electricals%20&%20Electronics">
              <img
                className="category-image img-fluid"
                src="https://images.unsplash.com/photo-1526657782461-9fe13402a841?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="laptop"
              />
              <div className="mt-3 border-bottom border-default">
                <h2 className="font-weight-400 text-default">
                  Electricals & Electronics <i className="fas fa-arrow-right" />
                </h2>
              </div>
            </Link>
          </div>

          <div className="category-parent category-parent_2 px-2">
            <Link to="/products/Home%20Appliances">
              <img
                className="category-image img-fluid"
                src="https://images.unsplash.com/photo-1514237487632-b60bc844a47d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="laptop"
              />
              <div className="mt-3 border-bottom border-default">
                <h2 className="font-weight-400 text-default">
                  Home Appliances <i className="fas fa-arrow-right" />
                </h2>
              </div>
            </Link>
          </div>

          <div className="category-parent category-parent_3 px-2">
            <Link to="/products/Furniture">
              <img
                className="category-image img-fluid"
                src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="laptop"
              />
              <div className="mt-3 border-bottom border-default">
                <h2 className="font-weight-400 text-default">
                  Furniture <i className="fas fa-arrow-right" />
                </h2>
              </div>
            </Link>
          </div>

          <div className="category-parent category-parent_4 px-2">
            <Link to="/products/Sports">
              <img
                className="category-image img-fluid"
                src="https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                alt="laptop"
              />
              <div className="mt-3 border-bottom border-default">
                <h2 className="font-weight-400 text-default">
                  Sports <i className="fas fa-arrow-right" />
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
