import React from "react";
import { Spinner } from "reactstrap";

const CustomSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <Spinner color="primary" />
    </div>
  );
};

export default CustomSpinner;
