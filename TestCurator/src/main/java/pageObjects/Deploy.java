package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Deploy {

	
	@FindBy(xpath="//a[contains(@class,'nav-top-menu')][contains(text(),'Deploy')]")
	public static WebElement Deploylink;
		
	@FindBy(xpath="//a[contains(@class,'nav-link')]/p[contains(text(),'Course Deployments')]")
	public static WebElement CourseDeploymentNavLink;
	
	@FindBy(xpath="//a[contains(@class,'nav-link')]/p[contains(text(),'Course Connectors')]")
	public static WebElement CourseConnectorsNavLink;
	
	@FindBy(xpath="//a[contains(@class,'btn-create-module')][contains(text(),'New Course Connector')]")
	public static WebElement NewCourseConnectorBtn;
	
	@FindBy(xpath="//a[contains(@class,'btn-create-module')][contains(text(),'New Course Deployment')]")
	public static WebElement NewCourseDeploymentBtn;
	
	
}
