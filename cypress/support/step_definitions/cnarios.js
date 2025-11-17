// cypress/support/step_definitions/cnarios.js
// Step definitions for Cnarios.com automation tests

const BASE_URL = 'https://www.cnarios.com/';

// XPaths extracted from the website
const SELECTORS = {
  START_EXPLORING_BTN: '//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[1]',
  CHALLENGES_BTN: '//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[2]',
  CONTACT_EMAIL_LINK: '//*[@id="contact-us"]/a[1]',
  FEATURES_LINK: 'a[href="#features"]',
  CONTACT_US_LINK: 'a[href="#contact-us"]'
};

// Background Steps
Given('User navigates to Cnarios homepage', () => {
  cy.visit(BASE_URL);
});

Given('Page should load successfully', () => {
  cy.url().should('include', 'cnarios.com');
  cy.get('h1').should('be.visible');
});

// TC001 - Start Exploring Button
When('User clicks on "Start Exploring" button', () => {
  cy.xpath(SELECTORS.START_EXPLORING_BTN).click();
});

Then('User should be navigated to explore page', () => {
  cy.url().should('include', '/explore');
});

Then('URL should contain "/explore"', () => {
  cy.url().should('include', '/explore');
});

// TC002 - Challenges Button
When('User clicks on "Challenges" button', () => {
  cy.xpath(SELECTORS.CHALLENGES_BTN).click();
});

Then('User should be navigated to challenges page', () => {
  cy.url().should('include', '/challenges');
});

Then('URL should contain "/challenges"', () => {
  cy.url().should('include', '/challenges');
});

// TC003 - Contact Us Email Link
When('User scrolls to contact section', () => {
  cy.get('#contact-us').scrollIntoView();
  cy.get('#contact-us').should('be.visible');
});

When('User clicks on "Drop Us a Line" email link', () => {
  cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
    .should('be.visible')
    .invoke('attr', 'href')
    .should('include', 'mailto:cnaarios@gmail.com');
  // Check href attribute instead of clicking (to avoid leaving the page)
});

Then('Email client should open with correct recipient', () => {
  cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
    .invoke('attr', 'href')
    .should('include', 'mailto:cnaarios@gmail.com');
});

Then('Subject should contain "Hello from Your Automation Playground"', () => {
  cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
    .invoke('attr', 'href')
    .should('include', 'subject=Hello%20from%20Your%20Automation%20Playground');
});
