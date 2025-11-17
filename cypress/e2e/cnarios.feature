Feature: Cnarios Platform Validation

Scenario: Verify Cnarios Home Page Title and Main Content
  Given Navigate to Cnarios home page
  When Page loads successfully
  Then Verify page title contains "Cnarios"
  And Verify main headline is visible

Scenario: Verify Cnarios Navigation and Platform Features
  Given Navigate to Cnarios home page
  When Page loads successfully
  Then Verify main navigation is displayed
  And Verify "Sign Up" or "Register" button is visible
  And Verify "Learn More" or "Explore" button exists

Scenario: Verify Cnarios Services and Value Proposition
  Given Navigate to Cnarios home page
  When Page loads successfully
  Then Verify services section is displayed
  And Verify at least 2 service cards or value propositions are visible
  And Verify service descriptions contain informative text
