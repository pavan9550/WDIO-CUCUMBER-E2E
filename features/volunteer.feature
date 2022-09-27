Feature: The Volunteer Registration Form

  Scenario Outline: As a user, I can open internet WebSite
    Given I Open the Browser and load "https://fs2.formsite.com/meherpavan/form2/index.html?1537702596407"
    Then I validate the header "Volunteer Sign Up"
    When I Enter firstName <fname> , lastName <lname> , phone <phn> , country <cntry> , city <cty> and mail <mail>
    And I Select the gender <gender>
    And I Select the Best Time to Contact <time>
    And I Click on submit button
    Then I should see a header saying "An error has occurred"

    Examples: 
    | fname  | lname | phn | cntry | cty | mail  | gender |
    | Nag    | Pavan | 123 | IND   | PMD | nage@ | Radio-0| 

