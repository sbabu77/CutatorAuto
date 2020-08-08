@SmokeTest
Feature: As a admin user user able to Deploy the course in LMS
Scenario: Admin user is able to create New Connector of the LMS
Given user navigate to Deploy screen
When user click the Course Connectors navigation panel and click New Course Connector button
And user enters LMS name, LMS Type, LMS SubType
|LMS Name|LMS Type|LMS SubType|
|MGR LMS Course|Canvas|Standard|
And Click LMS details panel and enters LMS URL, Authentication Token
|LMS URL|Authentication Token|
|https://canvas.instructure.com|7~MLNJC35FLj4kKdK7mVBkCXKGeLELUvzutGEGiw7edBhKXFN122aVqz1fIJBJ1Z3h|                               
And click Synchronization Option panel and select Content Info and Content Files options
|Content Info |Content Files|
|Curator to LMS|Curator to LMS|
And click the Create Button
Then New Course Connector should be deployed

Scenario: Admin user is able to create New Deployment of the course in LMS
When user click the Course Deployments navigation panel and click New Course Deployment button
And select Course name and Course Connectors from the drop down
|Course Name|Course Connectors|
|Selenium WebDriver|MGR LMS Course|
And Select course session check box and click the Destination lookup search icon
And Select destination, language and click the Add Set Up and select Buttons
|Destination|Language|
|Canvas Course|All|
And click the create button
Then Course deployment should be created