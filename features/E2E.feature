 @Check
 Feature: Test End to End user
#    Scenario Outline: Validate End to End Get single user
#      Given I am on Page <PageUrl>
#      When I Perform <EndPoint> user search
#      And I Make GET <EndPoint> Api Call
#      Then I Validate the Result

#      Examples:
#        | PageUrl                  | EndPoint     |
#        | http://resttesttest.com/ | /api/users/2 |



   Scenario Outline: Validate End to End Get single Create user
     Given I am on Page <PageUrl>
     When I Perform Create User Search for Api <EndPoint> 
     And I Make POST <EndPoint> Api Call
     Then I Validate the Result

     Examples:
       | PageUrl                  | EndPoint     |
       | http://resttesttest.com/ | /api/users   |