import React, { useState } from "react";
import {
  Container,
  Row,
  Card,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Button,
} from "react-bootstrap";

import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import authenticateUser from "../Redux/ServiceInvoker/LoginServiceInvoker";
import serviceUrlData from "../Shared/ServiceUrls.json";

export default function Login() {
  //Setting up the error messages.
  const validationSchema = Yup.object({
    emailId: Yup.string()
      .email("Invalid Email Id")
      .required("Email Id is Required"),
    pass: Yup.string().required("Password is Mandatory"),
  });

  //Validating the From with Yup
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(validationSchema),
  });

  //Setting up the Navigate hook
  let navigate = useNavigate();

  //Setting up the Dispatch hook
  const dispatch = useDispatch();

  //Submitting Form Data
  const onSubmit = (values) => {
    let loginRequest = {
      url: serviceUrlData.devURI + serviceUrlData.loginURI,
      data: {
        emailId: values.emailId,
        password: values.pass,
      },
      callbackSuccess: renderLoggedCustomer,
      callbackFailure: renderTheErrorPage,
    };
    //Invoking the API
    dispatch(authenticateUser(loginRequest));
  };

  //Seeting up the status message
  const [loggedInMessage, setLoggedInMessage] = useState(null);

  //Rendering Success Page
  function renderLoggedCustomer(response) {
    if (response !== null && response.statusResponse.statusCode === 200) {
      navigate("/home");
    } else {
      setLoggedInMessage(response.statusResponse.statusMessage);
    }
  }

  //Render the Error Page
  function renderTheErrorPage(error) {
    if (error !== null) {
      navigate("/error");
    }
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Card style={{ width: "20rem" }} className="mt-3 mb-3">
            {loggedInMessage !==null ? <p className="error-message">{loggedInMessage}</p> : ""}
            <Card.Body>
              <Card.Title className="text-center display-5">
                Login Page .....{" "}
              </Card.Title>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <FormGroup>
                  <FormLabel>User Id</FormLabel>
                  <FormControl
                    type="email"
                    placeholder="Enter your email"
                    name="emailId"
                    ref={register}
                    className={errors.emailId ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">
                    {errors.emailId?.message}
                  </div>
                </FormGroup>
                <FormGroup>
                  <FormLabel>Password</FormLabel>
                  <FormControl
                    type="password"
                    placeholder="Enter your password"
                    name="pass"
                    ref={register}
                    className={errors.pass ? " is-invalid" : ""}
                  />
                  <div className="invalid-feedback">{errors.pass?.message}</div>
                </FormGroup>
                <Button type="submit" block variant="danger" className="mb-3">
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </div>
  );
}
