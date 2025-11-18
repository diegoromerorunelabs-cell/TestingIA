Feature: Cnarios Website - Complete Test Suite

  # ========================================
  # KAN-12: Main Site Navigation
  # ========================================
  
  Scenario: Home Page Loads and Header is Visible
    Given Visit Cnarios Home Page
    When Header is displayed
    Then Logo and menu items are visible

  Scenario: Verify all menu items are displayed
    Given Visit Cnarios Home Page
    When Header is displayed
    Then I should see "Features" menu item
    And I should see "How it works?" menu item
    And I should see "Contact Us" menu item
    And I should see "Blogs" menu item

  Scenario: Click Features Menu
    Given Visit Cnarios Home Page
    When Click on Features menu
    Then Features section is displayed

  Scenario: Click Blogs Menu
    Given Visit Cnarios Home Page
    When Click on Blogs menu
    Then Blogs page is loaded

  Scenario: Verify header remains visible on scroll
    Given Visit Cnarios Home Page
    When I scroll down the page
    Then The navigation header should remain visible

  Scenario: Click logo to return to home from blogs
    Given Visit Cnarios Home Page
    When Click on Blogs menu
    And I click on the Cnarios logo
    Then I should be on the home page

  # ========================================
  # KAN-16: Easy Access to Main Sections
  # ========================================

  Scenario: Verify Start Exploring button is visible and clickable
    Given Visit Cnarios Home Page
    When The page loads completely
    Then The "Start Exploring" button should be visible
    And The "Start Exploring" button should be clickable

  Scenario: Verify Challenges button is visible and clickable
    Given Visit Cnarios Home Page
    When The page loads completely
    Then The "Challenges" button should be visible
    And The "Challenges" button should be clickable

  Scenario: Navigate to Explore section via Start Exploring button
    Given Visit Cnarios Home Page
    When I click on the "Start Exploring" button
    Then I should be redirected to "/explore" page

  Scenario: Navigate to Challenges section via Challenges button
    Given Visit Cnarios Home Page
    When I click on the "Challenges" button
    Then I should be redirected to "/challenges" page

  # ========================================
  # KAN-15: Access to Educational Blog Articles
  # ========================================

  Scenario: Verify Latest Blogs banner is displayed
    Given Visit Cnarios Home Page
    When Click on Blogs menu
    Then The "Latest Blogs & Insights" banner should be visible

  Scenario: Verify required articles are listed
    Given Visit Cnarios Home Page
    When Click on Blogs menu
    Then I should see the "HTML Basics" article
    And I should see the "Locator Strategies" article

  Scenario: Verify HTML Basics article structure
    Given Visit Cnarios Home Page
    When Click on Blogs menu
    And I locate the "HTML Basics" article
    Then The article should have a title
    And The article should have a category
    And The article should have a description

  # ========================================
  # KAN-13: Main Features Display
  # ========================================

  Scenario: Verify three feature cards are displayed
    Given Visit Cnarios Home Page
    When Click on Features menu
    Then I should see exactly 3 feature cards
    And Each feature card should have an image

  Scenario: Verify Hands-On Practice card structure
    Given Visit Cnarios Home Page
    When Click on Features menu
    And I locate the "Hands-On Practice" feature card
    Then The feature card should have a title
    And The feature card should have a description
    And The feature card should have an icon

  Scenario: Verify content is well-structured and readable
    Given Visit Cnarios Home Page
    When Click on Features menu
    Then All feature titles should be visible
    And All feature descriptions should be readable