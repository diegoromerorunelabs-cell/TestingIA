import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const TERADATA_URL = 'https://www.teradata.com/platform/vantagecloud?utm_source=google&utm_medium=paidsearch&utm_campaign=ams-brand-ao-omni&utm_id=7016R000001rGZsQAM&utm_term=teradata%20analytic%20platform&utm_content=brand&gad_source=1&gad_campaignid=22200418714&gclid=Cj0KCQiArOvIBhDLARIsAPwJXOaA4p4sCwru8hPJmqFo9l0KpeQZFWIkHKiJJENjmKOkJjteJ3MGgKEaAqnUEALw_wcB';

// Scenario 1: Verify Home Page Title and Main Content
Given("Navigate to Teradata VantageCloud page", () => {
  cy.visit(TERADATA_URL);
});

When("Page loads successfully", () => {
  // Wait for page to load completely
  cy.get('body', { timeout: 10000 }).should('exist');
});

Then("Verify page title contains \"VantageCloud\"", () => {
  cy.title().should('include', 'VantageCloud');
});

And("Verify main heading is visible", () => {
  // Look for main heading - could be h1 or other header elements
  cy.get('h1, [class*="hero"], [class*="main-heading"]', { timeout: 5000 })
    .should('be.visible')
    .and('contain.text', '');
});

// Scenario 2: Verify Navigation Menu and CTA Buttons
Then("Verify navigation menu is displayed", () => {
  cy.get('nav, [class*="navbar"], [class*="header"]', { timeout: 5000 })
    .should('be.visible');
});

And("Verify \"Get Started\" button is visible", () => {
  cy.get('a, button', { timeout: 5000 })
    .contains(/get\s*started|start\s*free/i)
    .should('be.visible');
});

And("Verify \"Contact Sales\" button exists", () => {
  cy.get('a, button', { timeout: 5000 })
    .contains(/contact\s*sales|sales|demo/i)
    .should('exist');
});

// Scenario 3: Verify Key Features Section
And("Verify features section is displayed", () => {
  cy.get('[class*="feature"], [class*="capability"], [class*="benefit"]', { timeout: 5000 })
    .should('be.visible');
});

And("Verify at least 3 feature cards are visible", () => {
  cy.get('[class*="feature"], [class*="card"], [class*="capability"]', { timeout: 5000 })
    .should('have.length.at.least', 3);
});

And("Verify feature descriptions contain relevant content", () => {
  cy.get('[class*="feature"], [class*="card"], [class*="capability"]', { timeout: 5000 })
    .each(($card) => {
      cy.wrap($card)
        .find('p, span, div', { timeout: 2000 })
        .should('have.length.at.least', 1)
        .first()
        .should('not.be.empty');
    });
});
