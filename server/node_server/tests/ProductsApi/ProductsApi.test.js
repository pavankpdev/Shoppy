const axios = require("axios");
const {
  ProductApiError,
  ProductApiSuccess,
  CategoryApiError,
  CategoryApiSuccess,
} = require("../__Mocks__/Product.mock");

jest.mock("axios");

// Test suite 5 - contains 4 test cases
describe("Testing Product Api", () => {
  test("fetches successfull data from Product API", async () => {
    const data = {
      data: [
        {
          Product_ID: 38,
          Product_name: "Fantastic Steel Pants",
          Product_description:
            "The Apollotech B is an affordable wireless mouse with reliable connectivity  months battery life and modern design",
          Product_image1: "http://placeimg.com/640/480",
          Product_image2: "http://placeimg.com/640/480/nature",
          Product_Price: 37404,
          Seller: "Marcus Swift PhD",
          Category: "Electricals & Electronics",
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(ProductApiSuccess()).resolves.toEqual(data);
  });

  test("fetches error data from Product API", async () => {
    const errorMessage = "Product with the id 387878, was not found";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(ProductApiError()).rejects.toThrow(errorMessage);
  });

  test("fetches successfull data from Product API", async () => {
    const data = {
      data: [
        {
          Product_ID: 4,
          Product_name: "Fantastic Frozen Fish",
          Product_description:
            "The beautiful range of Apple Natural that has an exciting mix of natural ingredients With the Goodness of  Natural Ingredients",
          Product_image1: "http://placeimg.com/640/480",
          Product_image2: "http://placeimg.com/640/480/transport",
          Product_Price: 13843,
          Seller: "Mr Sammy Stehr",
          Category: "Sports",
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(CategoryApiSuccess()).resolves.toEqual(data);
  });

  test("fetches error data from Product API", async () => {
    const errorMessage = "Product with the id 387878, was not found";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(CategoryApiError()).rejects.toThrow(errorMessage);
  });
});
