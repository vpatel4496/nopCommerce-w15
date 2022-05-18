package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.LoginPage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegisterSteps {
    @When("^I click on register link$")
    public void iClickOnRegisterLink() {
        new RegisterPage().clickOnRegisterLink();
    }

    @Then("^I should navigate to register page successfully$")
    public void iShouldNavigateToRegisterPageSuccessfully() {
        String expectedText = "Register";
        String actualText = new RegisterPage().verifyRegisterText();
        Assert.assertEquals("Register", expectedText, actualText);
    }

    //--------------------------------------------------------------------------------------------------------//


    @When("^Click on Register button$")
    public void clickOnRegisterButton() {
        new RegisterPage().clickOnRegisterButton();
    }

    @And("^Verify the error message First name is required$")
    public void verifyTheErrorMessageFirstNameIsRequired() {
        String expectedError = "First name is required.";
        String actualError = new RegisterPage().verifyTheErrorFirstNameRequired();
        Assert.assertEquals(expectedError,actualError);
    }

    @And("^Verify the error message Last name is required$")
    public void verifyTheErrorMessageLastNameIsRequired() {
        String expectedError = "Last name is required.";
        String actualError = new RegisterPage().verifyTheErrorLastNameRequired();
        Assert.assertEquals(expectedError,actualError);
    }

    @And("^Verify the error message Email is required$")
    public void verifyTheErrorMessageEmailIsRequired() {
        String expectedError = "Email is required.";
        String actualError = new RegisterPage().verifyTheErrorEmailRequired();
        Assert.assertEquals(expectedError,actualError);
    }

    @And("^Verify the error message Password is required$")
    public void verifyTheErrorMessagePasswordIsRequired() {
        String expectedError = "Password is required.";
        String actualError = new RegisterPage().verifyTheErrorPasswordRequired();
        Assert.assertEquals(expectedError,actualError);
    }

    @Then("^Verify the error message Confirm Password is required$")
    public void verifyTheErrorMessageConfirmPasswordIsRequired() {
        String expectedError = "Password is required.";
        String actualError = new RegisterPage().verifyTheErrorConfirmPasswordRequired();
        Assert.assertEquals(expectedError,actualError);
    }

    //--------------------------------------------------------------------------------------------------------//


    @When("^I select gender \"([^\"]*)\"$")
    public void iSelectGender(String gender)  {
        new RegisterPage().selectGenderRadioButton(gender);}

    @And("^I enter firstname \"([^\"]*)\"$")
    public void iEnterFirstname(String firstname )  {
        new RegisterPage().enterFirstName(firstname);
    }

    @And("^I enter lastname \"([^\"]*)\"$")
    public void iEnterLastname(String lastname)  { new RegisterPage().enterLastName(lastname);}

    @And("^I select day \"([^\"]*)\"$")
    public void iSelectDay(String day)  { new RegisterPage().selectDayFromDropdown(day);}

    @And("^I select month \"([^\"]*)\"$")
    public void iSelectMonth(String month)  { new RegisterPage().selectMonthFromDropdown(month);}

    @And("^I select year \"([^\"]*)\"$")
    public void iSelectYear(String year)  { new RegisterPage().selectYearFromDropdown(year);}

    @And("^I select email \"([^\"]*)\"$")
    public void iSelectEmail(String email)  {new LoginPage().enterEmail(email);}

    @And("^I select password \"([^\"]*)\"$")
    public void iSelectPassword(String password)  { new LoginPage().enterPassword(password);}

    @And("^I select confirmPassword \"([^\"]*)\"$")
    public void iSelectConfirmPassword(String confirmPassword)  { new RegisterPage().enterConfirmPassword(confirmPassword);}

    @And("^I click on Registor button$")
    public void iClickOnRegistorButton() { new RegisterPage().clickOnRegisterButton();}


    @Then("^Verify the message Your registration completed$")
    public void verifyTheMessageYourRegistrationCompleted() {
        String expectedMessage = "Your registration completed";
        String actualMessage = new RegisterPage().verifyRegistrationMessage();
        Assert.assertEquals("Your registration completed",expectedMessage,actualMessage);
    }
}


