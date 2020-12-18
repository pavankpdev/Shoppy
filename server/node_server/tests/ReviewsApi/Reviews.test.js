const axios = require("axios");
const {
  ReviewApiError,
  ReviewApiSuccess,
} = require("../__Mocks__/Review.mock");

jest.mock("axios");

// Test suite 6 - contains 2 test cases
describe("Testing Review Api", () => {
  test("fetches successfull data from Review API", async () => {
    const data = {
      data: [
        {
          subject: "Value for money",
          reviewdate: "2020-12-07T18:30:00.000Z",
          rating: 5,
          review:
            "It is a white frame and white plastic body at backside. I prefer black only. But the LED tv is slim in size, frameless are beauty and stand design is more attractive. It would be helpful if the seller spply a wall bracket and a HDMI cable instead of VGA cable which is outdated now days.",
          fullname: "pavankumarkpkp",
          profilepic:
            "https://lh3.googleusercontent.com/a-/AOh14GgK5GGnTOHuVRz_reqdcFSriU-ZtJUe-YX6O8efhg=s96-c",
        },
      ],
    };
    axios.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(ReviewApiSuccess()).resolves.toEqual(data);
  });

  test("fetches error data from Review API", async () => {
    const errorMessage = [];
    axios.get.mockImplementationOnce(() => Promise.reject(errorMessage));
    await expect(ReviewApiError()).rejects.toEqual(errorMessage);
  });
});
