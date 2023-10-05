import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signin_img from "./Signin_img";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const history = useNavigate();

  const [inpval, setInpval] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);

  console.log(inpval);
  const getdata = (e) => {
    // console.log(e.target.value);

    const { value, name } = e.target;
    console.log(value, name);

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    const getUserArr = localStorage.getItem("userData");
    console.log(getUserArr);

    const { email, password } = inpval;

    if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Invalid E-mail");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 8) {
      alert("Enter password length atlest 8");
    } else {
      if (getUserArr && getUserArr.length) {
        const userdata = JSON.parse(getUserArr);
        const userLogin = userdata.filter((el, k) => {
          return el.email === email && el.password === password;
        });
        if (userLogin.length === 0) {
          alert("User not found");
        } else {
          console.log("login succesfully");
          localStorage.setItem("user_login", JSON.stringify(getUserArr));
          history("./Details");
        }
      }
    }
  };

  return (
    <>
      <div className="container mt-3 ">
        <section className="d-flex justify-content-between">
          <div className="left_data" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">sign up</h3>
            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-6"
                controlId="formBasicPassword"
              >
                <Form.Control
                  type="password"
                  name="password"
                  onChange={getdata}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={addData}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="login mt-3">
              Aready Have an Account{" "}
              <span>
                <NavLink to="/">Sign In</NavLink>
              </span>
            </p>
          </div>
          <Signin_img />
        </section>
      </div>
    </>
  );
};
export default Login;
