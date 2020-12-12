const { Query } = require("../../database/index");

const getCustomerId = async (email) =>
  await Query(`SELECT Customer_ID 
               FROM   customer 
               WHERE  email = "${email}"; `);

const addNewCustomer = async (fullname, email) =>
  await Query(`INSERT INTO customer
               (
                    Fullname, Email
               )
                VALUES
               (
                    "${fullname}","${email}"
               );`);

module.exports = { getCustomerId, addNewCustomer };
