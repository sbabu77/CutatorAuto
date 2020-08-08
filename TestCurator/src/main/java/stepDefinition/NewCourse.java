package stepDefinition;

import java.util.List;

//import org.openqa.selenium.By;
//import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import appUtils.BaseClass;
import cucumber.api.DataTable;
//import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
//import io.cucumber.datatable.DataTable;
import junit.framework.Assert;

public class NewCourse extends BaseClass{

	String cname = null;
	String creference = null;
	String cuniversity = null;
	String cschool = null;
	String cdesc = null;


	@When("^click the Create link and New Course button$")
	public void click_the_Create_link_and_New_Course_button() throws Throwable {

		PageFactory.initElements(driver, pageObjects.CreateCourse.class);
		pageObjects.CreateCourse.CreateCourselink.click();
		pageObjects.CreateCourse.newCoursebtn.click();

	}


	@When("^enters course details like course name, course reference, university, school and description$")
	public void enters_course_details_like_course_name_course_reference_university_school_and_description(DataTable coursetable) throws Throwable {

		List<List<String>> crsdata = coursetable.raw();
		cname = crsdata.get(1).get(0);
		creference = crsdata.get(1).get(1);
		cuniversity = crsdata.get(1).get(2);
		cschool = crsdata.get(1).get(3);
		cdesc = crsdata.get(1).get(4);		

		pageObjects.CreateCourse.CourseName.sendKeys(cname);
		pageObjects.CreateCourse.CourseReference.sendKeys(creference);
		pageObjects.CreateCourse.CourseUniversity.click();
		pageObjects.CreateCourse.CourseUniversity.sendKeys(cuniversity);
		pageObjects.CreateCourse.CourseSchool.click();
		pageObjects.CreateCourse.CourseSchool.sendKeys(cschool);
		pageObjects.CreateCourse.CourseDesc.sendKeys(cdesc);
		pageObjects.CreateCourse.CreateNewCoursebtn.click();

	}

	@Then("^course should be created successfully$")
	public void course_should_be_created_successfully() throws Throwable {

		String alertmsg = pageObjects.Organization.Confirmationmsg.getText();
		Assert.assertTrue(alertmsg.contains("The course was created"));
		System.out.println("'" + cname + "' Course was created Successfully");

	}
}	
