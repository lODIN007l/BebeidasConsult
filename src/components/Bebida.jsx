import { Col, Card, Button } from "react-bootstrap";

const Bebida = ({ bebida }) => {
  return (
    <Col md={6} lg={3}>
      <Card className="mb-4">
        <Card.Img variant="top" src={bebida.strDrinkThumb} />
        <Card.Body>
          <Card.Title className="text-center">{bebida.strDrink}</Card.Title>
          <Button className="w-100 text-uppercase mt-2" variant="warning">
            Ver receta
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Bebida;
