package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CourseConnectors {
	
	@FindBy(id="lmsconfig_name")
	public static WebElement LmsNameTxtBox;
	
	
	@FindBy(id="lmsconfig_lmsType")
	public static WebElement LmsTypeDropDown;
	
	@FindBy(id="lmsconfig_lmsSubType")
	public static WebElement LmsSubTypeDropDown;
	
	@FindBy(xpath="//div[@id='urlPanel']/div[1]/h4/a")
	public static WebElement LmsDetailslink;
	
	@FindBy(id="lmsconfig_lmsUrl")
	public static WebElement LmsUrlTxtBox;
	
	@FindBy(id="lmsconfig_authentication")
	public static WebElement AuthenticationTokenTxtBox;
	
	@FindBy(xpath="//div[@id='optionPanel']/div[1]/h4/a")
	public static WebElement SynOptionlink;
	
	@FindBy(id="lmsconfig_syncCourseInfo")
	public static WebElement ContentInfoDropDown;
	
	@FindBy(id="lmsconfig_syncContentFiles")
	public static WebElement ContentFilesDropDown;
	
	@FindBy(id="btnLMSConfigSubmit")
	public static WebElement LmsCreateBtn;
	
}
