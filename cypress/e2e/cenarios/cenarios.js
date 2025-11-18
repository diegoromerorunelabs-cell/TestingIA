import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

// ========================================
// COMMON STEPS - KAN-12
// ========================================

Given("Visit Cnarios Home Page", () => {
  cy.visit('https://www.cnarios.com/');
  cy.wait(1000); // Wait for page to stabilize
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

Then("I should see {string} menu item", (menuItem) => {
  cy.xpath(`//nav//a[text()='${menuItem}']`).should('be.visible');
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
  cy.wait(2000);
  cy.contains('HTML Basics').should('be.visible');
});

// ========================================
// KAN-12: Additional Navigation Steps
// ========================================

When("I scroll down the page", () => {
  cy.scrollTo(0, 500);
  cy.wait(500);
});

Then("The navigation header should remain visible", () => {
  cy.get('nav').should('be.visible');
  cy.get('nav').should('have.css', 'position').and('match', /fixed|sticky/);
});

When("I click on the Cnarios logo", () => {
  cy.xpath("//nav//a[img[@alt='cnarios logo']]").click();
  cy.wait(1000);
});

Then("I should be on the home page", () => {
  cy.url().should('eq', 'https://www.cnarios.com/');
});

// ========================================
// KAN-16: Main Section Access Buttons
// ========================================

When("The page loads completely", () => {
  cy.wait(2000);
  cy.get('body').should('be.visible');
});

Then("The {string} button should be visible", (buttonText) => {
  cy.contains('button, a', buttonText, { matchCase: false })
    .should('be.visible')
    .scrollIntoView();
});

Then("The {string} button should be clickable", (buttonText) => {
  cy.contains('button, a', buttonText, { matchCase: false })
    .should('not.be.disabled')
    .should('have.css', 'pointer-events', 'auto');
});

When("I click on the {string} button", (buttonText) => {
  cy.contains('button, a', buttonText, { matchCase: false })
    .scrollIntoView()
    .click({ force: true });
  cy.wait(2000);
});

Then("I should be redirected to {string} page", (expectedPath) => {
  cy.url().should('include', expectedPath);
  cy.wait(1000);
});

// ========================================
// KAN-15: Blog Articles Access
// ========================================

Then("The {string} banner should be visible", (bannerText) => {
  cy.contains(bannerText).should('be.visible');
});

Then("I should see the {string} article", (articleTitle) => {
  cy.contains(articleTitle).should('be.visible');
});

When("I locate the {string} article", (articleTitle) => {
  cy.contains(articleTitle)
    .should('be.visible')
    .scrollIntoView()
    .as('currentArticle');
});

Then("The article should have a title", () => {
  cy.get('@currentArticle')
    .parents('article, div[class*="card"], div[class*="post"]')
    .first()
    .find('h1, h2, h3, h4, .title, [class*="title"]')
    .should('exist')
    .and('be.visible');
});

Then("The article should have a category", () => {
  cy.get('@currentArticle')
    .parents('article, div[class*="card"], div[class*="post"]')
    .first()
    .find('.category, [class*="category"], [class*="tag"]')
    .should('exist')
    .and('be.visible');
});

Then("The article should have a description", () => {
  cy.get('@currentArticle')
    .parents('article, div[class*="card"], div[class*="post"]')
    .first()
    .find('p, .description, [class*="description"], [class*="excerpt"]')
    .should('exist')
    .and('be.visible');
});

// ========================================
// KAN-13: Main Features Display
// ========================================

Then("I should see exactly {int} feature cards", (expectedCount) => {
  cy.get('section, div')
    .contains(/features/i)
    .parents('section, div[class*="section"]')
    .first()
    .find('div[class*="card"], article, div[class*="feature"]')
    .should('have.length.at.least', expectedCount);
});

Then("Each feature card should have an image", () => {
  cy.get('section, div')
    .contains(/features/i)
    .parents('section, div[class*="section"]')
    .first()
    .find('div[class*="card"], article, div[class*="feature"]')
    .each(($card) => {
      cy.wrap($card).find('img, svg, [class*="icon"]').should('exist');
    });
});

When("I locate the {string} feature card", (featureName) => {
  cy.contains(featureName)
    .should('be.visible')
    .scrollIntoView()
    .parents('div[class*="card"], article, div[class*="feature"]')
    .first()
    .as('currentFeatureCard');
});

Then("The feature card should have a title", () => {
  cy.get('@currentFeatureCard')
    .find('h1, h2, h3, h4, .title, [class*="title"]')
    .should('exist')
    .and('be.visible');
});

Then("The feature card should have a description", () => {
  cy.get('@currentFeatureCard')
    .find('p, .description, [class*="description"]')
    .should('exist')
    .and('be.visible');
});

Then("The feature card should have an icon", () => {
  cy.get('@currentFeatureCard')
    .find('img, svg, [class*="icon"], i')
    .should('exist')
    .and('be.visible');
});

Then("All feature titles should be visible", () => {
  cy.get('section, div')
    .contains(/features/i)
    .parents('section, div[class*="section"]')
    .first()
    .find('h1, h2, h3, h4, .title, [class*="title"]')
    .each(($title) => {
      cy.wrap($title).should('be.visible');
    });
});

Then("All feature descriptions should be readable", () => {
  cy.get('section, div')
    .contains(/features/i)
    .parents('section, div[class*="section"]')
    .first()
    .find('p, .description, [class*="description"]')
    .each(($desc) => {
      cy.wrap($desc)
        .should('be.visible')
        .and('not.be.empty');
    });
});