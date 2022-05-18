package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {

    private static final Logger log = LogManager.getLogger(ComputerPage.class.getName());

    public ComputerPage() {
        PageFactory.initElements(driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[2]/ul[1]/li[1]/a[1]")
    WebElement clickOnComputerTab;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Computers')]")
    WebElement verifyComputerText;

    //------------------------------------------------------------------------------------------------//

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/h2[1]/a[1]")
    WebElement clickOnDesktopsLink;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Desktops')]")
    WebElement verifyDesktopText;

    //------------------------------------------------------------------------------------------------//

    @CacheLookup
    @FindBy(xpath = "//body/div[6]/div[3]/div[1]/div[3]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement buidYourOwnComputer;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_1']")
    WebElement selectProcessor;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement selectRam;

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'320 GB')]")
    WebElement hdd320;

    @CacheLookup
    @FindBy(xpath = "/html[1]/body[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[7]/dl[1]/dd[3]/ul[1]/li[2]/input[1]")
    WebElement hdd400;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_8']")
    WebElement osVistaHome;

    @CacheLookup
    @FindBy(xpath = "//label[@for='product_attribute_4_9']")
    WebElement osVistaPremium;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_10']")
    WebElement softwareMSOffice;

    @CacheLookup
    @FindBy(xpath = "//input[@id='product_attribute_5_11']")
    WebElement softwareAcrobat;

    @CacheLookup
    @FindBy(xpath = "/html[1]/body[1]/div[6]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/div[1]/div[2]/div[7]/dl[1]/dd[5]/ul[1]/li[3]/label[1]")
    WebElement softwareTotalCommander;

    @CacheLookup
    @FindBy(xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCart;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='bar-notification']/div[1]/p[1]")
    WebElement productAdded;





    public void clickOnComputerTab() {
        log.info("Click on Computer" + clickOnComputerTab.getText());
        clickOnElement(clickOnComputerTab);
    }

    public String verifyComputerText() {
        log.info("Verify Computer text" + verifyComputerText.getText());
        return getTextFromElement(verifyComputerText);
    }
    //----------------------------------------------------------------------------------------------------//

    public void clickOnDeskTopLink() {
        log.info("Click on Desktop link" + clickOnDesktopsLink.getText());
        clickOnElement(clickOnDesktopsLink);
    }

    public String verifyDesktopText() {
        log.info("Verify Desktop text" + verifyDesktopText.getText());
        return getTextFromElement(verifyDesktopText);
    }
    //---------------------------------------------------------------------------------------------------//

    public void clickOnBuildYourOwnComputer() {
        log.info("Click on Build you own Computer"+ buidYourOwnComputer.getText());
        clickOnElement(buidYourOwnComputer);
    }

    public void selectProcessorFromVisibleText(String processor) {
        log.info("Select Processor" + selectProcessor.getText());
        selectByVisibleTextFromDropDown(selectProcessor, processor);
    }

    public void selectRamFromVisibleText(String ram) {
        log.info("Select Ram" + selectRam.getText());
        selectByVisibleTextFromDropDown(selectRam, ram);
    }

    public void selectHddRadioButton(String hdd) {
      //  log.info("select Radio Button" + hdd320.getText());
        if (hdd.equalsIgnoreCase("320 GB")) {
            clickOnElement(hdd320);
        } else if (hdd.equalsIgnoreCase("400 GB [+$100.00]")) {
     //   log.info("select Radio NButton" + hdd400.getText());
            clickOnElement(hdd400);
        } else {
            System.out.println("select one hdd radio button");
        }
    }

    public void selectOsRadioButton(String os){
       // log.info("Select Os Radio Button" + osVistaHome.getText());
        if (os.equalsIgnoreCase("Vista Home [+$50.00]")){
      //  log.info("Select Os Radio Button " + osVistaHome.getText());
            clickOnElement(osVistaHome);
        } else if(os.equalsIgnoreCase("Vista Premium [+$60.00]")) {
            // Reporter.log("Select Os Radio Button" + osVistaHome.getText());
            //  log.info("Select Os Radio Button " + osVistaPremium.getText());
            clickOnElement(osVistaPremium);

        }
    }

    public void selectSoftwareRadioButton(String Soft){
       // log.info("Select software radio button" + softwareMSOffice.getText());
            clickOnElement(softwareMSOffice);
        if (Soft.equalsIgnoreCase("Microsoft Office [+$50.00]")) {
            clickOnElement(softwareMSOffice);
        } else if (Soft.equalsIgnoreCase("Acrobat Reader [+$10.00]")) {
       // log.info("Select software radio button" + softwareAcrobat.getText());
            clickOnElement(softwareAcrobat);
        } else {

       // log.info("Select software radio button" + softwareTotalCommander.getText());
            clickOnElement(softwareTotalCommander);
        }
    }

    public void clickOnAddToCartButton(){
        log.info("Click on add to cart button" + addToCart.getText());
        clickOnElement(addToCart);
    }
    public String verifyTheProductHasBeenAddedToTheCart(){
        log.info("Your the product: " + productAdded.getText());
        return getTextFromElement(productAdded);}

}