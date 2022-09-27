@WAIT
Feature: Wait types Demo
  Scenario Outline: Test Different Wait types 
     Given I am on dynamic laoding <appURL> page
     When  I click on start button
     Then  i validate loading Icon

     Examples:
     |appURL                                                |
     | https://the-internet.herokuapp.com/dynamic_loading/1 |