import React, { useState } from "react";
import styles from "../AuthForm.module.css";
import "../authform.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container } from "react-bootstrap";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { login } from "../../../app/userStore";
import { RootState } from "../../../app/store";
import * as yup from "yup";

export const LoginForm = () => {
    const dispatch = useAppDispatch();

    const [loginError, setLoginError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = async (e: any) => {
        loginSchema
            .validate({ email: email, password: password })
            .then((valid) => {
                setLoginError(null);
                dispatch(login({ email, password }));
            })
            .catch((error: yup.ValidationError) => {
                setLoginError(error.message);
            });
    };

    // Input Validation
    let loginSchema = yup.object().shape({
        email: yup
            .string()
            .email("Must be a valid email.")
            .required("Email is required."),
        password: yup
            .string()
            .min(8, "Password must consist of minimum 8 characters.")
            .required("Password is required."),
    });

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
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {"Invalid Email"}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-1" controlId="formPassword">
                            <Form.Label className="fw-light fs-5">
                                Password
                            </Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Text className="mb-5">{loginError}</Form.Text>
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
