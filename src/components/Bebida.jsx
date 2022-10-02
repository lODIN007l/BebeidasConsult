import { Col, Card, Button } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
const Bebida = ({ bebida }) => {
  const { handlModalClick } = useBebidas();
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={bebida.strDrinkThumb} />
        <Card.Body>
          <Card.Title className="text-center">{bebida.strDrink}</Card.Title>
          <Button
            onClick={() => {
              handlModalClick();
            }}
            className="w-100 text-uppercase mt-2"
            variant="warning"
          >
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
