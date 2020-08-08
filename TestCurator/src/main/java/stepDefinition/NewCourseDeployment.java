package stepDefinition;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NewCourseDeployment extends BaseClass{
	String crsName;
	String crsConnector;
	String destination;
	String language;
	@When("^user click the Course Deployments navigation panel and click New Course Deployment button$")
	public void user_click_the_Course_Deployments_navigation_panel_and_click_New_Course_Deployment_button() throws Throwable {

		PageFactory.initElements(driver, pageObjects.CourseDeployments.class);
		pageObjects.Deploy.CourseDeploymentNavLink.click();
		pageObjects.Deploy.NewCourseDeploymentBtn.click();
		
	}

	@When("^select Course name and Course Connectors from the drop down$")
	public void select_Course_name_and_Course_Connectors_from_the_drop_down(DataTable depTable) throws Throwable {
		List<List<String>> deployTable = depTable.raw();
		crsName = deployTable.get(1).get(0);
		crsConnector = deployTable.get(1).get(1);
		PageFactory.initElements(driver, pageObjects.CourseDeployments.class);
	//	pageObjects.CourseDeployments.CourseDeploymentDropDown.sendKeys(crsName);
		pageObjects.CourseDeployments.CourseConnectorsDropDown.sendKeys(crsConnector);
		
		  
	}

	@When("^Select course session check box and click the Destination lookup search icon$")
	public void select_course_session_check_box_and_click_the_Destination_lookup_search_icon() throws Throwable {
		PageFactory.initElements(driver, pageObjects.CourseDeployments.class);
		Thread.sleep(1000);
		pageObjects.CourseDeployments.CourseSessionChkBox.click();
		Thread.sleep(1000);
		pageObjects.CourseDeployments.Destinationlookupsearchicon.click();
		

	}

	@When("^Select destination, language and click the Add Set Up and select Buttons$")
	public void select_destination_language_and_click_the_Add_Set_Up_and_select_Buttons(DataTable desTable) throws Throwable {
		List<List<String>> destinationTable = desTable.raw();
		destination = destinationTable.get(1).get(0);
		language = destinationTable.get(1).get(1);
		Thread.sleep(1000);
		pageObjects.CourseDeployments.LMSLookupDestinationDropDown.sendKeys(destination);
		pageObjects.CourseDeployments.LMSLanguageDropDown.sendKeys(language);
		Thread.sleep(1000);
		pageObjects.CourseDeployments.AddSetUpBtn.click();
		pageObjects.CourseDeployments.SelectBtn.click();
	}

	@When("^click the create button$")
	public void click_the_create_button() throws Throwable {
		PageFactory.initElements(driver, pageObjects.CourseDeployments.class);
		Thread.sleep(1000);
		pageObjects.CourseDeployments.CourseDeploymentCreatebtn.click();
	}

	@Then("^Course deployment should be created$")
	public void course_deployment_should_be_created() throws Throwable {
	  
		String alertmsg = pageObjects.Organization.Confirmationmsg.getText();
		Assert.assertTrue(alertmsg.contains("The deploy was created"));
		System.out.println("'" + crsName + "' deploy was created Successfully");
		
		Thread.sleep(5000);
		tearDown();
	}



}
