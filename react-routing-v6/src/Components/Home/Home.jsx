import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Home() {
  //Pulling up the data from Redux
  const loggedUser = useSelector((state) => state.loginReducer.data);

  //Declearing the Navigate Hook
  let navigate = useNavigate();

  //UseEffect hook restricting this page load
  useEffect(() => {
    if (typeof loggedUser.data === "undefined") {
      navigate("/");
    }
  });

  let loggedUserData = {};

  if (typeof loggedUser.data !== undefined) {
    loggedUserData = loggedUser.data;
    console.log("Logged User Data ", loggedUserData);
  }

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-end">
          <h3 className="text-center mr-5 mt-3">
            {" "}
            {typeof loggedUserData !== "undefined" ? (
              <p>
                Welcome {loggedUserData.firstName} {loggedUserData.lastName}{" "}
              </p>
            ) : (
              ""
            )}
          </h3>
        </Row>
        <Row className="justify-content-center">
          <Col>
            <p className="display-4 text-success text-center">
              {" "}
              Welcome to the Home Page <a href="/">Click here</a> to Logout.{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
