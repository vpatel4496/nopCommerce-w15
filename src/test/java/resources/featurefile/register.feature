Feature: Register Test
  As user I want to register on Nopcommerce Website

  Scenario: User Should Navigate To Register Page Successfully
    Given I am on homepage
    When  I click on register link
    Then  I should navigate to register page successfully

  Scenario: Verify The FirstName LastName Email Password And ConfirmPassword Fields
    Given I click on register link
    When  Click on Register button
    And   Verify the error message First name is required
    And   Verify the error message Last name is required
    And   Verify the error message Email is required
    And   Verify the error message Password is required
    Then  Verify the error message Confirm Password is required

  Scenario Outline: Verify That User Should Create Account Successfully
    Given I click on register link
    When  I select gender "<gender>"
    And   I enter firstname "<firstname>"
    And   I enter lastname "<lastname>"
    And   I select day "<day>"
    And   I select month "<month>"
    And   I select year "<year>"
    And   I select email "<email>"
    And   I select password "<password>"
    And   I select confirmPassword "<confirmpassword>"
    And   I click on Registor button
    Then  Verify the message Your registration completed
    Examples:
      | gender | firstname | lastname | day | month | year | email               | password   | confirmpassword |
      | Male   | Jay       | Cool     | 23  | March | 1975 | jay11@gmail.com     | Abcd1234   | Abcd1234        |
      | Male   | Veeru     | Angry    | 24  | April | 1976 | veeru22@gmail.com   | Sholay1975 | Sholay1975      |
      | Female | Basanti   | Bakbak   | 25  | May   | 1977 | basanti33@gmail.com | Dhanoo123  | Dhanoo123       |