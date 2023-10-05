import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signin_img from "./Signin_img";
import { NavLink } from "react-router-dom";
function Home() {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
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

    const { name, email, date, password } = inpval;

    if (name === "") {
      alert("Name field is required");
    } else if (email === "") {
      alert("email field is required");
    } else if (!email.includes("@")) {
      alert("Invalid E-mail");
    } else if (date === "") {
      alert("Date field is required");
    } else if (password === "") {
      alert("Password field is required");
    } else if (password.length < 8) {
      alert("Enter password length atlest 8");
    } else {
      console.log("data added susseccfully");

      localStorage.setItem("userData", JSON.stringify([...data, inpval]));
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
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group
                className="mb-3 col-lg-3
              "
                controlId="formBasicEmail"
              >
                <Form.Control type="date" name="date" onChange={getdata} />
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
                <NavLink to="/Login">LogIn</NavLink>
              </span>
            </p>
          </div>
          <Signin_img />
        </section>
      </div>
    </>
  );
}

export default Home;
