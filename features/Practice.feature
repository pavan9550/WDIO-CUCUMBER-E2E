@Practice
Feature: Test Practice Form

  Scenario: Validate form data 

    Given I am on form page "https://demoqa.com/automation-practice-form"
    When  I enter all mandate fields


  Scenario Outline: Validate form data with json File

    Given I am on form page "https://demoqa.com/automation-practice-form"
    When  I enter all mandate fields from <FILENAME>
    Examples:
    | FILENAME        |
    | formdata1.json  |
    | formdata2.json  |
