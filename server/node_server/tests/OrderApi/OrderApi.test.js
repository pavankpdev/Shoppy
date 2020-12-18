const axios = require("axios");
const {
  OrderApiSuccess,
  OrderApiError,
  OrderTrackingApiError,
  OrderTrackingApiSuccess,
} = require("../__Mocks__/Order.mock");

jest.mock("axios");

// Test suite 4 - contains 4 test cases
describe("Testing Order Api", () => {
  test("fetches successfull data from order API", async () => {
    const data = {
      data: [
        {
          image1: "http://placeimg.com/640/480",
          image2: "http://placeimg.com/640/480/city",
          productName: "Awesome Steel Gloves",
          productDescription:
            "The Apollotech B is an affordable wireless mouse with reliable connectivity  months battery life and modern design",
          price: 23073,
          shippingDate: "2020-12-07T18:30:00.000Z",
          shippingStatus: "Delivered",
          shippingAddress:
            "GT World Mall, Magadi Main Rd, next to Prasanna Theatre, Bengaluru, Karnataka 560023",
          quantity: 1,
          orderId: 12,
          shippingId: 41,
          productID: 13,
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(OrderApiSuccess()).resolves.toEqual(data);
  });

  test("fetches error data from order API", async () => {
    const errorMessage = "Invalid Customer ID";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(OrderApiError()).rejects.toThrow(errorMessage);
  });

  test("fetches successfull data from order tracking API", async () => {
    const data = {
      data: [
        {
          image1: "http://placeimg.com/640/480",
          image2: "http://placeimg.com/640/480/nature",
          productName: "Fantastic Steel Pants",
          productDescription:
            "The Apollotech B is an affordable wireless mouse with reliable connectivity  months battery life and modern design",
          price: 3800,
          shippingDate: "2020-12-03T18:30:00.000Z",
          shippingStatus: "Shipping",
          shippingAddress:
            "HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038",
          quantity: 38,
          orderId: 1,
          shippingId: 23,
          productID: 38,
        },
      ],
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(OrderTrackingApiSuccess()).resolves.toEqual(data);
  });

  test("fetches error data from order tracking API", async () => {
    const errorMessage = "Product tracking data not found";
    axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
    await expect(OrderTrackingApiError()).rejects.toThrow(errorMessage);
  });
});
