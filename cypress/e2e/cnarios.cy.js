// cypress/e2e/cnarios.cy.js
// Cypress tests for Cnarios.com automation testing platform

describe('Cnarios.com Automation Tests', () => {
  const BASE_URL = 'https://www.cnarios.com/';

  // XPaths extracted from the website
  const SELECTORS = {
    START_EXPLORING_BTN: '//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[1]',
    CHALLENGES_BTN: '//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[2]',
    CONTACT_EMAIL_LINK: '//*[@id="contact-us"]/a[1]',
    FEATURES_LINK: 'a[href="#features"]',
    CONTACT_US_LINK: 'a[href="#contact-us"]',
    MAIN_HEADING: 'h1'
  };

  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  // TC001 - Verify Start Exploring Button Navigation
  it('TC001 - Should navigate to explore page when Start Exploring button is clicked', () => {
    // Verify the button exists and is visible
    cy.xpath(SELECTORS.START_EXPLORING_BTN)
      .should('be.visible')
      .should('contain', 'Start Exploring');

    // Click the Start Exploring button
    cy.xpath(SELECTORS.START_EXPLORING_BTN).click();

    // Verify navigation to explore page
    cy.url().should('include', '/explore');
    cy.wait(1000);
    cy.url().should('contain', 'cnarios.com/explore');
  });

  // TC002 - Verify Challenges Button Navigation
  it('TC002 - Should navigate to challenges page when Challenges button is clicked', () => {
    // Verify the button exists and is visible
    cy.xpath(SELECTORS.CHALLENGES_BTN)
      .should('be.visible')
      .should('contain', 'Challenges');

    // Click the Challenges button
    cy.xpath(SELECTORS.CHALLENGES_BTN).click();

    // Verify navigation to challenges page
    cy.url().should('include', '/challenges');
    cy.wait(1000);
    cy.url().should('contain', 'cnarios.com/challenges');
  });

  // TC003 - Verify Contact Us Email Link
  it('TC003 - Should verify email link in contact section with correct attributes', () => {
    // Scroll to contact section
    cy.get('#contact-us').scrollIntoView();
    cy.get('#contact-us').should('be.visible');

    // Verify email link exists
    cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
      .should('be.visible')
      .should('contain', 'Drop Us a Line');

    // Verify email link has correct href attribute
    cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
      .invoke('attr', 'href')
      .should('include', 'mailto:cnaarios@gmail.com');

    // Verify subject line in email link
    cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
      .invoke('attr', 'href')
      .should('include', 'subject=Hello%20from%20Your%20Automation%20Playground');

    // Verify body parameter exists
    cy.xpath(SELECTORS.CONTACT_EMAIL_LINK)
      .invoke('attr', 'href')
      .should('include', 'body=');
  });
});
