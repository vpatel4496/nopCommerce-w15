Feature: Test computer page

  As user I want to register on Nopcommerce Website


  Scenario: User Should Navigate To Computer Page Successfully
    Given I am on homepage
    When  I click on Computer tab
    Then  I verify Computer text

  Scenario:User Should Navigate To Desktops Page Successfully
    Given I am on homepage
    When  I click on Computer tab
    Then  I click on Desktop link
    And   I verify Desktop text

  Scenario Outline: User Should Build You Own Computer And Add Them To Cart Successfully

    Given I am on homepage
    When  I click on Computer tab
    And   I click on Desktop link
    And   I click on product name Build your own computer
    And   I Select processor "<processor>"
    And   I Select RAM "<ram>"
    And   I Select HDD "<hdd>"
    And   I Select OS "<os>"
    And   I Select Software "<software>"
    And   I Click on ADD TO CART Button
    Then  I Verify message The product has been added to your shopping cart
    Examples:
    DATA SET
      | processor                                       | ram           | hdd               | os                     |  software                    |
      | 2.2 GHz Intel Pentium Dual-Core E2200           | 2 GB          | 320 GB            | Vista Home [+$50.00]   |  Microsoft Office [+$50.00]  |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 4GB [+$20.00] | 400 GB [+$100.00] | Vista Premium [+$60.00]|  Acrobat Reader [+$10.00]    |
      | 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00] | 8GB [+$60.00] | 320 GB            | Vista Home [+$50.00]   |  Total Commander [+$5.00]    |