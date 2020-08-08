package pageObjects;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class UserManagement {

	
	@FindBy(xpath = "//a[@data-target='#usermanagementitems']")
	public static WebElement usermanagementTab;
	@FindBy(xpath = "//p[contains(text(),'Users')]")
	public static WebElement userTab;
	@FindBy(xpath = "//a[contains(text(),'New User')]")  
	public static WebElement newuserbtn;
	
	@FindBy(id="user_registration_email")
	public static WebElement userEmail;
	@FindBy(id="user_registration_userrole")
	public static WebElement userRole;	
	@FindBy(id="user_registration_firstname")
	public static WebElement userFirstName;	
	@FindBy(id="user_registration_lastname")
	public static WebElement userLastName;
	
	@FindBy(xpath="//tr[contains(@id,'user-permission-display-')]")
	public static List<WebElement> unilist;
	
	@FindBy(xpath="//*[contains(@id,'user-permission-display-')]/td[3]/div")
	public static List<WebElement> editbtns;
	

}
	
	
	
	
