package stepDefinition;

import java.util.List;
import stepDefinition.NewOrganizationCreation;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class NewUser extends BaseClass{

	String usrEmail = null;
	String usrType = null;
	String usrFirstName = null;
	String usrLastName = null;
	String Org = null;
	String usrrole = null;
	
	@Given("^user navigate to User managent screen$")
	public void user_navigate_to_User_managent_screen() throws Throwable {
		
		PageFactory.initElements(driver, pageObjects.UserManagement.class);
		pageObjects.UserManagement.usermanagementTab.click();
		pageObjects.UserManagement.userTab.click();
		pageObjects.UserManagement.newuserbtn.click();
	
	}

		@When("^user enters details of emailaddress, userType,FirstName and Lastname$")
		public void user_enters_details_of_emailaddress_userType_FirstName_and_Lastname(DataTable table) throws Throwable {
			
		List<List<String>> data = table.raw();
		usrEmail = data.get(1).get(0);
		usrType = data.get(1).get(1);
		usrFirstName = data.get(1).get(2);
		usrLastName = data.get(1).get(3);
	
		PageFactory.initElements(driver, pageObjects.UserManagement.class);
		pageObjects.UserManagement.userEmail.sendKeys(usrEmail);
		pageObjects.UserManagement.userRole.sendKeys(usrType);
		pageObjects.UserManagement.userFirstName.sendKeys(usrFirstName);
		pageObjects.UserManagement.userLastName.sendKeys(usrLastName);
		
		
	}

	@When("^assign \"([^\"]*)\" with \"([^\"]*)\" permission role then click update and create buttons$")
	public void assign_with_permission_role_then_click_update_and_create_buttons(String org, String userrole) throws Throwable {
		
		PageFactory.initElements(driver, pageObjects.UserManagement.class);
	//	String uni = stepDefinition.NewOrganizationCreation.uniname;
		Org = org;
		usrrole = userrole;
	//	System.out.println("Oraganization Name :" + org); 
		for (WebElement uniname : pageObjects.UserManagement.unilist ) {
			String university = uniname.getText();
		//	System.out.println(university);
			if (university.contains(Org)) {
				String idprefix = uniname.getAttribute("id");
				
				 driver.findElement(By.xpath("//*[@id='"+idprefix+"']/td[3]/div")).click();
				 switch (usrrole) {
				 case "Owner"			 : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[1]/label")).click(); break;
				 case "Edit" 			 : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[2]/label")).click(); break;
				 case "Publish"			 : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[3]/label")).click(); break;
				 case "Deploy"			 : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[4]/label")).click(); break;
				 case "Manage Language"  : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[5]/label")).click(); break;
				 default 				 : driver.findElement(By.xpath("//*[@id='modal-edit-perms']/div/div[2]/div[2]/div[1]/div/div[3]/div[2]/div[6]/label")).click();	 
				 }
				 
					driver.findElement(By.id("updateBtn")).click();
					driver.findElement(By.id("btnUserSubmit")).click();
	      	
		
				 break;
		
			}
			
			
		}
		
	
	}

@Then("^user able to create new user$")
public void user_able_to_create_new_user() throws Throwable {
	String alertmsg = pageObjects.Organization.Confirmationmsg.getText();
//	Assert.assertTrue(alertmsg.contains("The user was created"));
	if (alertmsg.contains("The user was created")) {
	System.out.println("'" + usrFirstName + " " + usrLastName + "' user was created Successfully and assiged to '"+ Org + "'  University " + "with '" + usrrole + "' permission"); }
	else if (alertmsg.contains("We were unable to create the user"))
	System.out.println( "Unable to create the user since " + driver.findElement(By.xpath("//p[@class='help-block']")).getText());
	
	driver.findElement(By.id("user-menu-drop")).click();
	driver.findElement(By.xpath("//*[@id='user-menu']/ul/li[8]/a[contains(text(),' Logout')]")).click();

	}

}
