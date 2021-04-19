import io.gatling.core.scenario.Simulation
import io.gatling.http.Predef._
import io.gatling.core.Predef._
import io.gatling.http.protocol.HttpProtocolBuilder

/**
 * @author arun on 4/19/21
 */
class ReadingFromCSVFeeder extends Simulation {
  val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
    .header("Accept", "application/json")

  val csvFeeder = csv("data/patientCsv.csv").circular

  def getSpecificPatient() = {
    repeat(30) {
      feed(csvFeeder)
        .exec(http("Get specific games")
          .get("get/${id}")
          .check(status.is(200))
          .check(jsonPath("$.name").is("${name}"))
        )
    }
  }

  val scn = scenario("read from csv feeder")
    .exec(getSpecificPatient())

  setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)

}
