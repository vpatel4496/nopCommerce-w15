$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Test computer page",
  "description": "\r\nAs user I want to register on Nopcommerce Website",
  "id": "test-computer-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4115497500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "test-computer-page;user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify Computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 88809500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 543045300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyComputerText()"
});
formatter.result({
  "duration": 42341900,
  "status": "passed"
});
formatter.after({
  "duration": 645671100,
  "status": "passed"
});
formatter.before({
  "duration": 2430899600,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "test-computer-page;user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktop link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I verify Desktop text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 469051400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 430598500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyDesktopText()"
});
formatter.result({
  "duration": 26215700,
  "status": "passed"
});
formatter.after({
  "duration": 618869400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "DATA SET",
  "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2596032200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "DATA SET",
  "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 79000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 488948400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 428539500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 839596400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 76874000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 62548500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 40197500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 36015100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 62719200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 46952300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 349653500,
  "status": "passed"
});
formatter.after({
  "duration": 630842700,
  "status": "passed"
});
formatter.before({
  "duration": 2499710900,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "DATA SET",
  "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 475688000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 432383200,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 712871700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 44390600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 59759800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 43166700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 33757500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 71805100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 46583100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 289930500,
  "status": "passed"
});
formatter.after({
  "duration": 629993800,
  "status": "passed"
});
formatter.before({
  "duration": 2431752600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User Should Build You Own Computer And Add Them To Cart Successfully",
  "description": "DATA SET",
  "id": "test-computer-page;user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktop link",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 439523300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktopLink()"
});
formatter.result({
  "duration": 423458100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 745600600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 42285100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 63859800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 40418000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 41729700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 70962800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 43702700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 283198900,
  "status": "passed"
});
formatter.after({
  "duration": 640831000,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2462152600,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 463450700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 25201000,
  "status": "passed"
});
formatter.after({
  "duration": 601618700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errorMessage"
      ],
      "line": 18,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "sam4567@gmail.com",
        "Abcd1234",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "pat197@gmail.com",
        "Abcd1245",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "jayveeru@gmail.com",
        "Abc78912",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1841739900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"sam4567@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Abcd1234\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 610574500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sam4567@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 65714000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 59727300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 375659300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 24992100,
  "status": "passed"
});
formatter.after({
  "duration": 602619200,
  "status": "passed"
});
formatter.before({
  "duration": 1786750300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"pat197@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Abcd1245\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 71700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 412964700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pat197@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 65614000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1245",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 71069500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 391134700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25253100,
  "status": "passed"
});
formatter.after({
  "duration": 598856900,
  "status": "passed"
});
formatter.before({
  "duration": 1660693500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter email \"jayveeru@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter password \"Abc78912\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 12400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 404071400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jayveeru@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 59109400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc78912",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 63167100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 386341800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25343400,
  "status": "passed"
});
formatter.after({
  "duration": 614735500,
  "status": "passed"
});
formatter.before({
  "duration": 1835695200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanity,"
    },
    {
      "line": 23,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I enter email \"jack899@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should see log out link displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 493288200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jack899@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 61855500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 58851500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 641164700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeLogoutLinkDisplayed()"
});
formatter.result({
  "duration": 26077400,
  "status": "passed"
});
formatter.after({
  "duration": 614039600,
  "status": "passed"
});
formatter.before({
  "duration": 2443053800,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User Should LogOut SuccessFully",
  "description": "",
  "id": "login-test;user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "I enter email \"jack899@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter password \"Abcd1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I should see login link displayed \"\u003clogInLink\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 421037200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jack899@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 59613100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 64165200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 611778700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 599851500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003clogInLink\u003e",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldSeeLoginLinkDisplayed(String)"
});
formatter.result({
  "duration": 24044300,
  "status": "passed"
});
formatter.after({
  "duration": 631730000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register Test",
  "description": "As user I want to register on Nopcommerce Website",
  "id": "register-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2448703200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Navigate To Register Page Successfully",
  "description": "",
  "id": "register-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 543874400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 22656500,
  "status": "passed"
});
formatter.after({
  "duration": 584510400,
  "status": "passed"
});
formatter.before({
  "duration": 1819418800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify The FirstName LastName Email Password And ConfirmPassword Fields",
  "description": "",
  "id": "register-test;verify-the-firstname-lastname-email-password-and-confirmpassword-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on register link",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Click on Register button",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Verify the error message First name is required",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Verify the error message Last name is required",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify the error message Email is required",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Verify the error message Password is required",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify the error message Confirm Password is required",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 463752700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.clickOnRegisterButton()"
});
formatter.result({
  "duration": 60592600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheErrorMessageFirstNameIsRequired()"
});
formatter.result({
  "duration": 35991900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheErrorMessageLastNameIsRequired()"
});
formatter.result({
  "duration": 23768400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheErrorMessageEmailIsRequired()"
});
formatter.result({
  "duration": 21821100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheErrorMessagePasswordIsRequired()"
});
formatter.result({
  "duration": 23959900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheErrorMessageConfirmPasswordIsRequired()"
});
formatter.result({
  "duration": 22849700,
  "status": "passed"
});
formatter.after({
  "duration": 609559200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on register link",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select gender \"\u003cgender\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter firstname \"\u003cfirstname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter lastname \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select day \"\u003cday\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select month \"\u003cmonth\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select year \"\u003cyear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select confirmPassword \"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Registor button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the message Your registration completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;",
  "rows": [
    {
      "cells": [
        "gender",
        "firstname",
        "lastname",
        "day",
        "month",
        "year",
        "email",
        "password",
        "confirmpassword"
      ],
      "line": 32,
      "id": "register-test;verify-that-user-should-create-account-successfully;;1"
    },
    {
      "cells": [
        "Male",
        "Jay",
        "Cool",
        "23",
        "March",
        "1975",
        "jay50@gmail.com",
        "Abcd1234",
        "Abcd1234"
      ],
      "line": 33,
      "id": "register-test;verify-that-user-should-create-account-successfully;;2"
    },
    {
      "cells": [
        "Male",
        "Veeru",
        "Angry",
        "24",
        "April",
        "1976",
        "veeru60@gmail.com",
        "Sholay1975",
        "Sholay1975"
      ],
      "line": 34,
      "id": "register-test;verify-that-user-should-create-account-successfully;;3"
    },
    {
      "cells": [
        "Female",
        "Basanti",
        "Bakbak",
        "25",
        "May",
        "1977",
        "basanti80@gmail.com",
        "Dhanoo123",
        "Dhanoo123"
      ],
      "line": 35,
      "id": "register-test;verify-that-user-should-create-account-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2535715500,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on register link",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select gender \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter firstname \"Jay\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter lastname \"Cool\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select day \"23\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select month \"March\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select year \"1975\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select email \"jay50@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select password \"Abcd1234\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select confirmPassword \"Abcd1234\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Registor button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 438798200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 43668300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jay",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 63453700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cool",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 60600900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "23",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "duration": 63033300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "March",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "duration": 58008600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1975",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "duration": 83587500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jay50@gmail.com",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectEmail(String)"
});
formatter.result({
  "duration": 65595300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iSelectPassword(String)"
});
formatter.result({
  "duration": 58543100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abcd1234",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iSelectConfirmPassword(String)"
});
formatter.result({
  "duration": 53824600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegistorButton()"
});
formatter.result({
  "duration": 746178600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 25235700,
  "status": "passed"
});
formatter.after({
  "duration": 615383900,
  "status": "passed"
});
formatter.before({
  "duration": 1923022000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on register link",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select gender \"Male\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter firstname \"Veeru\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter lastname \"Angry\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select day \"24\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select month \"April\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select year \"1976\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select email \"veeru60@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select password \"Sholay1975\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select confirmPassword \"Sholay1975\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Registor button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 451483200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 48073800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Veeru",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 65000200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Angry",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 66595300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "24",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "duration": 64371200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "duration": 56430800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1976",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "duration": 76318900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "veeru60@gmail.com",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectEmail(String)"
});
formatter.result({
  "duration": 66771000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sholay1975",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iSelectPassword(String)"
});
formatter.result({
  "duration": 64175100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sholay1975",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iSelectConfirmPassword(String)"
});
formatter.result({
  "duration": 64636300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegistorButton()"
});
formatter.result({
  "duration": 836538000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 24731200,
  "status": "passed"
});
formatter.after({
  "duration": 611386800,
  "status": "passed"
});
formatter.before({
  "duration": 1774586700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify That User Should Create Account Successfully",
  "description": "",
  "id": "register-test;verify-that-user-should-create-account-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I click on register link",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I select gender \"Female\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter firstname \"Basanti\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter lastname \"Bakbak\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select day \"25\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select month \"May\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select year \"1977\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select email \"basanti80@gmail.com\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select password \"Dhanoo123\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select confirmPassword \"Dhanoo123\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on Registor button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "Verify the message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 448414700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 17
    }
  ],
  "location": "RegisterSteps.iSelectGender(String)"
});
formatter.result({
  "duration": 58733300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Basanti",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iEnterFirstname(String)"
});
formatter.result({
  "duration": 68508800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bakbak",
      "offset": 18
    }
  ],
  "location": "RegisterSteps.iEnterLastname(String)"
});
formatter.result({
  "duration": 62797300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 14
    }
  ],
  "location": "RegisterSteps.iSelectDay(String)"
});
formatter.result({
  "duration": 66984300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "May",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectMonth(String)"
});
formatter.result({
  "duration": 55895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1977",
      "offset": 15
    }
  ],
  "location": "RegisterSteps.iSelectYear(String)"
});
formatter.result({
  "duration": 88348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "basanti80@gmail.com",
      "offset": 16
    }
  ],
  "location": "RegisterSteps.iSelectEmail(String)"
});
formatter.result({
  "duration": 67880700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhanoo123",
      "offset": 19
    }
  ],
  "location": "RegisterSteps.iSelectPassword(String)"
});
formatter.result({
  "duration": 57233000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dhanoo123",
      "offset": 26
    }
  ],
  "location": "RegisterSteps.iSelectConfirmPassword(String)"
});
formatter.result({
  "duration": 59032900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegistorButton()"
});
formatter.result({
  "duration": 712804300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.verifyTheMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 22375700,
  "status": "passed"
});
formatter.after({
  "duration": 658194200,
  "status": "passed"
});
});