import React, { useState } from 'react';
import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import Select from 'react-select';

const styles = {
  control: styles => ({ ...styles, backgroundColor: 'eaeaeb'}),
  
}

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
        <label className="labelStyling font-bold">{label}</label>
        <Select
          className="inputStyling mb-3"
          name={name}
          value={selectedSkills}
          onChange={handleSkillsChange}
          placeholder={placeholder}
          options={options}
          isMulti
          styles={styles}
        />
      </div>
    );
  };

export default Checkbox;
