package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CourseDeployments {
	
	
	@FindBy(xpath="//select[@id='new_deploy_course']/following-sibling::Span/span/span")
	public static WebElement CourseDeploymentDropDown;
	
	@FindBy(id="new_deploy_deployment_locations")
	public static WebElement CourseConnectorsDropDown;
	
	@FindBy(id="btnCourseSubmit")
	public static WebElement CourseDeploymentCreatebtn;
	
	@FindBy(xpath="//div[@class='checkbox']/label/span")
	public static WebElement CourseSessionChkBox;
	
	@FindBy(xpath="//tbody[@id='sessionTable']/tr/td[2]/div/span/i")
	public static WebElement Destinationlookupsearchicon;
	
	@FindBy(id="lmsitemsearchsession_lmsId")
	public static WebElement LMSLookupDestinationDropDown;
		
	@FindBy(id="lmsitemsearchsession_language")
	public static WebElement LMSLanguageDropDown;
	
	@FindBy(id="add-item")
	public static WebElement AddSetUpBtn;
		
	@FindBy(id="select-item")
	public static WebElement SelectBtn;
}
