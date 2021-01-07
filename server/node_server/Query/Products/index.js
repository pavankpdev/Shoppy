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
  await Query(`SELECT P.*, 
  (SELECT Floor(Avg(R.rating)) 
   FROM   reviews R 
   WHERE  R.product_id = P.product_id AND R.Audit_status !="Rejected") AS Rating 
FROM   product P 
WHERE  product_id =${product_id};`);

const getProductsWithCategory = async (category) =>
  await Query(`SELECT P.*, 
  (SELECT Floor(Avg(R.rating)) 
   FROM   reviews R 
   WHERE  R.product_id = P.product_id AND R.Audit_status !="Rejected") AS Rating 
FROM   product P 
WHERE  category ="${category}"`);

module.exports = {
  insertNewProduct,
  getSpecifiedProductData,
  getProductsWithCategory,
};
