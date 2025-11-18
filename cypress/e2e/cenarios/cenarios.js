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