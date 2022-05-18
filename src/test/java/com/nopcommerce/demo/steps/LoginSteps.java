package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
       new LoginPage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully$")
    public void iShouldNavigateToLoginPageSuccessfully() {
        String expectedMessage = "Welcome, Please Sign In!";
        String actualMessage = new LoginPage().verifyWelComeText();
        Assert.assertEquals("Welcome, Please Sign In!",expectedMessage,actualMessage);
    }
    //------------------------------------------------------------------------------------------------------//


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String enterEmail)  { new LoginPage().enterEmail(enterEmail);}

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String enterPassword)  {
        new LoginPage().enterPassword(enterPassword);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }


    @Then("^I should see the error message \"([^\"]*)\"$")
    public void iShouldSeeTheErrorMessage(String errorMessage) {
        Assert.assertEquals("Error message displayed", errorMessage, new LoginPage().verifyErrorMessage());
    }

    //----------------------------------------------------------------------------------------------------//


    @And("^I click on logout button$")
    public void iClickOnLogoutButton() {
        new LoginPage().clickOnLogOutLink();
    }

    @Then("^I should see login link displayed \"([^\"]*)\"$")
    public void iShouldSeeLoginLinkDisplayed(String logInLink)  {
        String expected = "Log in";
        String actual = new LoginPage().verifyLogInLink();
        Assert.assertEquals(expected,actual);
    }

    @Then("^I should see log out link displayed$")
    public void iShouldSeeLogoutLinkDisplayed() {
        String expected = "Log out";
       Assert.assertEquals("log out",expected,new LoginPage().verifyLogOutLink());

    }


}
