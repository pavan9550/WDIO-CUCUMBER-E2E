Feature: End to End Test Get Single User

   Scenario Outline: Validating the UI_Data with Api_Data
   Given I open the WebPage <pageUrl>
   When I made GET Requests on <endUrl>
   And I made API GET call on <endUrl>
   Then Validate the Results

   Examples:
   | pageUrl                   | endUrl        |
   | https://resttesttest.com/ | /app/users/2  |