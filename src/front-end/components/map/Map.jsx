import React, { Component } from "react";

class Map extends Component {
  constructor(ruta) {
    this.ruta = ruta; // Ruta a representar en el mapa
    this.mapID = `mapa-${ruta.getNombre()}`;
    this.coords = this.getCoords(ruta); // obtenemos la lista de coordenadas de los hitos
    this.state = {};
    console.log(this.coords);
  }

  render() {
    return <div id={this.mapID} class="mapa"></div>;
  }

  /*
   * Lleva a cabo la creación del mapa a partir de
   * las coordenadas de inicio de la ruta.
   */
  crearMapa() {}

  /*
   * Dada una ruta, devuelve una lista con los puntos
   * de cada uno de los hitos de la ruta.
   */
  getCoords(ruta) {
    var hitos = ruta.getHitos();
    var coords = [];
    for (var i in ruta.getHitos()) {
      let name = hitos[i].getNombre();
      let lat = hitos[i].getLat();
      let long = hitos[i].getLong();
      coords.push({
        hito: name,
        lat: lat,
        long: long
      });
    }
    return coords;
  }
}

export default Map;
