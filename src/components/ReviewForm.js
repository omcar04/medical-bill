import React from "react";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Navigation from "./Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import pic from "../billpic.jpg";

function ReviewForm() {
  const navigate = useNavigate();
  const { id: urlId } = useParams();
  const [input, setInput] = useState({});

  useEffect(() => {
    const storedObjects = localStorage.getItem("bills");
    const objectsArray = JSON.parse(storedObjects);
    const searchObject = () => {
      if (objectsArray && objectsArray.length > 0) {
        const foundObject = objectsArray.find((obj) => obj.id === urlId);
        if (foundObject) {
          setInput(foundObject);
        }
      }
    };

    searchObject();
  }, [urlId]);

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row className="mt-3">
          <Col className="col-2"></Col>
          <Col className="col-8">
            <Card>
              <Card.Img variant="top" src={pic} className="opacity-25" />
              <Card.Body>
                <h3>{input.name}</h3>
                <p>Address: {input.address}</p>
                <p>Hospital: {input.hospital}</p>
                <p>Date: {input.date}</p>
                <p>Bill Amount: {input.amount}</p>
              </Card.Body>
              <Card.Body>
                <Button
                  className="btn-color border-0 rounded-pill"
                  onClick={() => {
                    navigate(`/editform/${urlId}`);
                  }}
                >
                  Edit Info
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-2"></Col>
        </Row>
      </Container>
    </>
  );
}

export default ReviewForm;
