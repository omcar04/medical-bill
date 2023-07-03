import Card from "react-bootstrap/Card";
import pic from "../billpic.jpg";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function BillCard({ id, name, hospital, amount }) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "24rem" }} className="shadow sm">
      <Card.Img variant="top" src={pic} className="opacity-25" />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{hospital}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>${amount}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button
          className="btn-color rounded-pill border-0"
          onClick={() => {
            navigate(`/reviewform/${id}`);
          }}
        >
          More Info
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BillCard;
