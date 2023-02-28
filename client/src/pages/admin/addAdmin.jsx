import "../../assets/css/admin.css";
import AdminNav from "../../components/Nav/adminNav";
import React, { Fragment, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAppContext } from "../../context/appContext.js";
import axios from "axios";

const AddAdmin = () => {
  /*use state
    const [name,setName] = useState("")
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [type,setType] = useState('')
    const [phone,setPhone] = useState('')

    async function registerAdmin(event){
      event.preventDefault()
       const response = await fetch('http://localhost:4000/api/v1/registerAdmin' ,  {
       method:"POST", 
       headers: {
          "Content-Type" : "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          phone,
          type,
        }),
      })
      const data = await response.json();
        console.log("Account is registered", data);
    }
    
    //using appContext 

    const [values, setValues] = useState(initialState)
    const { displayAlert, setupUser } = useAppContext();
    const handleChange = (e) =>{
      setValues({ ...values, [e.target.name]: e.target.value });
    }

    const onSubmit = (e) => {
      e.preventDefault();
      const { name, email, password, type, phone } = values;
      if (!email || !password || !name || !phone || !type) {
        displayAlert();
        return; 
      }
      const currentUser = { name, email, type, phone, password };
        setupUser({
          currentUser,
          endPoint: 'registerAdmin',
          alertText: 'Admin Created! Redirecting...',
        });
    };
    */

  const [values, setValues] = useState({
    name: "",
    email: "",
    type: "",
    phone: "",
    password: "",
  });

  //to view the enabled value
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const registerAdmin = async (e) => {
    e.preventDefault();
    // add admin
    const res = await axios.post(
      "http://localhost:4000/api/v1/admins/registerAdmin",
      values
    );
    console.log(res);
  };
  return (
    <Fragment>
      <AdminNav />
      <Container className="bg-white rounded p-3">
        <Row>
          <Col>
            <form onSubmit={registerAdmin}>
              <p className="mb-1">Name:</p>
              <input
                className="inputStyling"
                type="text"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
              <p className="mb-1">Email:</p>
              <input
                className="inputStyling"
                type="email"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              <p className="mb-1">Phone Number:</p>
              <input
                className="inputStyling"
                type="number"
                name="phone"
                placeholder="Phone number"
                value={values.phone}
                onChange={handleChange}
              />
              <p className="mb-1">Password:</p>
              <input
                className="inputStyling"
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
              <p className="mb-1">Type of the admin:</p>
              <select
                className="inputStyling"
                name="type"
                placeholder="type"
                value={values.type}
                onChange={handleChange}
              >
                <option>Please select a type</option>
                <option value="sub-admin">sub-admin</option>
                <option value="main-admin">main-admin</option>
              </select>
              <button type="submit" className="btn login">
                submit
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default AddAdmin;
