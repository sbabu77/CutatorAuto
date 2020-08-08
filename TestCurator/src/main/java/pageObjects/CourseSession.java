package pageObjects;

//import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CourseSession {
	
	@FindBy(xpath = "//div[contains(text(),'Course Sessions')]")
	public static WebElement CourseSessionlink;

	@FindBy(xpath = "//a[contains(text(),'Course Master')]")
	public static WebElement CourseMasterlink;
	
	@FindBy(xpath = "//i[contains(@class,'e-LC-text')]")
	public static WebElement CourseTextlink;
	
	@FindBy(xpath = "//i[contains(@class,'e-LC-image')]")
	public static WebElement CourseImageIcon;
	
	@FindBy(id = "learning_object_name")
	public static WebElement CourseTitlelink;
	
	@FindBy(id = "file-picker-btn")
	public static WebElement ImageUploadbtn;
	
	
	@FindBy(xpath = "//iframe[contains(@class,'cke_wysiwyg_frame')]")
	public static WebElement iframebody;
	
	@FindBy(xpath = "//body[contains(@class,'cke_editable_themed')]/p")
	public static WebElement CourseBodyText;
	
	@FindBy(xpath = "//button[@id='saveBtn']")
	public static WebElement CourseSaveBtn;
	
	@FindBy(xpath = "//li[contains(@class,'bp-hide-lg-xl-up')]//a[contains(@class,'init-tooltip')]")
	public static WebElement CourseLevelPublishBtn;
	
	@FindBy(id = "publishDropBtn")
	public static WebElement CourseLevelPublishDropBtn;
	
	@FindBy(xpath = "//button[@id = 'pub-init-btn'][text()='Yes']")
	public static WebElement PublishLessionYesconfirmationBtn;
	
	@FindBy(xpath = "//div[@id='pub-success']//a[contains(text(),'Done')]")
	public static WebElement PublishSuccssDoneBtn;
	
	@FindBy(xpath = "//div[@id='timeline-mainmenu']/div[1]")
	public static WebElement lesconfirmationmsg;	
	
	
	}
