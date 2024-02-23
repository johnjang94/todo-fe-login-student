<<<<<<< HEAD
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import api from "../utils/api";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    try {
      if (password !== secondPassword) {
        throw new Error(
          "the password does not match. please check your password again"
        );
      }
      const response = await api.post("/user", { name, email, password });
      console.log("here is the response", response);
    } catch (error) {
      setError(error.message);
    }
    event.preventDefault();
  };
  return (
    <div className="display-center">
      {error && <div className="control-red">{error}</div>}
      <Form className="login-box" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="string"
            placeholder="Name"
            onChange={(event) => setName(event.target.value)}
          />
=======
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  return (
    <div className="display-center">
      <Form className="login-box">
        <h1>회원가입</h1>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="string" placeholder="Name" />
>>>>>>> 4b7f0bc (reconnecting the old repository)
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
<<<<<<< HEAD
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(event) => setEmail(event.target.value)}
          />
=======
          <Form.Control type="email" placeholder="Enter email" />
>>>>>>> 4b7f0bc (reconnecting the old repository)
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
<<<<<<< HEAD
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
=======
          <Form.Control type="password" placeholder="Password" />
>>>>>>> 4b7f0bc (reconnecting the old repository)
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>re-enter the password</Form.Label>
<<<<<<< HEAD
          <Form.Control
            type="password"
            placeholder="re-enter the password"
            onChange={(event) => setSecondPassword(event.target.value)}
          />
=======
          <Form.Control type="password" placeholder="re-enter the password" />
>>>>>>> 4b7f0bc (reconnecting the old repository)
        </Form.Group>

        <Button className="button-primary" type="submit">
          회원가입
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
