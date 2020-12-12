const { Query } = require("../../database/index");

const insertNewProduct = async ({
  name,
  description,
  price,
  seller,
  category,
  img1,
  img2,
}) =>
  await Query(
    `INSERT INTO product (Product_name, Product_description, Product_image1, Product_image2, Product_Price, Seller, Category ) 
      VALUES  ("${name.replace(/[^a-zA-Z ]/g, "")}", "${description.replace(
      /[^a-zA-Z ]/g,
      ""
    )}","${img1}","${img2}",${price.replace(/[^0-9 ]/g, "")},"${seller.replace(
      /[^a-zA-Z ]/g,
      ""
    )}","${category}");`
  );

const getSpecifiedProductData = async (product_id) =>
  await Query(`select * from product WHERE Product_ID=${product_id};`);

const getProductsWithCategory = async (category) =>
  await Query(`select * from product where Category="${category}"`);

module.exports = {
  insertNewProduct,
  getSpecifiedProductData,
  getProductsWithCategory,
};
