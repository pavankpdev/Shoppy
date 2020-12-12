const axios = require("axios");
const { HomeApiSuccess } = require("../__Mocks__/Home.mock");

jest.mock("axios");

describe("Testing Home Api", () => {
  test("fetches successfully data from Home API", async () => {
    const data = {
      data: [
        {
          Product_ID: 1,
          Product_name: "Intelligent Concrete Pizza",
          Product_description:
            "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes that started with the  ABCJ",
          Product_image1: "http://placeimg.com/640/480",
          Product_image2: "http://placeimg.com/640/480/sports",
          Product_Price: 16432,
          Seller: "Herman Satterfield",
          Category: "Home Appliances",
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(HomeApiSuccess()).resolves.toEqual(data);
  });
});
