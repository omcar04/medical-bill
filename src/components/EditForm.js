import { useState, useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Navigation from "./Navigation";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";

function EditForm() {
  const { id: urlId } = useParams();
  const [bills, setBills] = useState([]);
  const [validated, setValidated] = useState(false);
  const [input, setInputs] = useState({
    name: "",
    address: "",
    hospital: "",
    date: new Date(),
    picture: "",
    amount: 0,
    picture: "",
  });

  const itemIndex = bills.findIndex((item) => item.id === urlId);

  useEffect(() => {
    const storeBills = JSON.parse(localStorage.getItem("bills")) || [];
    setBills(storeBills);
  }, []);

  useEffect(() => {
    if (urlId) {
      const selectedItem = bills.find((item) => item.id === urlId);
      if (selectedItem) {
        setInputs({
          id: selectedItem.id,
          name: selectedItem.name,
          address: selectedItem.address,
          amount: selectedItem.amount,
          hospital: selectedItem.hospital,
          date: selectedItem.date,
        });
      }
    }
  }, [urlId, bills]);

  function handleChange(e) {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function formSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (form.checkValidity() === true) {
      bills[itemIndex] = input;
      localStorage.setItem("bills", JSON.stringify(bills));
      alert("Bill Info Updated!");
    }
    setValidated(true);
  }

  return (
    <>
      <Navigation></Navigation>
      <Container>
        <Row className="mt-3">
          <Col md={{ span: 6, offset: 3 }}>
            <h1>Edit Medical Information</h1>
            <br />
            <Form noValidate validated={validated} onSubmit={formSubmit}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Patient Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={input.address}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Hospital Name</Form.Label>
                <Form.Control
                  type="text"
                  name="hospital"
                  value={input.hospital}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  name="date"
                  value={input.date}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Picture of the Bill</Form.Label>
                  <Form.Control
                    type="file"
                    name="picture"
                    value={input.picture}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Label>Bill Amount</Form.Label>
                <Form.Control
                  type="number"
                  name="amount"
                  value={input.amount}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
              <Button className="btn-color border-0 rounded-pill" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default EditForm;
