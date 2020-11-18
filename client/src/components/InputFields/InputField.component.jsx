import React from "react";
import classnames from "classnames";
import {
  FormGroup,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from "reactstrap";

export default function InputField(props) {
  return (
    <div>
      <FormGroup
        className={classnames({
          "has-danger": props.error,
        })}
      >
        <InputGroup
          className={classnames("mb-3", {
            "input-group-alternative": !props.alt,
          })}
        >
          {props.icon ? (
            <>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className={`fas fa-${props.icon}`} />
                </InputGroupText>
              </InputGroupAddon>
            </>
          ) : (
            <></>
          )}

          <Input
            className={classnames({
              "is-invalid": props.error,
              "form-control-alternative": !props.alt,
            })}
            placeholder={props.placeHolderValue}
            type={props.inputType}
            name={props.name}
            onChange={props.onChangeTrigger}
            required
            onFocus={props.onFocusTrigger}
            value={props.value}
            readOnly={props.readOnly}
          />
        </InputGroup>
      </FormGroup>
      <div
        className={classnames({
          "text-danger font-italic mt--3 mb-3": props.error,
          "text-hide": !props.error,
        })}
      >
        <small>{props.errorText}</small>
      </div>
    </div>
  );
}
