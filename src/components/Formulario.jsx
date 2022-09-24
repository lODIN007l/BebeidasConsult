import { Button, Form, Row, Col } from "react-bootstrap";

const Formulario = () => {
  return (
    <Form>
      <Row>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="nombre">Nombre Bebida</Form.Label>
            <Form.Control
              id="nombre"
              type="text"
              placeholder="Ej:tequila,Vodka,etc"
              name="nombre"
            ></Form.Control>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group>
            <Form.Label htmlFor="categoria">Categoria Bebida</Form.Label>
            <Form.Select id="categoria" name="categoria">
              <option>--Selecciona Categoria--</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Formulario;
