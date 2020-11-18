import React from "react";
import { Col } from "reactstrap";
const RadioField = (props) => {
  return (
    <>
      <Col>
        <div className="custom-control  custom-radio mb-3">
          <input
            className="custom-control-input"
            id={props.id}
            name="custom-radio-2"
            type="radio"
            defaultChecked={props.active === true}
            onClick={props.click}
          />
          <label className="custom-control-label" htmlFor={props.id}>
            {props.radioName}
          </label>
        </div>
      </Col>
    </>
  );
};

export default RadioField;
