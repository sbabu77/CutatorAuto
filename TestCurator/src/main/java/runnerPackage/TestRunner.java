package runnerPackage;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/featureFile/",
		glue = "stepDefinition",
//  	dryRun = true,
		monochrome = true,
		plugin = {"html:target/HTMLReport",
				  "json:target/cucumber.json",
				  "junit:target/cucumber.xml"},
				//  "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"},
		tags = {"@SmokeTest"}

		)

//features={"automatedTestingServices.feature", "smoketest.feature"})
public class TestRunner {

}
