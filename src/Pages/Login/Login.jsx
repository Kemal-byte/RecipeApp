import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Loging = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [users, setUsers] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const url = "https://636a266dc07d8f936d947e88.mockapi.io/api/users";

  useEffect(() => {
    async function getUser() {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    }
    getUser();
  }, [loggedIn]);
  console.log(users);

  // It handle login
  function handleLogin(e) {
    e.preventDefault();
    console.log("Inside the login page, loggedIn is :" + loggedIn);
    users?.map((user) => {
      if (user.email === email && user.password === password) {
        console.log("Yes");
        navigate("/");
      } else {
        console.log("Incorrect email or password");
      }
    });
  }
  // it register the user to API
  function handleRegister(e) {
    e.preventDefault();
    console.log("Inside the REGISTER page, loggedIn is :" + loggedIn);
    const newUser = { email, password };
    addNewUser(newUser);
  }

  async function addNewUser(user) {
    try {
      await axios.post(url, user);
    } catch (error) {
      console.log(error);
    }
    setLoggedIn(true);
  }
  return (
    <div className="container-login">
      <h3 className="title">{loggedIn ? "Welcome" : "Register"}</h3>
      <Form onSubmit={loggedIn ? handleLogin : handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary w-100" type="submit">
          Submit
        </Button>
      </Form>

      {loggedIn && (
        <h6 onClick={() => setLoggedIn(false)}>Don't have an account?</h6>
      )}
    </div>
  );
};

export default Loging;
