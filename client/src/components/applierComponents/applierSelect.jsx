import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import { FaTimes } from "react-icons/fa";

const Checkbox = (props) => {
  const [selectedValue, setSelectedValue] = useState([]);

  // the new state is updated with keeping a copy of the old state
  const handleNewValue = (value) => {
    setSelectedValue((prev) => [...prev, value]);
  };

  const handleSkillSelected = (event) => {
    const { options } = event.target;
    const selected = options[options.selectedIndex].value;

    if (!selectedValue.includes(selected)) {
      handleNewValue(selected);
    } else {
      let index = selectedValue.indexOf(selected);
      const updatedValues = [...selectedValue];
      updatedValues.splice(index, 1);
      setSelectedValue(updatedValues);
    }
  };

  const reomveSelected = (value) => {
    const index = selectedValue.indexOf(value);
    if (index > -1) {
      const updatedValues = [...selectedValue];
      updatedValues.splice(index, 1);
      setSelectedValue(updatedValues);
    }
  };

  const { name, label, options, required } = props;

  return (
    <div>
      <label className="labelStyling">{label}</label>
      <Container>
        <Row>
          {selectedValue.map((selected) => (
            <div className="selceted" key={selected.index}>
              {selected}
              <div
                className="reomveSelection"
                onClick={() => reomveSelected(selected)}
              >
                <FaTimes />
              </div>
            </div>
          ))}
        </Row>
      </Container>
      <select
        className="inputStyling mb-3"
        name={name}
        onChange={handleSkillSelected}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Checkbox;
