import React, { useState } from 'react';
import "react-bootstrap";
import "../../assets/css/signUpSignIn.css";
import "../../assets/css/custom.css";
import Select from 'react-select';

const Checkbox = (props) => {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const {
    name,
    value,
    onChange,
    placeholder,
    required,
    label,
    id,
    row,
    option
  } = props;

  return (
    <div>
      <label className = {'labelStyling ${row}'}>{label}</label>
      <div className = "mb-3">
        <Select
          id={id}
          className={`inputStyling ${row}`}
          classNamePrefix="select"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          isDisabled={isDisabled}
          isLoading={isLoading}
          isClearable={isClearable}
          isRtl={isRtl}
          isSearchable={isSearchable}
          options={option}
          />
      </div>
    </div>
  );
};

export default Checkbox;
// const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
//   <label style={{ marginRight: '1em' }}>
//     <input type="checkbox" {...props} />
//     {children}
//   </label>
// );

// export default (props) => {
//   const [isClearable, setIsClearable] = useState(true);
//   const [isSearchable, setIsSearchable] = useState(true);
//   const [isDisabled, setIsDisabled] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isRtl, setIsRtl] = useState(false);

//   const {
//     className
//   } = props;
//   return (
//     <>
//       <Select
//         className="basic-single"
//         classNamePrefix="select"
//         defaultValue={skillsList[0]}
//         isDisabled={isDisabled}
//         isLoading={isLoading}
//         isClearable={isClearable}
//         isRtl={isRtl}
//         isSearchable={isSearchable}
//         name="skills"
//         options={skillsList}
//       />

//       <div>
//         <Checkbox
//           checked={isClearable}
//           onChange={() => setIsClearable((state) => !state)}
//         >
//           Clearable
//         </Checkbox>
//         <Checkbox
//           checked={isSearchable}
//           onChange={() => setIsSearchable((state) => !state)}
//         >
//           Searchable
//         </Checkbox>
//         <Checkbox
//           checked={isDisabled}
//           onChange={() => setIsDisabled((state) => !state)}
//         >
//           Disabled
//         </Checkbox>
//         <Checkbox
//           checked={isLoading}
//           onChange={() => setIsLoading((state) => !state)}
//         >
//           Loading
//         </Checkbox>
//         <Checkbox checked={isRtl} onChange={() => setIsRtl((state) => !state)}>
//           RTL
//         </Checkbox>
//       </div>
//     </>
//   );
// };
