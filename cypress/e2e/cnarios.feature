Feature: Cnarios.com Automation Testing

  Background:
    Given User navigates to Cnarios homepage
    And Page should load successfully

  Scenario: TC001 - Verify Start Exploring Button Navigation
    When User clicks on "Start Exploring" button
    Then User should be navigated to explore page
    And URL should contain "/explore"

  Scenario: TC002 - Verify Challenges Button Navigation
    When User clicks on "Challenges" button
    Then User should be navigated to challenges page
    And URL should contain "/challenges"

  Scenario: TC003 - Verify Contact Us Email Link
    When User scrolls to contact section
    And User clicks on "Drop Us a Line" email link
    Then Email client should open with correct recipient
    And Subject should contain "Hello from Your Automation Playground"
