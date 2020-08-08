$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("NewOrganizantionCreation.feature");
formatter.feature({
  "line": 2,
  "name": "As a superadmin user to create new organizantion",
  "description": "",
  "id": "as-a-superadmin-user-to-create-new-organizantion",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SingleOrg"
    },
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "user login into Curator application and create new organizantion",
  "description": "",
  "id": "as-a-superadmin-user-to-create-new-organizantion;user-login-into-curator-application-and-create-new-organizantion",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user launch the browser with Curator application URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters username and password and then click the submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "test@curatorsolutions.com",
        "Test$Pwd123"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click the Organization link and enters Name, Type, WebSite, Acronym and Lanugage in the institution page",
  "rows": [
    {
      "cells": [
        "Name",
        "Type",
        "WebSite",
        "Acronym",
        "Language"
      ],
      "line": 9
    },
    {
      "cells": [
        "MGR University",
        "Higher Education",
        "https://https://MGRuniversity.ac.in/new",
        "MGR",
        "English"
      ],
      "line": 10
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user should able to create organization successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewOrganizationCreation.user_launch_the_browser_with_Curator_application_URL()"
});
formatter.result({
  "duration": 8323167100,
  "status": "passed"
});
formatter.match({
  "location": "NewOrganizationCreation.user_enters_username_and_password_and_then_click_the_submit_button(DataTable)"
});
formatter.result({
  "duration": 3514345700,
  "status": "passed"
});
formatter.match({
  "location": "NewOrganizationCreation.user_click_the_Organization_link_and_enters_Name_Type_WebSite_Acronym_and_Lanugage_in_the_institution_page(DataTable)"
});
formatter.result({
  "duration": 159921500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003cp\u003e could not be scrolled into view\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.NewOrganizationCreation.user_click_the_Organization_link_and_enters_Name_Type_WebSite_Acronym_and_Lanugage_in_the_institution_page(NewOrganizationCreation.java:65)\r\n\tat ✽.And user click the Organization link and enters Name, Type, WebSite, Acronym and Lanugage in the institution page(NewOrganizantionCreation.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewOrganizationCreation.user_should_able_to_create_organization_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("NewUser.feature");
formatter.feature({
  "line": 2,
  "name": "As a admin user able to create user",
  "description": "",
  "id": "as-a-admin-user-able-to-create-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewUser"
    },
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Admin user able to create new user in user management screen",
  "description": "",
  "id": "as-a-admin-user-able-to-create-user;admin-user-able-to-create-new-user-in-user-management-screen",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigate to User managent screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user enters details of emailaddress, userType,FirstName and Lastname",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "userType",
        "FirstName",
        "LastName"
      ],
      "line": 6
    },
    {
      "cells": [
        "MGRuniversityedit@curatorsolution.com",
        "User",
        "MGRUNI First Name",
        "Last Name"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "assign \"MGR University\" with \"Owner\" permission role then click update and create buttons",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user able to create new user",
  "keyword": "Then "
});
formatter.match({
  "location": "NewUser.user_navigate_to_User_managent_screen()"
});
formatter.result({
  "duration": 4474327700,
  "status": "passed"
});
formatter.match({
  "location": "NewUser.user_enters_details_of_emailaddress_userType_FirstName_and_Lastname(DataTable)"
});
formatter.result({
  "duration": 804498500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MGR University",
      "offset": 8
    },
    {
      "val": "Owner",
      "offset": 30
    }
  ],
  "location": "NewUser.assign_with_permission_role_then_click_update_and_create_buttons(String,String)"
});
formatter.result({
  "duration": 2059506900,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: Element \u003cbutton id\u003d\"btnUserSubmit\" class\u003d\"btn btn-create-module\" type\u003d\"submit\"\u003e is not clickable at point (417,731) because another element \u003cdiv class\u003d\"modal-backdrop fade\"\u003e obscures it\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepDefinition.NewUser.assign_with_permission_role_then_click_update_and_create_buttons(NewUser.java:80)\r\n\tat ✽.And assign \"MGR University\" with \"Owner\" permission role then click update and create buttons(NewUser.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewUser.user_able_to_create_new_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("NewzCourse.feature");
formatter.feature({
  "line": 2,
  "name": "As a owner of the university able to create new course",
  "description": "",
  "id": "as-a-owner-of-the-university-able-to-create-new-course",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@NewCourse"
    },
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Owner of the University able to create new course",
  "description": "",
  "id": "as-a-owner-of-the-university-able-to-create-new-course;owner-of-the-university-able-to-create-new-course",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given user navigate to login page of Curator application"
    }
  ],
  "line": 5,
  "name": "user enters username and password and then click the submit button",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 6
    },
    {
      "cells": [
        "MGRuniversityedit@curatorsolution.com",
        "Password$1234"
      ],
      "line": 7
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "click the Create link and New Course button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enters course details like course name, course reference, university, school and description",
  "rows": [
    {
      "cells": [
        "course name",
        "course reference",
        "university",
        "school",
        "description"
      ],
      "line": 10
    },
    {
      "cells": [
        "Selenium WebDriver",
        "Selenium08012020",
        "MGR University",
        "DEFAULT SCHOOL MGR",
        "Selenium WebDriver detailed notes"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "course should be created successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "NewOrganizationCreation.user_enters_username_and_password_and_then_click_the_submit_button(DataTable)"
});
formatter.result({
  "duration": 20016318600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: #username\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.sendKeys(Unknown Source)\r\n\tat appUtils.BaseClass.login(BaseClass.java:73)\r\n\tat stepDefinition.NewOrganizationCreation.user_enters_username_and_password_and_then_click_the_submit_button(NewOrganizationCreation.java:38)\r\n\tat ✽.When user enters username and password and then click the submit button(NewzCourse.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewCourse.click_the_Create_link_and_New_Course_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourse.enters_course_details_like_course_name_course_reference_university_school_and_description(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourse.course_should_be_created_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Owner of the University able to create new lession with Text Type",
  "description": "",
  "id": "as-a-owner-of-the-university-able-to-create-new-course;owner-of-the-university-able-to-create-new-lession-with-text-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "user click the Course Sessions link and then click the Course Master link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "click the Text content type icon button and enter Card Title and Card Description in the new card window",
  "rows": [
    {
      "cells": [
        "Card Title",
        "Card Description"
      ],
      "line": 17
    },
    {
      "cells": [
        "Text Card Title",
        "Text Card detailed description od body of the text. This section deals with detailed description of the course content. This is Course session card detailed description."
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click the save button",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 20,
      "value": "#Then user should able to publish the card"
    }
  ],
  "line": 21,
  "name": "user should able to save the card",
  "keyword": "Then "
});
formatter.match({
  "location": "NewTextCard.user_click_the_Course_Sessions_link_and_then_click_the_Course_Master_link()"
});
formatter.result({
  "duration": 20018360400,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //div[contains(text(),\u0027Course Sessions\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\u0027Course Sessions\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.NewTextCard.user_click_the_Course_Sessions_link_and_then_click_the_Course_Master_link(NewTextCard.java:22)\r\n\tat ✽.When user click the Course Sessions link and then click the Course Master link(NewzCourse.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTextCard.click_the_Text_content_type_icon_button_and_enter_Card_Title_and_Card_Description_in_the_new_card_window(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTextCard.click_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTextCard.user_should_able_to_save_the_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 23,
  "name": "Owner of the University able to create new lession with Image type",
  "description": "",
  "id": "as-a-owner-of-the-university-able-to-create-new-course;owner-of-the-university-able-to-create-new-lession-with-image-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "User click the Image content type icon button and enter Card Title and Image path in the new card window",
  "rows": [
    {
      "cells": [
        "Card Title",
        "Image path"
      ],
      "line": 25
    },
    {
      "cells": [
        "Image Card Title",
        "\"C:\\Users\\Visio\\Desktop\\Java.png\""
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click the save button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user should able to save the card",
  "keyword": "Then "
});
formatter.match({
  "location": "NewImageCard.user_click_the_Image_content_type_icon_button_and_enter_Card_Title_and_Image_path_in_the_new_card_window(DataTable)"
});
formatter.result({
  "duration": 20008048800,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //i[contains(@class,\u0027e-LC-image\u0027)]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003dxpath, value\u003d//i[contains(@class,\u0027e-LC-image\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.NewImageCard.user_click_the_Image_content_type_icon_button_and_enter_Card_Title_and_Image_path_in_the_new_card_window(NewImageCard.java:32)\r\n\tat ✽.When User click the Image content type icon button and enter Card Title and Image path in the new card window(NewzCourse.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewTextCard.click_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewTextCard.user_should_able_to_save_the_card()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "Owner of the University able to publish the cards",
  "description": "",
  "id": "as-a-owner-of-the-university-able-to-create-new-course;owner-of-the-university-able-to-publish-the-cards",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "user click the course level publish button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "click publish confirm button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "Lesson should be published",
  "keyword": "Then "
});
formatter.match({
  "location": "PublishLessonCardLevel.user_click_the_course_level_publish_button()"
});
formatter.result({
  "duration": 11484396600,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to convert data to an object\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003dxpath, value\u003d//li[contains(@class,\u0027bp-hide-lg-xl-up\u0027)]//a[contains(@class,\u0027init-tooltip\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.PublishLessonCardLevel.user_click_the_course_level_publish_button(PublishLessonCardLevel.java:18)\r\n\tat ✽.When user click the course level publish button(NewzCourse.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "PublishLessonCardLevel.click_publish_confirm_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "PublishLessonCardLevel.lesson_should_be_published()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("NewzDeploy.feature");
formatter.feature({
  "line": 2,
  "name": "As a admin user user able to Deploy the course in LMS",
  "description": "",
  "id": "as-a-admin-user-user-able-to-deploy-the-course-in-lms",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.scenario({
  "line": 3,
  "name": "Admin user is able to create New Connector of the LMS",
  "description": "",
  "id": "as-a-admin-user-user-able-to-deploy-the-course-in-lms;admin-user-is-able-to-create-new-connector-of-the-lms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user navigate to Deploy screen",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click the Course Connectors navigation panel and click New Course Connector button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user enters LMS name, LMS Type, LMS SubType",
  "rows": [
    {
      "cells": [
        "LMS Name",
        "LMS Type",
        "LMS SubType"
      ],
      "line": 7
    },
    {
      "cells": [
        "MGR LMS Course",
        "Canvas",
        "Standard"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click LMS details panel and enters LMS URL, Authentication Token",
  "rows": [
    {
      "cells": [
        "LMS URL",
        "Authentication Token"
      ],
      "line": 10
    },
    {
      "cells": [
        "https://canvas.instructure.com",
        "7~MLNJC35FLj4kKdK7mVBkCXKGeLELUvzutGEGiw7edBhKXFN122aVqz1fIJBJ1Z3h"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click Synchronization Option panel and select Content Info and Content Files options",
  "rows": [
    {
      "cells": [
        "Content Info",
        "Content Files"
      ],
      "line": 13
    },
    {
      "cells": [
        "Curator to LMS",
        "Curator to LMS"
      ],
      "line": 14
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click the Create Button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "New Course Connector should be deployed",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCourseConnector.user_navigate_to_Deploy_screen()"
});
formatter.result({
  "duration": 27357800,
  "error_message": "org.openqa.selenium.NoSuchWindowException: Browsing context has been discarded\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@class,\u0027nav-top-menu\u0027)][contains(text(),\u0027Deploy\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.NewCourseConnector.user_navigate_to_Deploy_screen(NewCourseConnector.java:27)\r\n\tat ✽.Given user navigate to Deploy screen(NewzDeploy.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewCourseConnector.user_click_the_Course_Connectors_navigation_panel_and_click_New_Course_Connector_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseConnector.user_enters_LMS_name_LMS_Type_LMS_SubType(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseConnector.click_LMS_details_panel_and_enters_LMS_URL_Authentication_Token(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseConnector.click_Synchronization_Option_panel_and_select_Content_Info_and_Content_Files_options(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseConnector.click_the_Create_Button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseConnector.new_Course_Connector_should_be_deployed()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Admin user is able to create New Deployment of the course in LMS",
  "description": "",
  "id": "as-a-admin-user-user-able-to-deploy-the-course-in-lms;admin-user-is-able-to-create-new-deployment-of-the-course-in-lms",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "user click the Course Deployments navigation panel and click New Course Deployment button",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "select Course name and Course Connectors from the drop down",
  "rows": [
    {
      "cells": [
        "Course Name",
        "Course Connectors"
      ],
      "line": 21
    },
    {
      "cells": [
        "Selenium WebDriver",
        "MGR LMS Course"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select course session check box and click the Destination lookup search icon",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Select destination, language and click the Add Set Up and select Buttons",
  "rows": [
    {
      "cells": [
        "Destination",
        "Language"
      ],
      "line": 25
    },
    {
      "cells": [
        "Canvas Course",
        "All"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "click the create button",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Course deployment should be created",
  "keyword": "Then "
});
formatter.match({
  "location": "NewCourseDeployment.user_click_the_Course_Deployments_navigation_panel_and_click_New_Course_Deployment_button()"
});
formatter.result({
  "duration": 782479300,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-3QA2FCFN\u0027, ip: \u0027192.168.0.105\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 79.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200720193547, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 5608, moz:profile: C:\\Users\\Visio\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f16a5585-0399-46f3-9d46-45d1fd4903ae\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(@class,\u0027nav-link\u0027)]/p[contains(text(),\u0027Course Deployments\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\r\n\tat stepDefinition.NewCourseDeployment.user_click_the_Course_Deployments_navigation_panel_and_click_New_Course_Deployment_button(NewCourseDeployment.java:22)\r\n\tat ✽.When user click the Course Deployments navigation panel and click New Course Deployment button(NewzDeploy.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewCourseDeployment.select_Course_name_and_Course_Connectors_from_the_drop_down(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseDeployment.select_course_session_check_box_and_click_the_Destination_lookup_search_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseDeployment.select_destination_language_and_click_the_Add_Set_Up_and_select_Buttons(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseDeployment.click_the_create_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "NewCourseDeployment.course_deployment_should_be_created()"
});
formatter.result({
  "status": "skipped"
});
});