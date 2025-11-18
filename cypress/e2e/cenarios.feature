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