import { schema } from "rdf-namespaces"
import { fetchDocument } from "tripledoc"
import { readFolder, existsFileInFolder } from "../helpers/fileHelper"
import { getPersonaByWebId } from "../helpers/personHelper"
import Ruta from "../../../front-end/model/Ruta.js"
import Hito from "../../../front-end/model/Hito.js"
import Comentario from "../../../front-end/model/Comentario.js"

export async function readRouteFromUrl (url) {
  let routeDoc
  let ruta = null
  await fetchDocument(url)
    .then(content => {
      routeDoc = content
    })
    .catch(err => (routeDoc = null))

  if (routeDoc != null) {
    try {
      const route = routeDoc.getSubject("#ruta")

      const puntos = routeDoc.getSubjectsOfType(
        "http://arquisoft.github.io/viadeSpec/points"
      )

      ruta = new Ruta(
        route.getString(schema.name),
        [
          puntos[0].getDecimal(schema.latitude),
          puntos[0].getDecimal(schema.longitude)
        ],
        route.getString(schema.description)
      )
      ruta.setUUID(route.getString(schema.identifier))

      for (var e = 1; e < puntos.length; e++) {
        ruta.addHito(
          new Hito(
            puntos[e].getString(schema.name),
            puntos[e].getDecimal(schema.latitude),
            puntos[e].getDecimal(schema.longitude)
          )
        )
      }

      const comentarios = routeDoc.getSubjectsOfType(
        "http://arquisoft.github.io/viadeSpec/userComment"
      )
      for (let i = 0; i < comentarios.length; i++) {
        const comentario = new Comentario(comentarios[i].getDateTime(schema.datePublished), comentarios[i].getString(schema.text))
        const autor = await getPersonaByWebId(comentarios[i].getRef(schema.author))
        comentario.setAutor(autor)
        ruta.addComentario(comentario)
      }
      const ficheros = routeDoc.getSubjectsOfType(schema.MediaObject)
      for (let i = 0; i < ficheros.length; i++) {
        const fichero = ficheros[i].getRef(schema.contentUrl)
        ruta.addFichero(fichero)
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }
  return ruta
}
export async function findRouteURL (folderUrl, uuid) {
  const folder = await readFolder(folderUrl)
  if (folder) {
    for (var i = 0; i < folder.files.length; i++) {
      let routeDoc
      await fetchDocument(folder.files[i].url).then((content) => {
        routeDoc = content
      })
        .catch(err => routeDoc = null)

      if (routeDoc != null) {
        var route = routeDoc.getSubject("#ruta")
        var ID = route.getString(schema.identifier)
        if (ID === uuid) {
          return folder.files[i].url
        }
      }
    };
  }
  console.log(folderUrl + " " + uuid + " ruta no encontrada")
  return null
}
export async function getSharedRouteFriends (storage, routeUUID) {
  var result = []
  var exists = await existsFileInFolder(storage + "private", "mySharedRoutes.ttl")
  if (exists) {
    const mySharedRoutesDocument = await fetchDocument(storage + "private/mySharedRoutes.ttl")

    const rutas = mySharedRoutesDocument.getAllSubjectsOfType("http://arquisoft.github.io/viadeSpec/route")
    for (var e = 0; e < rutas.length; e++) {
      // Miro a ver si estoy compartiendo esta ruta
      if (rutas[e].getLiteral(schema.identifier) === routeUUID) {
        // Si la estoy compartiendo entonces saco los amigos con los que la comparto
        const amigos = rutas[e].getAllRefs(schema.agent)
        for (var i = 0; i < amigos.length; i++) {
          // los añado a result
          result = [...result, amigos[i]]
        }
        // Ya encontre lo que busco asi que salgo
        break
      }
    }
  }
  return result
}
