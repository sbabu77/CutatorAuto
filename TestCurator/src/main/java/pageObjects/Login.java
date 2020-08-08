package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Login {

	@FindBy(id="username")
	public static WebElement loginusername;
	@FindBy(id="password")
	public static WebElement loginpwd;
	@FindBy(id="_submit")
	public static WebElement loginsubmitbtn;
	
}
