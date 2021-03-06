import { addRoute } from "./Scripts/addRoute.js";
import { deleteRoute } from "./Scripts/deleteRoute.js";
import { listRoutes } from "./Scripts/listRoutes.js";
import { listFriends } from "./Scripts/listFriends.js";
import { addFriend } from "./Scripts/addFriend.js";
import { shareRoute } from "./Scripts/shareRoute.js";
import { processSharedRoutes } from "./Scripts/processSharedRoutes.js";
import { listSharedRoutes } from "./Scripts/listSharedRoutes.js";
import { addCommentToRoute } from "./Scripts/addCommentToRoute.js";
import { listCommentsOfRoute } from "./Scripts/listCommentsOfRoute.js";
import { addMediaToRoute } from "./Scripts/addMediaToRoute.js";
import { getPersonaByWebId } from "./Scripts/helpers/personHelper";
import { listMediaOfRoute } from "./Scripts/listMediaOfRoute";
import { validAppPermissions } from "./Scripts/validAppPermissions";

export default class BackMain {
	static listarRutas () {
		return listRoutes();
	}

	static añadirRuta (Ruta) {
		return addRoute(Ruta);
	}

	static borrarRuta (uuid, routeName) {
		return deleteRoute(uuid, routeName);
	}

	static listarAmigos () {
		return listFriends();
	}

	static añadirAmigo (friendWebId) {
		return addFriend(friendWebId);
	}

	static compartirRuta (friendWebId, rutaUUID) {
		return shareRoute(friendWebId, rutaUUID);
	}

	static procesarRutasCompartidas () {
		return processSharedRoutes();
	}

	static listarRutasCompartidasConmigo () {
		return listSharedRoutes();
	}

	static comentarRuta (comment, routeUUID, routeOwnerWebID) {
		return addCommentToRoute(comment, routeUUID, routeOwnerWebID);
	}

	static obtenerComentariosRuta (rutaUUID, webId) {
		return listCommentsOfRoute(rutaUUID, webId);
	}

	static getPersonByWebID (webID) {
		return getPersonaByWebId(webID);
	}

	static subirFicheroARuta (file, routeUUID, routeOwnerWebID) {
		return addMediaToRoute(file, routeUUID, routeOwnerWebID);
	}

	static obtenerFicherosRuta (rutaUUID, webId) {
		return listMediaOfRoute(rutaUUID, webId);
	}
	static permisosAppValidos () {
		return validAppPermissions();
	}
}
