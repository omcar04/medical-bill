import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import BillCard from "./BillCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Navigation from "./Navigation";

function Home() {
  const [bills, setBills] = useState(() => {
    return JSON.parse(localStorage.getItem("bills")) || [];
  });

  return (
    <>
      <Navigation />
      <Container>
        <h1 className="mt-3 color-green ">Uploaded Bills</h1>
        <Row xs={1} md={3} className="my-4 g-4">
          {bills && bills.length > 0 ? (
            bills.map((item, idx) => (
              <Col key={item.id}>
                <BillCard
                  id={item.id}
                  name={item.name}
                  hospital={item.hospital}
                  amount={item.amount}
                />
              </Col>
            ))
          ) : (
            <p>No Bills Found</p>
          )}
        </Row>
      </Container>
    </>
  );
}

export default Home;
