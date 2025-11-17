import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const CNARIOS_URL = 'https://www.cnarios.com/';

// Scenario 1: Verify Cnarios Home Page Title and Main Content
Given("Navigate to Cnarios home page", () => {
  cy.visit(CNARIOS_URL);
});

When("Page loads successfully", () => {
  // Wait for page to load completely
  cy.get('body', { timeout: 10000 }).should('exist');
});

Then("Verify page title contains \"Cnarios\"", () => {
  cy.title().should('include', 'Cnarios');
});

And("Verify main headline is visible", () => {
  // Look for main headline - h1 or hero section
  cy.get('h1, [class*="hero"], [class*="headline"], [class*="title"]', { timeout: 5000 })
    .should('be.visible')
    .and('not.be.empty');
});

// Scenario 2: Verify Cnarios Navigation and Platform Features
Then("Verify main navigation is displayed", () => {
  cy.get('nav, [class*="navbar"], [class*="navigation"], [class*="header"]', { timeout: 5000 })
    .should('be.visible');
});

And("Verify \"Sign Up\" or \"Register\" button is visible", () => {
  cy.get('a, button', { timeout: 5000 })
    .contains(/sign\s*up|register|join|get\s*started/i)
    .should('be.visible');
});

And("Verify \"Learn More\" or \"Explore\" button exists", () => {
  cy.get('a, button', { timeout: 5000 })
    .contains(/learn\s*more|explore|discover|find\s*out/i)
    .should('exist');
});

// Scenario 3: Verify Cnarios Services and Value Proposition
And("Verify services section is displayed", () => {
  cy.get('[class*="service"], [class*="solution"], [class*="feature"], [class*="offering"]', { timeout: 5000 })
    .should('be.visible');
});

And("Verify at least 2 service cards or value propositions are visible", () => {
  cy.get('[class*="service"], [class*="card"], [class*="solution"], [class*="offering"]', { timeout: 5000 })
    .should('have.length.at.least', 2);
});

And("Verify service descriptions contain informative text", () => {
  cy.get('[class*="service"], [class*="card"], [class*="solution"]', { timeout: 5000 })
    .each(($card) => {
      cy.wrap($card)
        .find('p, span, [class*="description"], [class*="text"]', { timeout: 2000 })
        .should('have.length.at.least', 1)
        .first()
        .should('not.be.empty');
    });
});
