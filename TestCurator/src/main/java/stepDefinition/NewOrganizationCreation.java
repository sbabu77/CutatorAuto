package stepDefinition;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NewOrganizationCreation extends BaseClass{
	  WebDriver driver;
	  static String uniname = null;
	  String unitype = null;
	  String uniwebsite = null;
	  String uniacronym = null;
	  String unilanguage = null;

@Given("^user launch the browser with Curator application URL$")
public void user_launch_the_browser_with_Curator_application_URL() throws Throwable {
	
	driver = initializeDriver();
}


@When("^user enters username and password and then click the submit button$")
public void user_enters_username_and_password_and_then_click_the_submit_button(DataTable logincredential) throws Throwable {
	
	login(logincredential);
 
// 	List<Map<String,String>> credential = logincredential.asMaps(String.class, String.class);
// 	String uName = credential.get(0).get("username");
// 	String pwd = credential.get(0).get("password");
 	
//	PageFactory.initElements(driver, pageObjects.Login.class);
//	pageObjects.Login.loginusername.sendKeys(uName);
//	pageObjects.Login.loginpwd.sendKeys(pwd);
//	pageObjects.Login.loginsubmitbtn.click();
}

@When("^user click the Organization link and enters Name, Type, WebSite, Acronym and Lanugage in the institution page$")
public void user_click_the_Organization_link_and_enters_Name_Type_WebSite_Acronym_and_Lanugage_in_the_institution_page(DataTable orgtable) throws Throwable {

	
	List<List<String>> orgdata = orgtable.raw();
	uniname = orgdata.get(1).get(0);
	unitype = orgdata.get(1).get(1);
	uniwebsite = orgdata.get(1).get(2);
	uniacronym = orgdata.get(1).get(3);
	unilanguage = orgdata.get(1).get(4);

  
  PageFactory.initElements(driver, pageObjects.Organization.class);

  pageObjects.Organization.orgOrganizationmainTab.click();
  pageObjects.Organization.orgOranizantionSubTab.click();

  pageObjects.Organization.orgNewInstitutionBtn.click();
  pageObjects.Organization.orgName.sendKeys(uniname);
  pageObjects.Organization.orgType.click();
  
  pageObjects.Organization.orgType.sendKeys(unitype);
  
  pageObjects.Organization.orgWebsite.sendKeys(uniwebsite);
  pageObjects.Organization.orgAcronym.sendKeys(uniacronym);
  pageObjects.Organization.orgDefaultContentLanguage.click(); 
 
  pageObjects.Organization.orgDefaultContentLanguage.sendKeys(unilanguage);
  
  pageObjects.Organization.orgCreateBtn.click();
  
  }
 
  @When("^user click the Organizantion link and enters \"([^\"]*)\", \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\" in the institution page$")
  public void user_click_the_Organizantion_link_and_enters_and_in_the_institution_page(String name, String type, String website, String acronym, String language) throws Throwable {
     
		
	  uniname = name; 
	  unitype = type; 
	  uniwebsite = website;
	  uniacronym = acronym; 
	  unilanguage = language;
		 
	  PageFactory.initElements(driver, pageObjects.Organization.class);
	  pageObjects.Organization.orgOrganizationmainTab.click();
	  pageObjects.Organization.orgOranizantionSubTab.click();
	  pageObjects.Organization.orgNewInstitutionBtn.click();
	  
	  pageObjects.Organization.orgName.sendKeys(uniname);
	  pageObjects.Organization.orgType.click();

	  pageObjects.Organization.orgType.sendKeys(unitype);
	  pageObjects.Organization.orgWebsite.sendKeys(uniwebsite);
	  pageObjects.Organization.orgAcronym.sendKeys(uniacronym);
	  pageObjects.Organization.orgDefaultContentLanguage.click();
	  pageObjects.Organization.orgDefaultContentLanguage.sendKeys(unilanguage);
	  
	  pageObjects.Organization.orgCreateBtn.click();
	  
  }

@Then("^user should able to create organization successfully$")
public void user_should_able_to_create_organization_successfully() throws Throwable {
	String alertmsg = pageObjects.Organization.Confirmationmsg.getText();
	Assert.assertTrue(alertmsg.contains("The university was created"));
	System.out.println("'" + uniname + "' university was created Successfully");
	
//	tearDown();
}

}
