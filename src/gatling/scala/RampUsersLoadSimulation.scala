import io.gatling.core.Predef.configuration
import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
import io.gatling.http.protocol.HttpProtocolBuilder
import scala.concurrent.duration._

import scala.concurrent.duration.DurationInt

/**
 * @author arun on 4/19/21
 */
class RampUsersLoadSimulation extends Simulation {

  val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
    .header("Accept", "application/json")

  private def getAllPatients(): ChainBuilder = {
    repeat(3) {
      exec(http("Get all Patients, 1st call").get("get").check(status.is(200)))
    }
  }

  private def getSpecificPatient() = {
    repeat(5) {
      exec(http("Get specific Patients").get("get/1"))
    }
  }

  val scn: ScenarioBuilder = scenario("Code reuse")
    .exec(getAllPatients()).pause(5)
    .exec(getSpecificPatient()).pause(3000.millisecond)
    .exec(getSpecificPatient())

  setUp(scn.inject(
    nothingFor(5),
    constantUsersPerSec(20) during (10 seconds)).protocols(httpConf.inferHtmlResources()))

}
