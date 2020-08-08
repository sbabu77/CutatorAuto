package appUtils;


import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.PageFactory;

//import io.cucumber.datatable.DataTable;

import cucumber.api.DataTable;




public class BaseClass {

	public static WebDriver driver;
	public static Properties properties = null;
//	public static String cardtitle;
	
	
	public static Properties loadpropertyfile() throws IOException {
		FileInputStream fip = new FileInputStream("global.Properties");
		properties = new Properties();
		properties.load(fip);
		return properties;
	}
	
	public static WebDriver initializeDriver() throws IOException, InterruptedException {
	
		loadpropertyfile();
		String browser = properties.getProperty("browser");
		String url = properties.getProperty("testurl");
		String driverlocation = properties.getProperty("driverlocation");
		
		
		if (browser.equalsIgnoreCase("chrome"))
		{
		//	System.setProperty("webdriver.chrome.silentOutput", "true");
			System.setProperty("webdriver.chrome.driver", driverlocation);
			driver = new ChromeDriver();
			ClearBrowserCache();
		} else if (browser.equalsIgnoreCase("Firefox")) {
			
			System.setProperty("webdriver.gecko.driver", driverlocation);
			driver = new FirefoxDriver();
		}

		driver.manage().window().maximize();
		driver.get(url);
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		return driver;

	}
	
public static void login(DataTable Credential) {
	
	List<Map<String,String>> credential = Credential.asMaps(String.class, String.class);
 	String uName = credential.get(0).get("username");
 	String pwd = credential.get(0).get("password");
 	
	PageFactory.initElements(driver, pageObjects.Login.class);
	pageObjects.Login.loginusername.sendKeys(uName);
	pageObjects.Login.loginpwd.sendKeys(pwd);
	pageObjects.Login.loginsubmitbtn.click();
}

public static void ClearBrowserCache() throws InterruptedException
{
	driver.manage().deleteAllCookies();

	Thread.sleep(1000);
}
	
public static void tearDown() {
	driver.close();
}

public static void savebtn() throws InterruptedException {
	PageFactory.initElements(driver, pageObjects.CourseSession.class);
	pageObjects.CourseSession.CourseSaveBtn.click();
	Thread.sleep(3000);	
}

public static void savecard() {
	PageFactory.initElements(driver, pageObjects.CourseSession.class);
	String lcm = pageObjects.CourseSession.lesconfirmationmsg.getText();
	
	if (lcm.contains("The learning object was created"))
	{
		System.out.println("The Card was created");
		                      
	}
	else 
	{ System.out.println("The Card was NOT created");}
}
}

	

