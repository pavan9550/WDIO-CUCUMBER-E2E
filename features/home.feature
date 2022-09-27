Feature: The Internet Website HomePage

  Scenario Outline: As a user, I can open internet WebSite
    Given I Open the Browser and load <url>
    Then I should see a header saying <header>

    Examples: 
      | url                                 | header                  |
      | https://the-internet.herokuapp.com/ | Welcome to the-internet |
