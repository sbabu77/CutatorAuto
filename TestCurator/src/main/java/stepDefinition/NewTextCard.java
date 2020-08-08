package stepDefinition;

import java.util.List;

import org.openqa.selenium.Keys;
import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class NewTextCard extends BaseClass {
	
	static String cardtitle;
	static String carddesc;
	
	@When("^user click the Course Sessions link and then click the Course Master link$")
	public void user_click_the_Course_Sessions_link_and_then_click_the_Course_Master_link() throws Throwable {
	
		PageFactory.initElements(driver, pageObjects.CourseSession.class);
		pageObjects.CourseSession.CourseSessionlink.click();
		pageObjects.CourseSession.CourseMasterlink.click();
	}
	@When("^click the Text content type icon button and enter Card Title and Card Description in the new card window$")
	public void click_the_Text_content_type_icon_button_and_enter_Card_Title_and_Card_Description_in_the_new_card_window(DataTable cardTable) throws Throwable {
	
		List<List<String>> carddata = cardTable.raw();
		cardtitle = carddata.get(1).get(0);
		carddesc = carddata.get(1).get(1);
		
		PageFactory.initElements(driver, pageObjects.CourseSession.class);
		pageObjects.CourseSession.CourseTextlink.click();
		pageObjects.CourseSession.CourseTitlelink.clear();
		pageObjects.CourseSession.CourseTitlelink.sendKeys(cardtitle);
		

		Thread.sleep(3000);

		driver.switchTo().frame(pageObjects.CourseSession.iframebody);

	    pageObjects.CourseSession.CourseBodyText.sendKeys(carddesc);
		driver.switchTo().defaultContent();

	}


		

	@When("^click the save button$")
	public void click_the_save_button() throws Throwable {
//		PageFactory.initElements(driver, pageObjects.CourseSession.class);
//		pageObjects.CourseSession.CourseSaveBtn.click();
//		Thread.sleep(2000);
		savebtn();
	}
	


@Then("^user should able to save the card$")
public void user_should_able_to_save_the_card() throws Throwable {
//	PageFactory.initElements(driver, pageObjects.CourseSession.class);
//	String lcm = pageObjects.CourseSession.lesconfirmationmsg.getText();
	
//	if (lcm.contains("The learning object was created"))
//	{
//		System.out.println("'"+ cardtitle + "' The Card was created");
		                      
//	}
//	else 
//	{ System.out.println("The Card was NOT created");}
		
	savecard();
}
}

