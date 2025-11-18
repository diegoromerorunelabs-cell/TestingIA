Feature: Home Page
Scenario: Home Page Loads and Header is Visible
  Given Visit Cnarios Home Page
  When Header is displayed
  Then Logo and menu items are visible

Scenario: Click Features Menu
  Given Visit Cnarios Home Page
  When Click on Features menu
  Then Features section is displayed

Scenario: Click Blogs Menu
  Given Visit Cnarios Home Page
  When Click on Blogs menu
  Then Blogs page is loaded

Scenario: KAN-16 - Home Page Buttons Start Exploring and Challenges visible and functional
  Given Visit Cnarios Home Page
  Then "Start Exploring" button is visible
  And "Challenges" button is visible
  When Click on "Start Exploring" button
  Then URL includes "/explore"
  When Click on "Challenges" button
  Then URL includes "/challenges"

Scenario: KAN-13 - Features section shows three main features
  Given Visit Cnarios Home Page
  When Click on Features menu
  Then Feature card "Hands-On Practice" is visible
  And Feature card "Interview Questions" is visible
  And Feature card "Test Your Skills" is visible
  And Each feature card is clickable

Scenario: KAN-15 - Blogs page displays banner and articles
  Given Visit Cnarios Home Page
  When Click on Blogs menu
  Then Banner "Latest Blogs & Insights" is visible
  And Article "HTML Basics" is visible
  And Article "Locator Strategies" is visible
  And Each article has a link and is clickable