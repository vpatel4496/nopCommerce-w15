package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.ComputerPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class ComputerSteps {
    @When("^I click on Computer tab$")
    public void iClickOnComputerTab() { new ComputerPage().clickOnComputerTab();}

    @Then("^I verify Computer text$")
    public void iVerifyComputerText() {
        String expectedText = "Computers";
        String actualText = new ComputerPage().verifyComputerText();
        Assert.assertEquals("Computers", expectedText, actualText);
    }

    //--------------------------------------------------------------------------------------------------//

    @Then("^I click on Desktop link$")
    public void iClickOnDesktopLink() { new ComputerPage().clickOnDeskTopLink();
    }

    @And("^I verify Desktop text$")
    public void iVerifyDesktopText() {
        String expectedText = "Desktops";
        String actualText = new ComputerPage().verifyDesktopText();
        Assert.assertEquals("Desktops", expectedText,actualText);
    }

    //------------------------------------------------------------------------------------------------//


    @And("^I click on product name Build your own computer$")
    public void iClickOnProductNameBuildYourOwnComputer() {
        new ComputerPage().clickOnBuildYourOwnComputer();
    }

    @And("^I Select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) { new ComputerPage().selectProcessorFromVisibleText(processor);}

    @And("^I Select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram) { new ComputerPage().selectRamFromVisibleText(ram);

    }

    @And("^I Select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String hdd) { new ComputerPage().selectHddRadioButton(hdd);

    }

    @And("^I Select OS \"([^\"]*)\"$")
    public void iSelectOS(String os) { new ComputerPage().selectOsRadioButton(os);}

    @And("^I Select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String Soft){ new ComputerPage().selectSoftwareRadioButton(Soft);

    }

    @And("^I Click on ADD TO CART Button$")
    public void iClickOnADDTOCARTButton() { new ComputerPage().clickOnAddToCartButton();}

    @Then("^I Verify message The product has been added to your shopping cart$")
    public void iVerifyMessageTheProductHasBeenAddedToYourShoppingCart() {
        String expectedMessage = "The product has been added to your shopping cart";
        String actualMessage = new ComputerPage().verifyTheProductHasBeenAddedToTheCart();
        Assert.assertEquals("The product has been added to your shopping cart",expectedMessage,actualMessage);




        //new ComputerPage().verifyTheProductHasBeenAddedToTheCart();
    }
}

