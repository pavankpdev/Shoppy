// Libraries
import React from "react";

// Custom styles
import "./FeaturedProducts.scss";

// Components
import FeaturedCard from "./FeaturedCard.component";

const FeaturedProducts = () => {
  return (
    <>
      <div className="featured_product__container mb-4">
        <h1 className="display-2 text-center font-weight-400 title ">
          <u>Featured Products</u>
        </h1>
      </div>
      <div className=" d-md-flex justify-content-between featured_product__cards_parent">
        <div className="bottom_card">
          <FeaturedCard
            img="https://images.unsplash.com/photo-1570841398972-8aaa69ec72f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            title="Ant Esports"
            price={4800}
            rating={3}
            link="/products/Electricals%20&%20Electronics/213"
          />
        </div>
        <div className="top_card">
          <FeaturedCard
            img="https://images.unsplash.com/photo-1597075941308-6215ddcf6c39?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            title="KLIKFIT Professional Weight Plate "
            price={6000}
            rating={4}
            link="/products/Sports/214"
          />
        </div>
        <div className="bottom_card">
          <FeaturedCard
            img="https://images.unsplash.com/photo-1573500020435-82d72d6459b6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            title="Dream Furniture Purple Chair"
            price={3000}
            rating={3}
            link="/products/Furniture/215"
          />
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
