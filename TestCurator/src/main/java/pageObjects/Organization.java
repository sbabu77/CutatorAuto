package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class Organization {
	
	@FindBy(xpath = "//a[@data-target='#organizationitems']")
	public static WebElement orgOrganizationmainTab;
	@FindBy(xpath = "//p[contains(text(),'Organizations')]")
	public static WebElement orgOranizantionSubTab;
	@FindBy(xpath = "//a[contains(text(),'New Institution')]")
	public static WebElement orgNewInstitutionBtn;
	@FindBy(id = "university_name")
	public static WebElement orgName;
	@FindBy(id="university_organizationType")
	public static WebElement orgType;
	@FindBy(id="university_url")
	public static WebElement orgWebsite;
	@FindBy(id="university_acronym")
	public static WebElement orgAcronym;
	@FindBy(id="university_defContentLang")
	public static WebElement orgDefaultContentLanguage;
	@FindBy(id="btnUniversitySubmit")
	public static WebElement orgCreateBtn;
	@FindBy(xpath = "//*[@id='layoutSidenav_content']/main/div[1]")
	public static WebElement Confirmationmsg;
	
	


}
