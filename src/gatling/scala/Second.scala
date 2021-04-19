import io.gatling.core.Predef.configuration
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.structure.ScenarioBuilder
import io.gatling.http.protocol.HttpProtocolBuilder
import scala.concurrent.duration.DurationInt

/**
 * @author arun on 4/18/21
 */
class Second extends Simulation {

  val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
    .header("Accept", "application/json")
  val scn: ScenarioBuilder = scenario("My First Test")
    .exec(http("Get all Patients, 1st call").get("get")).pause(5)

    .exec(http("Get specific Patients").get("get/1")).pause(1, 20)

    .exec(http("Get all Patients, 2nd call").get("get")).pause(3000.millisecond)

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
}
