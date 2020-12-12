const axios = require("axios");
const {
  CustomerApiEmailError,
  CustomerApiSuccess,
  CustomerApiFullnameError,
} = require("../__Mocks__/Customer.mock");

jest.mock("axios");

describe("Testing Customer Api", () => {
  test("fetches successfully data from Customer API", async () => {
    const data = { data: { customerID: 8 } };
    axios.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(CustomerApiSuccess()).resolves.toEqual(data);
  });

  test("fetches email error data from Customer API", async () => {
    const errorMessage = "Email Is required";
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(CustomerApiEmailError()).rejects.toThrow(errorMessage);
  });

  test("fetches email error data from Customer API", async () => {
    const errorMessage = "Fullname Is required";
    axios.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(CustomerApiFullnameError()).rejects.toThrow(errorMessage);
  });
});
