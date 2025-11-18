import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Given("Visit Cnarios Home Page", () => {
  cy.visit('https://www.cnarios.com/');
});

When("Header is displayed", () => {
  cy.get('nav').should('be.visible');
});

Then("Logo and menu items are visible", () => {
  cy.xpath("//nav//a[img[@alt='cnarios logo']]").should('be.visible');
  cy.xpath("//nav//a[text()='Features']").should('be.visible');
  cy.xpath("//nav//a[text()='How it works?']").should('be.visible');
  cy.xpath("//nav//a[text()='Contact Us']").should('be.visible');
  cy.xpath("//nav//a[text()='Blogs']").should('be.visible');
});


When("Click on Features menu", () => {
  cy.xpath("//nav//a[text()='Features']").click();
});

Then("Features section is displayed", () => {
  cy.contains('features').should('be.visible');
});

When("Click on Blogs menu", () => {
  cy.xpath("//nav//a[text()='Blogs']").click();
});

Then("Blogs page is loaded", () => {
  cy.url().should('include', '/blogs');
  cy.wait(2000); // Esperar a que la página cargue completamente
  cy.contains('HTML Basics').should('be.visible');
});

// --- New step definitions for KAN-16, KAN-13, KAN-15 ---

Then("\"Start Exploring\" button is visible", () => {
  cy.contains('Start Exploring').should('be.visible');
});

Then("\"Challenges\" button is visible", () => {
  cy.contains('Challenges').should('be.visible');
});

When("Click on \"Start Exploring\" button", () => {
  cy.contains('Start Exploring').click();
});

Then("URL includes \"/explore\"", () => {
  cy.url().should('include','/explore');
});

When("Click on \"Challenges\" button", () => {
  cy.contains('Challenges').click();
});

Then("URL includes \"/challenges\"", () => {
  cy.url().should('include','/challenges');
});

Then("Feature card \"Hands-On Practice\" is visible", () => {
  cy.contains('Hands-On Practice').should('be.visible');
});

Then("Feature card \"Interview Questions\" is visible", () => {
  cy.contains('Interview Questions').should('be.visible');
});

Then("Feature card \"Test Your Skills\" is visible", () => {
  cy.contains('Test Your Skills').should('be.visible');
});

Then("Each feature card is clickable", () => {
  cy.contains('Hands-On Practice').closest('a').should('have.attr','href');
  cy.contains('Interview Questions').closest('a').should('have.attr','href');
  cy.contains('Test Your Skills').closest('a').should('have.attr','href');
});

Then("Banner \"Latest Blogs & Insights\" is visible", () => {
  cy.contains('Latest Blogs & Insights').should('be.visible');
});

Then("Article \"HTML Basics\" is visible", () => {
  cy.contains('HTML Basics').should('be.visible');
});

Then("Article \"Locator Strategies\" is visible", () => {
  cy.contains('Locator Strategies').should('be.visible');
});

Then("Each article has a link and is clickable", () => {
  cy.contains('HTML Basics').closest('a').should('have.attr','href');
  cy.contains('Locator Strategies').closest('a').should('have.attr','href');
});
