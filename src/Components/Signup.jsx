import React, { useRef } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext"; 

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()

    function handleSubmit(e){
        e.preventDefault()

        signup(emailRef.current.value, passwordRef.current.value)
    }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Register Account</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <Button className="w-100 mt-4" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already Have an Account? Log In
      </div>
    </>
  );
}
