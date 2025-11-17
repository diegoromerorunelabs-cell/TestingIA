Feature: Teradata VantageCloud Platform Validation

Scenario: Verify Home Page Title and Main Content
  Given Navigate to Teradata VantageCloud page
  When Page loads successfully
  Then Verify page title contains "VantageCloud"
  And Verify main heading is visible

Scenario: Verify Navigation Menu and CTA Buttons
  Given Navigate to Teradata VantageCloud page
  When Page loads successfully
  Then Verify navigation menu is displayed
  And Verify "Get Started" button is visible
  And Verify "Contact Sales" button exists

Scenario: Verify Key Features Section
  Given Navigate to Teradata VantageCloud page
  When Page loads successfully
  Then Verify features section is displayed
  And Verify at least 3 feature cards are visible
  And Verify feature descriptions contain relevant content
