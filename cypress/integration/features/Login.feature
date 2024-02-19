Feature: Login Action

Scenario: Successful Login with Valid Credentials
    Given User is on Home Page
    When User Navigates to Login Page
    And User enters UserName and Password
    Then Message displayed Login Successfully