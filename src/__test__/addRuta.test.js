import React from "react";
// import ReactDOM from "react-dom";
// import RouteCard from "../front-end/components/ruta/VerRutas/RouteCard";
// import Ruta from "../front-end/model/Ruta";
// import Hito from "../front-end/model/Hito";
import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AddRuta from "../front-end/components/ruta/AñadirRuta/AddRuta";



//------------------------------------------------ PRUEBAS INICIALES ------------------------------------------------\\

//Componente AddRuta
test("Comprobar que se renderiza sin fallos el componente AddRuta", () => {
	const div = document.createElement("div");
	const { getByTestId } = render(<AddRuta ></AddRuta>, div);//data-testid="in-nombreRuta" 
	expect(getByTestId("panel-ruta")).toHaveTextContent("Añadir rutas:");
});

//PRUEBAS PARA EL FORMULARIO DE AÑADIR RUTA
test("Comprobar que se visualizan los encabezados del formulario para añadir una ruta", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("titleAñadirRuta")).toHaveTextContent("Añadir rutas:");
	expect(getByTestId("titlelugarInicio")).toHaveTextContent("Lugar de inicio:");
});

test("Comprobar que se visualizan las etiquetas del formulario para añadir una ruta", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);

	expect(getByTestId("e-nombreRuta")).toHaveTextContent("Nombre de la ruta:");
	expect(getByTestId("e-latitudRuta")).toHaveTextContent("Latitud de la ruta:");
	expect(getByTestId("e-longitudRuta")).toHaveTextContent("Longitud de la ruta:");
	expect(getByTestId("e-descripcionRuta")).toHaveTextContent("Descripción de la ruta:");
});

test("Comprobar que se visualiza el botón para añadir/guardar una ruta", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("addRouteButton")).toHaveTextContent("Añadir ruta");
	expect(getByTestId("saveRouteButton")).toHaveTextContent("Guardar ruta");
});

test("Comprobar que se visualizan los inputs para añadir una ruta", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreRuta")).toBeInTheDocument();
	expect(getByTestId("in-latitudRuta")).toBeInTheDocument();
	expect(getByTestId("in-longitudRuta")).toBeInTheDocument();
	expect(getByTestId("in-descripcionRuta")).toBeInTheDocument();
});

test("Comprobar que los inputs para añadir una ruta están inicialmente activados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreRuta")).toBeEnabled();
	expect(getByTestId("in-latitudRuta")).toBeEnabled();
	expect(getByTestId("in-longitudRuta")).toBeEnabled();
	expect(getByTestId("in-descripcionRuta")).toBeEnabled();
});

test("Comprobar que los inputs para añadir una ruta están inicialmente vacios", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreRuta")).toBeEmpty();
	expect(getByTestId("in-latitudRuta")).toBeEmpty();
	expect(getByTestId("in-longitudRuta")).toBeEmpty();
	expect(getByTestId("in-descripcionRuta")).toBeEmpty();
});

test("Comprobar que el botón para añadir una ruta está inicialmente activado", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("addRouteButton")).toBeEnabled();
});


//PRUEBAS PARA EL FORMULARIO DE AÑADIR HITO
test("Comprobar que se visualizan los encabezados del formulario para añadir un hito", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("titleAñadirHito")).toHaveTextContent("Añadir hitos para la ruta:");

});

test("Comprobar que se visualizan las etiquetas del formulario para añadir un hito", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);

	expect(getByTestId("e-nombreHito")).toHaveTextContent("Nombre del hito:");
	expect(getByTestId("e-latitudHito")).toHaveTextContent("Latitud del hito:");
	expect(getByTestId("e-longitudHito")).toHaveTextContent("Longitud del hito:");
});

test("Comprobar que se visualiza el botón para añadir un hito", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("addHitoButton")).toHaveTextContent("Añadir hito");
});

test("Comprobar que se visualizan los inputs para añadir un hito", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreHito")).toBeInTheDocument();
	expect(getByTestId("in-latitudHito")).toBeInTheDocument();
	expect(getByTestId("in-longitudHito")).toBeInTheDocument();
});

test("Comprobar que los inputs para añadir un hito están inicialmente vacíos", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreHito")).toBeEmpty();
	expect(getByTestId("in-latitudHito")).toBeEmpty();
	expect(getByTestId("in-longitudHito")).toBeEmpty();
});

test("Comprobar que los inputs para añadir un hito están inicialmente desactivados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("in-nombreHito")).toBeDisabled();
	expect(getByTestId("in-latitudHito")).toBeDisabled();
	expect(getByTestId("in-longitudHito")).toBeDisabled();
});

test("Comprobar que los botones para añadir un hito y para guardar una ruta está inicialmente desactivados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	expect(getByTestId("addHitoButton")).toBeDisabled();
	expect(getByTestId("saveRouteButton")).toBeDisabled();
});


//-------------------- PRUEBAS AL PINCHAR EN EL BOTÓN DE AÑADIR RUTA --------------------\\

//PRUEBAS PARA EL FORMULARIO DE AÑADIR RUTA
test("Comprobar que los inputs para añadir una ruta están desactivados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	getByTestId("addRouteButton").click();

	expect(getByTestId("in-nombreRuta")).toBeDisabled();
	expect(getByTestId("in-latitudRuta")).toBeDisabled();
	expect(getByTestId("in-longitudRuta")).toBeDisabled();
	expect(getByTestId("in-descripcionRuta")).toBeDisabled();
});

test("Comprobar que el botón para añadir una ruta está desactivado", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	getByTestId("addRouteButton").click();
	expect(getByTestId("addRouteButton")).toBeDisabled();
});

//PRUEBAS PARA EL FORMULARIO DE AÑADIR HITO
test("Comprobar que los inputs para añadir un hito están activados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	getByTestId("addRouteButton").click();
	expect(getByTestId("in-nombreHito")).toBeEnabled();
	expect(getByTestId("in-latitudHito")).toBeEnabled();
	expect(getByTestId("in-longitudHito")).toBeEnabled();
});

test("Comprobar que los botones para añadir un hito y para guardar una ruta están activados", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	getByTestId("addRouteButton").click();
	expect(getByTestId("addHitoButton")).toBeEnabled();
	expect(getByTestId("saveRouteButton")).toBeEnabled();
});


//-------------------- PRUEBAS AL PINCHAR EN EL BOTÓN DE AÑADIR HITO --------------------\\

test("Comprobar que los inputs para añadir un hito están otra vez vacíos", () => {
	const { getByTestId } = render(<AddRuta ></AddRuta>);
	getByTestId("addRouteButton").click();
	getByTestId("addHitoButton").click();
	expect(getByTestId("in-nombreHito")).toBeEmpty();
	expect(getByTestId("in-latitudHito")).toBeEmpty();
	expect(getByTestId("in-longitudHito")).toBeEmpty();
});

//-------------------- PRUEBAS AL PINCHAR EN EL BOTÓN DE GUARDAR RUTA --------------------\\
