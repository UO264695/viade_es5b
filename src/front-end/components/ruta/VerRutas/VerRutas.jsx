import React, { Component } from "react";
import RouteList from "./RouteList";
import PacmanViewLoader from "../../util/Loaders/PacmanViewLoader";
import RutaService from "../../../services/rutas/RutaService";
import AmigoService from "../../../services/amigos/AmigoService";
import { Jumbotron } from "react-bootstrap";

/**
 * Clase VerRutas que representa la vista general para ver
 * el listado de las rutas del POD del usuario loggeado.
 * COMPONENTE PADRE - Hijos: RouteList.
 */
class VerRutas extends Component {
  constructor() {
    super();
    this.rutaService = new RutaService();
    this.amigoService = new AmigoService();
  }

  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <header>
          <Jumbotron>
            <h1 className="display-4">Mis rutas</h1>
            <p>
              En este apartado puedes echar un vistazo a tus rutas,
              visualizarlas en un mapa, ver sus detalles o bien eliminarlas.
            </p>
          </Jumbotron>
        </header>
        <PacmanViewLoader // Overlay de carga para mostrar la vista de las rutas.
          text={"Espera un momento, estamos recuperando tus rutas..."}
          children={
            <RouteList
              handleLoaded={this.handleLoaded}
              permisosValidos={this.rutaService.permisosAppValidos}
              getRutas={this.rutaService.getRutas}
              deleteRuta={this.rutaService.deleteRuta}
              shareRuta={this.rutaService.shareRuta}
              obtenerFicherosRuta={this.rutaService.obtenerFicherosRuta}
              subirFicheroAMiRuta={this.rutaService.subirFicheroAMiRuta}
              getAmigos={this.amigoService.getAmigos}
              comentarMiRuta={this.rutaService.comentarMiRuta}
              obtenerComentariosRuta={this.rutaService.obtenerComentariosRuta}
              showMap={true}
            />
          }
          loading={this.state.loading}
        />
      </div>
    );
  }

  /**
   * Invocado desde la lista de rutas para indicar que ya se han
   * cargado las rutas del usuario.
   */
  handleLoaded = () => {
    this.setState({ loading: false });
  };
}

export default VerRutas;
