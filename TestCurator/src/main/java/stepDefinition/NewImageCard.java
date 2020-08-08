package stepDefinition;

import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;
import java.util.List;

//import org.openqa.selenium.Keys;
import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.When;

public class NewImageCard extends BaseClass{
	String cardtitle;
	String imgpath;
	
	@When("^User click the Image content type icon button and enter Card Title and Image path in the new card window$")
	public void user_click_the_Image_content_type_icon_button_and_enter_Card_Title_and_Image_path_in_the_new_card_window(DataTable imageTable) throws Throwable {
	 
		List<List<String>> carddata = imageTable.raw();
		cardtitle = carddata.get(1).get(0);
		imgpath = carddata.get(1).get(1);

		PageFactory.initElements(driver, pageObjects.CourseSession.class);
		
//		System.out.println("Image path  :" +imgpath);
		
		try {
			pageObjects.CourseSession.CourseImageIcon.click();
		}
		catch(org.openqa.selenium.StaleElementReferenceException ex)
		{			
			pageObjects.CourseSession.CourseImageIcon.click();
		}			
		
		pageObjects.CourseSession.CourseTitlelink.clear();
		pageObjects.CourseSession.CourseTitlelink.sendKeys(cardtitle);
		pageObjects.CourseSession.ImageUploadbtn.click();
		
		Thread.sleep(2000);
	// code for enter path into File window
		Robot robo = new Robot();
		// Copy file path into Clipboard
		StringSelection str = new StringSelection (imgpath);
		Toolkit.getDefaultToolkit().getSystemClipboard().setContents(str, null);
		
		// Press Ctrl +V
		robo.keyPress(KeyEvent.VK_CONTROL);
		robo.keyPress(KeyEvent.VK_V);
		
		//Release Ctrl + V
		robo.keyRelease(KeyEvent.VK_CONTROL);
		robo.keyRelease(KeyEvent.VK_V);
		
		robo.keyPress(KeyEvent.VK_ENTER);
		robo.keyRelease(KeyEvent.VK_ENTER);
		
		Thread.sleep(3000);
		
	}

}
