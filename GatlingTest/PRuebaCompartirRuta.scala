package viade_es5b

import scala.concurrent.duration._

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import io.gatling.jdbc.Predef._

class PRuebaCompartirRuta extends Simulation {

	val httpProtocol = http
		.baseUrl("http://localhost:3000")
		.acceptHeader("*/*")
		.acceptEncodingHeader("gzip, deflate")
		.acceptLanguageHeader("es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3")
		.userAgentHeader("Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:75.0) Gecko/20100101 Firefox/75.0")





	val scn = scenario("PRuebaCompartirRuta")
		.exec(http("PRuebaCompartirRuta_0")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_1")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_2")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(121 milliseconds)
		.exec(http("PRuebaCompartirRuta_3")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_4")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_5")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_6")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(131 milliseconds)
		.exec(http("PRuebaCompartirRuta_7")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_8")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_9")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_10")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(135 milliseconds)
		.exec(http("PRuebaCompartirRuta_11")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_12")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_13")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_14")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(118 milliseconds)
		.exec(http("PRuebaCompartirRuta_15")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(10)
		.exec(http("PRuebaCompartirRuta_16")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_17")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_18")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(122 milliseconds)
		.exec(http("PRuebaCompartirRuta_19")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_20")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_21")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_22")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(157 milliseconds)
		.exec(http("PRuebaCompartirRuta_23")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_24")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_25")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_26")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(118 milliseconds)
		.exec(http("PRuebaCompartirRuta_27")
			.get("/viade_es5b/static/js/0.chunk.js.map"))
		.pause(9)
		.exec(http("PRuebaCompartirRuta_28")
			.get("/viade_es5b/static/js/0.chunk.js"))
		.exec(http("PRuebaCompartirRuta_29")
			.get("/viade_es5b/static/js/main.chunk.js"))
		.exec(http("PRuebaCompartirRuta_30")
			.get("/viade_es5b/static/js/main.chunk.js.map"))
		.pause(109 milliseconds)
		.exec(http("PRuebaCompartirRuta_31")
			.get("/viade_es5b/static/js/0.chunk.js.map"))

	setUp(scn.inject(atOnceUsers(1))).protocols(httpProtocol)
}