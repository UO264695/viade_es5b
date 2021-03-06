import React, { Component } from "react";
import { Container, Col, Row, Card, Jumbotron } from "react-bootstrap";
import "../../../css/card-menu.css";

/**
 * Componente que representa un menú para añadir rutas
 * de diferentes maneras.
 */
class AddMenu extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <Jumbotron>
            <h1>Crear una nueva ruta</h1>
            <p>Selecciona el modo en el que deseas añadir una nueva ruta.</p>
          </Jumbotron>
        </header>

        <Container>
          <Row>
            <Col role="menu-item">
              <a href="#/add-ruta" data-testid="a-manual">
                <Card className="card-item">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/img/form-logo.png"}
                  />
                  <Card.Body>
                    <Card.Title data-testid="manual">
                      Crear manualmente
                    </Card.Title>
                    <Card.Text>
                      Crea una nueva ruta introduciendo sus datos a mano a
                      través de un formulario.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>

            <Col role="menu-item">
              <a href="#/add-ruta-map" data-testid="a-mapa">
                <Card className="card-item">
                  <Card.Img
                    variant="top"
                    src={process.env.PUBLIC_URL + "/img/map-logo.jpg"}
                  />
                  <Card.Body>
                    <Card.Title data-testid="conmapa">
                      Crear con un mapa
                    </Card.Title>
                    <Card.Text>
                      Crea una ruta con la ayuda de un mapa interactivo sobre el
                      que puedes ir haciendo click para ir dibujando tu ruta en
                      el mapa.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col role="menu-item">
              <Card className="card-item">
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/img/file-logo.jpg"}
                />
                <Card.Body>
                  <Card.Title data-testid="confichero">
                    Crear a partir de fichero
                  </Card.Title>
                  <Card.Text>
                    Crea una nueva ruta importando sus datos a partir de un
                    fichero.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default AddMenu;
