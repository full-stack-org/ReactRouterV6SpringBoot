import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Error() {
  //Pulling up the data from Redux
  const loggedUser = useSelector((state) => state.loginReducer.data);

  //Declearing the Navigate Hook
  let navigate = useNavigate()

  //UseEffect hook restricting this page load
  useEffect(()=>{
    if(typeof loggedUser.data === "undefined"){
      navigate('/')
    }
  })
  
  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col>
            <p className="display-4 text-success text-center"> We are experiencing service issues. Please try again later.
            <a href="/">Click Here</a> to Login Again. Thank you</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
