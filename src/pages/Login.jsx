import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';
import '../styles/App.css'

export const Login = () => {
  return (
    <div className="login-page" style={{
      background: 'linear-gradient(to right, #141E30, #243B55)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container className="mt-5 bg-light p-5 rounded shadow" style={{ maxWidth: '800px', width: '100%' }}>
        <h1 className="text-center text-primary mb-4 hover-up" style={{
          fontWeight: 'bold',
          fontSize: '3rem',
          cursor: 'pointer',
          //transition: 'transform 0.3s ease-in-out'
      }}>
 ft-samuel-fixinghomepage
          Welcome to TASKPULSE
          WELCOME TO TAKPULSE
 main
        </h1>
        <h2 className="text-center text-black mb-5">
          <i className="bi bi-box-arrow-in-right"></i> Login
        </h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="primary" type="submit">
            <i className="bi bi-box-arrow-in-right"></i> Login
          </Button>
        </Form>

 ft-samuel-fixinghomepage
        <p className="mt-3 text-center">
          Do you have an account ? <Link to="/register" className="text-primary">Signup here</Link>

        <p className="mt-3 text-center ">
          Don't have an account? <Link to="/register" className="text-primary">Sign up here</Link 
          main
        </p>
      </Container>
    </div>
  );
};

