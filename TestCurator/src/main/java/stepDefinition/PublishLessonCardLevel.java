package stepDefinition;

import org.openqa.selenium.support.PageFactory;
import stepDefinition.NewTextCard;

import appUtils.BaseClass;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PublishLessonCardLevel extends BaseClass{
	
	
	@When("^user click the course level publish button$")
	public void user_click_the_course_level_publish_button() throws Throwable {
		
		PageFactory.initElements(driver, pageObjects.CourseSession.class);
		try {
			pageObjects.CourseSession.CourseLevelPublishBtn.click();
		}
		catch(org.openqa.selenium.StaleElementReferenceException ex)
		{			
				pageObjects.CourseSession.CourseLevelPublishBtn.click();
		}			
	pageObjects.CourseSession.CourseLevelPublishDropBtn.click();
	  
	}

	@When("^click publish confirm button$")
	public void click_publish_confirm_button() throws Throwable {
		
		pageObjects.CourseSession.PublishLessionYesconfirmationBtn.click();
	
	}

	@Then("^Lesson should be published$")
	public void lesson_should_be_published() throws Throwable {
		
		pageObjects.CourseSession.PublishSuccssDoneBtn.click();
	  	System.out.println("Card(s) are published");
	   
	}
	
	

}
