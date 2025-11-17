# Cnarios.com Automation Test Cases

## Overview
This project contains 3 Test Cases (TCS) for automating Cnarios.com using Cucumber and Cypress.

Cnarios (https://www.cnarios.com/) is a free platform for testers to practice automation using real-life scenarios, industry-standard test cases, and bug-finding challenges.

## Test Files Created

### 1. Feature File
- **Location:** `cypress/e2e/cnarios.feature`
- **Format:** Gherkin (BDD - Behavior Driven Development)
- **Contains:** 3 test scenarios with Background steps

### 2. Step Definitions
- **Location:** `cypress/support/step_definitions/cnarios.js`
- **Contains:** Implementation of Gherkin steps in JavaScript
- **Framework:** Cypress with XPath support

### 3. Cypress Spec Tests
- **Location:** `cypress/e2e/cnarios.cy.js`
- **Format:** Standard Cypress test file
- **Contains:** 3 test cases with complete test logic

---

## Extracted XPaths

### XPath 1: Start Exploring Button
```xpath
//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[1]
```
- **Element:** Link/Button
- **Text:** "Start Exploring"
- **Purpose:** Navigates to explore page (/explore)
- **Location:** Hero section, first button

### XPath 2: Challenges Button
```xpath
//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[2]
```
- **Element:** Link/Button
- **Text:** "Challenges"
- **Purpose:** Navigates to challenges page (/challenges)
- **Location:** Hero section, second button

### XPath 3: Drop Us a Line Email Link
```xpath
//*[@id="contact-us"]/a[1]
```
- **Element:** Mailto Link
- **Text:** "Drop Us a Line"
- **Href:** `mailto:cnaarios@gmail.com?subject=Hello%20from%20Your%20Automation%20Playground&body=...`
- **Purpose:** Email contact link
- **Location:** Contact Us section (#contact-us)

---

## Test Cases Details

### TC001 - Verify Start Exploring Button Navigation
**Objective:** Verify that the "Start Exploring" button navigates to the explore page

**Steps:**
1. Navigate to Cnarios homepage
2. Verify page loads successfully
3. Click on "Start Exploring" button
4. Verify URL contains "/explore"

**Expected Result:** User is navigated to `https://www.cnarios.com/explore`

**XPath Used:** `//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[1]`

---

### TC002 - Verify Challenges Button Navigation
**Objective:** Verify that the "Challenges" button navigates to the challenges page

**Steps:**
1. Navigate to Cnarios homepage
2. Verify page loads successfully
3. Click on "Challenges" button
4. Verify URL contains "/challenges"

**Expected Result:** User is navigated to `https://www.cnarios.com/challenges`

**XPath Used:** `//*[@id="hero-section"]/div[1]/div[1]/div[2]/a[2]`

---

### TC003 - Verify Contact Us Email Link
**Objective:** Verify that the contact email link has correct attributes and destination

**Steps:**
1. Navigate to Cnarios homepage
2. Scroll to the contact section
3. Verify "Drop Us a Line" email link is visible
4. Verify email recipient is "cnaarios@gmail.com"
5. Verify subject line contains correct text

**Expected Result:** Email link contains:
- Recipient: `cnaarios@gmail.com`
- Subject: `Hello from Your Automation Playground`
- Body parameter present

**XPath Used:** `//*[@id="contact-us"]/a[1]`

---

## How to Run the Tests

### Using Cypress (Spec Format)
```bash
npx cypress run --spec "cypress/e2e/cnarios.cy.js"
```

### Using Cypress UI
```bash
npx cypress open
# Select cnarios.cy.js from the test list
```

### Using Cucumber/BDD Format
Note: Requires cucumber preprocessor setup in `cypress.config.js`
```bash
npx cypress run --spec "cypress/e2e/cnarios.feature"
```

## Dependencies

### Required:
- Cypress >= 12.0.0
- cypress-xpath (for XPath support)

### Optional (for Cucumber/BDD):
- @badeball/cypress-cucumber-preprocessor
- @bahmutov/cypress-esbuild-preprocessor

## Installation

```bash
# Install cypress
npm install --save-dev cypress

# Install cypress-xpath plugin
npm install --save-dev cypress-xpath

# Optional: For Cucumber support
npm install --save-dev @badeball/cypress-cucumber-preprocessor
```

## Configuration

### Add to cypress.config.js
```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.cnarios.com/',
    setupNodeEvents(on, config) {
      // Cucumber preprocessor setup here
    }
  }
})
```

### Add to support/e2e.js
```javascript
// Add support for xpath
require('cypress-xpath')
```

---

## Website Information

**Website:** https://www.cnarios.com/

**Purpose:** Free platform for automation testing practice

**Key Features:**
1. Real-world automation scenarios
2. Industry-standard test cases
3. Bug-finding challenges
4. Interview preparation questions
5. Concept tutorials (Iframes, Multi-window, Links, Tables, etc.)
6. E-commerce challenges (Pagination, Filtering)

---

## Author Notes
- All XPaths were extracted directly from the live website
- Tests are designed to validate basic navigation functionality
- Email link test validates attributes without actually sending emails
- All test cases follow Cypress best practices
- Compatible with both Cypress spec and Cucumber/BDD formats
