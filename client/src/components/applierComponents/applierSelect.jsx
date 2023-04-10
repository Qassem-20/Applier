import React, { useState } from 'react';
import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import Select from 'react-select';

const Checkbox = (props) => {
  const [selectedSkills, setSelectedSkills] = useState(null);

  const handleSkillsChange = (selectedSkills) => {
    setSelectedSkills(selectedSkills);
  };

    const {
      name,
      placeholder,
      label,
      options
    } = props;
  
    return (
      <div>
        <label className="inputStyling mb-3">{label}</label>
        <Select
          className="inputStyling mb-3"
          name={name}
          value={selectedSkills}
          onChange={handleSkillsChange}
          placeholder={placeholder}
          options={options}
          isMulti
        />
      </div>
    );
  };

export default Checkbox;
