"use strict";

module.exports.sendMail = async (event) => {
  const nodemailer = require("nodemailer");

  const {
    email,
    totaItems,
    totalPrice,
    fullname,
  } = event.queryStringParameters;

  // create the transport
  const transport = nodemailer.createTransport({
    host: "smtppro.zoho.in",
    secure: true,
    port: 465,
    auth: {
      user: "app@shoppyapp.live",
      pass: "ehdFe8Kn5Wq6",
    },
  });

  // send mail with our transport object
  let info = await transport.sendMail({
    from: "app@shoppyapp.live",
    to: email,
    subject: "Order confirmation mail",
    html: `

    <link rel="preconnect" href="https://fonts.gstatic.com">
		<link href="https://fonts.googleapis.com/css2?family=Asap:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
		<div style="border-top:8px solid #dc3545;border-radius:4px"> 
		<center>
			<img src="https://assets-ouch.icons8.com/free-download/154/39645b3a-063a-4f2b-af8c-93b0f61682ae.png?filename=cyborg-order-complete.png" alt="order-confirmed image" style="max-width: 300px;" >
      <h1 style="font-family:Asap;color:#1d3557">Hey ${fullname} order has been successfully placed</h1>
      <div>
        <h3 style="font-family:Asap;color:#1d3557">Total Items: ${totaItems}</h3>
        <h3 style="font-family:Asap;color:#1d3557">Total Price: ₹ ${totalPrice} </h3>
      </div>
			<a href="http://shoppyapp.live/orders"><button style="color:#fff; border: none; background: #dc3545;border-radius: 4px; padding: 10px 30px; font-weight: 600; font-size: 18px;cursor: pointer;">Check your order</button></a>
		<center>
	  </div>


    `,
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Mail Delivered",
        version: "v1.0",
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
