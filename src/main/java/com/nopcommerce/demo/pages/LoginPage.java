package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {

    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage(){ PageFactory.initElements(driver,this);}

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log in')]")
    WebElement loginLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Welcome, Please Sign In!')]")
    WebElement welcomePleaseSignInText;


    @CacheLookup
    @FindBy(xpath = "//input[@id='Email']")
    WebElement emailIdField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='Password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//button[contains(text(),'Log in')]")
    WebElement clickOnLoginButton;


    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/div[2]/form[1]/div[1]")
    WebElement verifyTheErrorMessage;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Log out')]")
    WebElement logOutLink;






    public void clickOnLoginLink(){
        log.info("Click on: " + loginLink.getText());
        clickOnElement(loginLink);}

    public String verifyWelComeText(){
       log.info("Verify: " + welcomePleaseSignInText.getText());
        return getTextFromElement(welcomePleaseSignInText);}

    //------------------------------------------------------------------------------------------------------//

    public void enterEmail(String email){
        log.info("Enter email: " + emailIdField.getText());
        sendTextToElement(emailIdField,email);}

    public void enterPassword(String password){
        log.info("Enter password: " + passwordField.getText());
        sendTextToElement(passwordField,password);}

    public void clickOnLoginButton(){
        log.info("Click on: " + clickOnLoginButton.getText());
        clickOnElement(clickOnLoginButton);}

    public String verifyErrorMessage(){
        log.info("Verify: " + verifyTheErrorMessage.getText());
        return getTextFromElement(verifyTheErrorMessage);}

    //----------------------------------------------------------------------------------------------------//

    public String verifyLogOutLink(){
        log.info("Verify logout link: " + logOutLink.getText());
        return getTextFromElement(logOutLink);}

    //----------------------------------------------------------------------------------------------------//

    public void clickOnLogOutLink(){
        log.info("Click on logout Link: " + logOutLink.getText());
        clickOnElement(logOutLink);}

    public String verifyLogInLink(){
        log.info("Verify login link: " + loginLink.getText());
        return getTextFromElement(loginLink);}







}
