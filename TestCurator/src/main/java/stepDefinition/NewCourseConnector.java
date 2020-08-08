package stepDefinition;

import java.util.List;

import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NewCourseConnector extends BaseClass{
	
	String lmsname;
	String lmstype;
	String lmssubtype;
	String lmsURL;
	String lmsAuthenticationToken;
	String SCContentInfo;
	String SCContentFiles;
	
	@Given("^user navigate to Deploy screen$")
	public void user_navigate_to_Deploy_screen() throws Throwable {
		PageFactory.initElements(driver, pageObjects.Deploy.class);
		pageObjects.Deploy.Deploylink.click();
		
	
	}

	@When("^user click the Course Connectors navigation panel and click New Course Connector button$")
	public void user_click_the_Course_Connectors_navigation_panel_and_click_New_Course_Connector_button() throws Throwable {
		PageFactory.initElements(driver, pageObjects.Deploy.class);
		pageObjects.Deploy.CourseConnectorsNavLink.click();
		pageObjects.Deploy.NewCourseConnectorBtn.click();	
	 
	}

	@When("^user enters LMS name, LMS Type, LMS SubType$")
	public void user_enters_LMS_name_LMS_Type_LMS_SubType(DataTable ConTable) throws Throwable {
		List<List<String>> ConnectorTable = ConTable.raw();
		lmsname = ConnectorTable.get(1).get(0);
		lmstype = ConnectorTable.get(1).get(1);
		lmssubtype = ConnectorTable.get(1).get(2);
		
		PageFactory.initElements(driver, pageObjects.CourseConnectors.class);
		
		pageObjects.CourseConnectors.LmsNameTxtBox.sendKeys(lmsname);
		pageObjects.CourseConnectors.LmsTypeDropDown.sendKeys(lmstype);
		pageObjects.CourseConnectors.LmsSubTypeDropDown.sendKeys(lmssubtype);
		
	}

	@When("^Click LMS details panel and enters LMS URL, Authentication Token$")
	public void click_LMS_details_panel_and_enters_LMS_URL_Authentication_Token(DataTable lmsTable) throws Throwable {
		
		List<List<String>> LMS = lmsTable.raw();
		lmsURL = LMS.get(1).get(0);
		lmsAuthenticationToken = LMS.get(1).get(1);
		
		PageFactory.initElements(driver, pageObjects.CourseConnectors.class);
	//	pageObjects.CourseConnectors.LmsDetailslink.click();
	//	Thread.sleep(2000);
		pageObjects.CourseConnectors.LmsUrlTxtBox.sendKeys(lmsURL);
		Thread.sleep(1000);
		pageObjects.CourseConnectors.AuthenticationTokenTxtBox.clear();
		pageObjects.CourseConnectors.AuthenticationTokenTxtBox.sendKeys(lmsAuthenticationToken);
	
				
	
	}

	@When("^click Synchronization Option panel and select Content Info and Content Files options$")
	
	public void click_Synchronization_Option_panel_and_select_Content_Info_and_Content_Files_options(DataTable SC) throws Throwable {
		
		List<List<String>> Sync = SC.raw();
		SCContentInfo = Sync.get(1).get(0);
		SCContentFiles = Sync.get(1).get(1);
		
		PageFactory.initElements(driver, pageObjects.CourseConnectors.class);
		pageObjects.CourseConnectors.SynOptionlink.click();
		pageObjects.CourseConnectors.ContentInfoDropDown.sendKeys(SCContentInfo);
		pageObjects.CourseConnectors.ContentFilesDropDown.sendKeys(SCContentFiles);
	}

	@When("^click the Create Button$")
	public void click_the_Create_Button() throws Throwable {
		PageFactory.initElements(driver, pageObjects.CourseConnectors.class);
		pageObjects.CourseConnectors.LmsCreateBtn.click();
	
	}

	@Then("^New Course Connector should be deployed$")
	public void new_Course_Connector_should_be_deployed() throws Throwable {
		
		String alertmsg = pageObjects.Organization.Confirmationmsg.getText();
		Assert.assertTrue(alertmsg.contains("The Course Connector was created"));
		System.out.println("'" + lmsname + "' Course Connector was created Successfully");
	  
	}

	

}
