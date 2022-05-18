package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public RegisterPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Register')]")
    WebElement register;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Register')]")
    WebElement registerText;

    //---------------------------------------------------------------------------------------------------//

    @CacheLookup
    @FindBy(xpath = "//button[@id='register-button']")
    WebElement registerButton;

    @CacheLookup
    @FindBy(xpath = "//span[@id='FirstName-error']")
    WebElement firstNameError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='LastName-error']")
    WebElement lastNameError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Email-error']")
    WebElement emailError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='Password-error']")
    WebElement passwordError;

    @CacheLookup
    @FindBy(xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPasswordError;

    //---------------------------------------------------------------------------------------------------//

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-male']")
    WebElement genderMale;

    @CacheLookup
    @FindBy(xpath = "//input[@id='gender-female']")
    WebElement genderFemale;

    @CacheLookup
    @FindBy(xpath = "//input[@id='FirstName']")
    WebElement firstName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='LastName']")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[1]")
    WebElement selectDay;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[2]")
    WebElement selectMonth;

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/form[1]/div[1]/div[2]/div[4]/div[1]/select[3]")
    WebElement selectYear;

    @CacheLookup
    @FindBy(xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy(xpath = "//div[contains(text(),'Your registration completed')]")
    WebElement yourRegistrationCompleted;









    public void clickOnRegisterLink() {
        log.info("Click on register text" + register.getText());
        clickOnElement(register);}

    public String verifyRegisterText() {
        log.info(" Verify register text" + registerText.getText());
        return getTextFromElement(registerText);}

    //--------------------------------------------------------------------------------------------------------//

    public void clickOnRegisterButton() {
        log.info("Click on register button" + registerButton.getText());
        clickOnElement(registerButton);}

    public String verifyTheErrorFirstNameRequired() {
        log.info("Verify the error first name required" + firstName.getText());
        return getTextFromElement(firstNameError);}

    public String verifyTheErrorLastNameRequired() {
        log.info("Verify the error last name required" + lastNameError.getText());
        return getTextFromElement(lastNameError);}

    public String verifyTheErrorEmailRequired() {
        log.info("Verify the error email required" + emailError.getText());
        return getTextFromElement(emailError);
    }

    public String verifyTheErrorPasswordRequired() {
        log.info("Verify the error password required" + passwordError.getText());
        return getTextFromElement(passwordError);}

    public String verifyTheErrorConfirmPasswordRequired() {
        log.info("Verify the error confirmation password required" + confirmPasswordError.getText());
        return getTextFromElement(confirmPasswordError);
    }

    //----------------------------------------------------------------------------------------------------//

    public void selectGenderRadioButton(String gender) {
        log.info("select Radio Button" + genderMale.getText());
        if (gender.equalsIgnoreCase("Male")) {
            clickOnElement(genderMale);
        } else if (gender.equalsIgnoreCase("Female")) {
         log.info("select Radio Button" + genderFemale.getText());
            clickOnElement(genderFemale);
        } else {
            System.out.println("select one gender radio button");
        }

    }

    public void enterFirstName(String name) {
        log.info("Enter first: " + firstName.getText());
        sendTextToElement(firstName, name);}

    public void enterLastName(String lastname) {
        log.info("Enter: " + lastName.getText());
        sendTextToElement(lastName, lastname);}

    public void selectDayFromDropdown(String day) {
        log.info("Select day form dropdown: " + selectDay.getText());
        selectByValueFromDropDown(selectDay, day);}

    public void selectMonthFromDropdown(String month) {
        log.info("Select month form dropdown: " + selectMonth.getText());
        selectByVisibleTextFromDropDown(selectMonth, month);}

    public void selectYearFromDropdown(String year){
        log.info("Select year form dropdown: " + selectYear.getText());
        selectByVisibleTextFromDropDown(selectYear, year);}

    public void enterConfirmPassword(String confirm){
        log.info("Enter confirm password: " + confirmPassword.getText());
        sendTextToElement(confirmPassword, confirm);}

    public String verifyRegistrationMessage(){
        log.info("Verify: " + yourRegistrationCompleted.getText());
        return getTextFromElement(yourRegistrationCompleted);}


}