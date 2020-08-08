@MultipleOrg
Feature: As a admin user needs to create multiple Organization
Scenario Outline: user login into Curator application and create new organizantions
Given user launch the browser with Curator application URL
When user enters username and password and then click the submit button
|username|password|
|test@curatorsolutions.com|Test$Pwd123|
And user click the Organizantion link and enters "<Name>", "<Type>","<WebSite>","<Acronym>" and "<Language>" in the institution page
Then user should able to create organization successfully
Examples:
|Name|Type|WebSite|Acronym|Language|
|MS University|Higher Education|https://www.msuniv.ac.in/|MSU|English|
|Anna University|Corporation|https://www.annauniv.edu/|AU|English|