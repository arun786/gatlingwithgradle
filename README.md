# Use of Gatling

Configuration for Gatling

build.gradle
    
    plugins {
        id 'io.gatling.gradle' version '3.5.1'
    }
    
    gatling {
        logLevel = 'WARN'
        logHttp = 'NONE'
    }
    
For executing the script from Command Line, we have to use the below

./gradlew clean gatlingRun-CodeReuse

Various ways to Test Rest service

Calling an Get end Point with a path variable as 1

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

Calling two end points for Get.

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
    
Calling Get end Point and check the status which is returned
    
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
        class CheckResponseCode extends Simulation {
        
          val httpConf: HttpProtocolBuilder = http.baseUrl("http://localhost:8080/patient/")
            .header("Accept", "application/json")
          val scn: ScenarioBuilder = scenario("My First Test")
            .exec(http("Get all Patients, 1st call").get("get").check(status.is(200))).pause(5)
        
            .exec(http("Get specific Patients").get("get/1").check(status.is(200))).pause(1, 20)
        
            .exec(http("Get all Patients, 2nd call").get("get").check(status.is(200))).pause(3000.millisecond)
        
          setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
        }

Calling Get end Point and check the status and response which is returned

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
        .exec { session => println(session); session }
    
        .exec(http("Get specific Patient")
          .get("get/${name}")
          .check(status.is(200))
          .check(jsonPath("$.name")
            .is("Adwiti"))
          .check(bodyString.saveAs("responseBody")))
        .exec {
          session =>
            println(session("responseBody").as[String]);
            session
        }
    
      setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
    }

how to reuse the code

    import io.gatling.core.Predef.configuration
    import io.gatling.core.scenario.Simulation
    import io.gatling.http.Predef._
    import io.gatling.core.Predef._
    import io.gatling.core.structure.{ChainBuilder, ScenarioBuilder}
    import io.gatling.http.protocol.HttpProtocolBuilder
    
    import scala.concurrent.duration.DurationInt
    
    /**
     * @author arun on 4/18/21
     */
    class CodeReuse extends Simulation {
    
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
    
      val scn: ScenarioBuilder = scenario("Code resue")
        .exec(getAllPatients()).pause(5)
        .exec(getSpecificPatient()).pause(3000.millisecond)
        .exec(getSpecificPatient())
    
      setUp(scn.inject(atOnceUsers(1))).protocols(httpConf)
    }

How to read from csv feeder

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


Basic Load Simulation

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
    class BasicLoadSimulation extends Simulation {
    
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
        atOnceUsers(5),
        rampUsers(500) during (20)).protocols(httpConf.inferHtmlResources()))
    
    }
