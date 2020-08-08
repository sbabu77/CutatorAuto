@NewCourse @SmokeTest
Feature: As a owner of the university able to create new course
Scenario: Owner of the University able to create new course
#Given user navigate to login page of Curator application
When user enters username and password and then click the submit button
|username|password|
|MGRuniversityedit@curatorsolution.com|Password$1234|
And click the Create link and New Course button
And enters course details like course name, course reference, university, school and description
|course name|course reference|university|school|description|
|Selenium WebDriver|Selenium08012020|MGR University|DEFAULT SCHOOL MGR|Selenium WebDriver detailed notes|
Then course should be created successfully

Scenario: Owner of the University able to create new lession with Text Type
When user click the Course Sessions link and then click the Course Master link
And click the Text content type icon button and enter Card Title and Card Description in the new card window
|Card Title|Card Description|
|Text Card Title|Text Card detailed description od body of the text. This section deals with detailed description of the course content. This is Course session card detailed description.|
And click the save button
#Then user should able to publish the card 
Then user should able to save the card

Scenario: Owner of the University able to create new lession with Image type
When User click the Image content type icon button and enter Card Title and Image path in the new card window
|Card Title|Image path|
|Image Card Title|"C:\\Users\\Visio\\Desktop\\Java.png"|
And click the save button
Then user should able to save the card

Scenario: Owner of the University able to publish the cards
When user click the course level publish button
And click publish confirm button
Then Lesson should be published
