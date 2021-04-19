import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

class MyFirstTestClass extends Simulation {

  val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
    .header("Accept", "application/json")

  val scn: ScenarioBuilder = scenario("My First Test").exec(http("Create Patients").get("get/1"))

  setUp(scn.inject(atOnceUsers(500))).protocols(httpConf)
}
