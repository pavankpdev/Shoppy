const axios = require("axios");

// test case to check whether customer API returns data successfully
test("Async test", async () => {
  await expect(axios.get("https://localhost:4000/")).not.toBeNull();
});
