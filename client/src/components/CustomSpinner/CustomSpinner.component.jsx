import React from "react";
import { Spinner } from "reactstrap";

const CustomSpinner = ({ text, isOpen }) => {
  return isOpen ? (
    <>
      <div className="d-flex justify-content-center">
        <Spinner color="primary" />
      </div>
      <h3 className="text-center text-primary">{text}</h3>
    </>
  ) : (
    <></>
  );
};

export default CustomSpinner;
