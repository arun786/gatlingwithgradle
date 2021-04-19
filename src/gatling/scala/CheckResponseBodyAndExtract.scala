import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.protocol.HttpProtocolBuilder

/**
 * @author arun on 4/18/21
 */
class CheckResponseBodyAndExtract extends Simulation {
  val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
    .header("Accept", "application/json")
  val scn: ScenarioBuilder = scenario("My First Test")
    .exec(http("Get a specific patient")
      .get("get/1")
      .check(status.is(200))
      .check(jsonPath("$.age")
        .is("26")))

    .exec(http("Get all the patient")
      .get("get")
      .check(status.is(200))
      .check(jsonPath("$[5].id")
        .saveAs("name")))

    .exec(http("Get specific Patient")
      .get("get/${name}")
      .check(status.is(200))
      .check(jsonPath("$.name")
        .is("Adwiti")))

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
