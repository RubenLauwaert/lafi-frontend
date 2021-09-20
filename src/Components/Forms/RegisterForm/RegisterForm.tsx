import React from "react";
import styles from "../AuthForm.module.css";
import '../authform.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container } from "react-bootstrap";

export const RegisterForm = () => {
    return (
        <div className={styles.oauthWrapper}>
            <Container className="my-5 mx-5 w-50">
                <Card className="py-3 px-4">
                    <Card.Title className="my-3 text-center fs-2 fw-light">Register</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formUsername">
                            <Form.Label className="fw-light fs-5">Name</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="fw-light fs-5">Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label className="fw-light fs-5">Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                    </Form>
                    <Button type="submit" className="custom-login-button">Sign up</Button>
                </Card>
            </Container>
        </div>
    )
}
