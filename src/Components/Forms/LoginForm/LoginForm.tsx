import React, { useState } from "react";
import styles from "../AuthForm.module.css";
import "../authform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { login } from "../../../app/userStore";
import { RootState } from "../../../app/store";

export const LoginForm = () => {
    const user = useAppSelector((state) => state.userReducer);
    const dispatch = useAppDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: any) => {
        await dispatch(login({ email, password }));
    };

    return (
        <div className={styles.oauthWrapper}>
            <Container className="my-5 mx-5 w-50">
                <Card className="py-3 px-4">
                    <Card.Title className="my-3 text-center fs-2 fw-light">
                        Log in
                    </Card.Title>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className="fw-light fs-5">
                                Email
                            </Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                isInvalid={true}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {"Invalid Email"}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group controlId="formPassword">
                            <Form.Label className="fw-light fs-5">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                    <Button
                        type="submit"
                        className="custom-login-button"
                        onClick={(e) => {
                            handleLogin(e);
                        }}
                    >
                        Continue
                    </Button>
                </Card>
            </Container>
        </div>
    );
};
