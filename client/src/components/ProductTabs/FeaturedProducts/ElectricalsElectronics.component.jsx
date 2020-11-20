import React from "react";
import { Card, CardImg } from "reactstrap";

const ElectricalsElectronics = () => {
  return (
    <>
      <div className="pl-md-2">
        <Card className="p-2" style={{ width: "15rem" }}>
          <CardImg
            top
            src="https://i.ibb.co/FJxfg5N/DHL-Free-10-inch-Tablet-PC-Android-7-0-4-GB-RAM-64-GB-ROM-Octa-Core-8-jpg-220x220.png"
            alt="Card image cap"
          />
          <h3 className="mt--1 text-truncate font-weight-400">
            Samsung Galaxy Tab A 10.1 (10.1 inch, RAM 2GB, ROM 32GB,
            Wi-Fi-Only), Black
          </h3>
          <h3 className="mt--1 font-weight-700">₹ 10000</h3>
        </Card>
      </div>
    </>
  );
};

export default ElectricalsElectronics;
