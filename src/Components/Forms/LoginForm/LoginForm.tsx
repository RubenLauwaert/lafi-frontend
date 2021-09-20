import React from "react";
import styles from "../AuthForm.module.css";
import googleIcon from "../../../Assets/LoginPage/google_icon.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container } from "react-bootstrap";

export const LoginForm = () => {
    return (
        <div className={styles.oauthWrapper}>
            <Container className="mb-3">
                <Card className="mb-3">
                    <Card.Title>Log In</Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button type="submit">Continue</Button>
                    </Form>
                </Card>
            </Container>
        </div>
    );
};
