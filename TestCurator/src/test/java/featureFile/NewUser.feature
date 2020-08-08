@NewUser @SmokeTest
Feature: As a admin user able to create user
Scenario: Admin user able to create new user in user management screen
Given user navigate to User managent screen
When user enters details of emailaddress, userType,FirstName and Lastname
|emailaddress|userType|FirstName|LastName|
|MGRuniversityedit@curatorsolution.com|User|MGRUNI First Name|Last Name|
And assign "MGR University" with "Owner" permission role then click update and create buttons
Then user able to create new user