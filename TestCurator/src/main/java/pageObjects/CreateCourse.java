package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class CreateCourse {
	
	@FindBy(xpath = "//a[contains(text(),'Create')]")
	public static WebElement CreateCourselink;
	
	@FindBy(xpath = "//a[contains(text(),'New Course')]")
	public static WebElement newCoursebtn;
	
	@FindBy(id="course_name")
	public static WebElement CourseName;
	
	@FindBy(id="course_reference")
	public static WebElement CourseReference;
	
	@FindBy(id="course_description")
	public static WebElement CourseDesc;
	
	@FindBy(id="course_university_id")
	public static WebElement CourseUniversity;
	
	@FindBy(id="course_school_id")
	public static WebElement CourseSchool;
	
	@FindBy(id="btnCourseSubmit")
	public static WebElement CreateNewCoursebtn;
	
	
	
	

	
	
	

}
