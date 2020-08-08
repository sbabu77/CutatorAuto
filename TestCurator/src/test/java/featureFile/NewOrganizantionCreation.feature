@SingleOrg @SmokeTest
Feature: As a superadmin user to create new organizantion
Scenario: user login into Curator application and create new organizantion
Given user launch the browser with Curator application URL
When user enters username and password and then click the submit button
|username|password|
|test@curatorsolutions.com|Test$Pwd123|
And user click the Organization link and enters Name, Type, WebSite, Acronym and Lanugage in the institution page
|Name|Type|WebSite|Acronym|Language| 
|MGR University|Higher Education|https://https://MGRuniversity.ac.in/new|MGR|English|
Then user should able to create organization successfully
