# 🚀 Playwright + TypeScript Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-Runtime-success?logo=node.js)

A scalable and maintainable **UI automation framework** built using
**Playwright and TypeScript**.

------------------------------------------------------------------------

# 📌 Features

-   Page Object Model (POM)
-   Environment configuration using `.env`
-   Reusable fixtures
-   Cross-browser testing
-   Parallel execution
-   HTML test reports
-   CI/CD ready

------------------------------------------------------------------------

# 🧰 Tech Stack

  Tool         Purpose
  ------------ ---------------------------
  Playwright   UI Automation
  TypeScript   Type-safe scripting
  Node.js      Runtime
  dotenv       Environment configuration

------------------------------------------------------------------------

# 📂 Project Structure

    pw-test-lab
    │
    ├── tests
    │   └── login
    │        └── login.spec.ts
    │
    ├── src
    │   ├── config
    │   │    └── env.config.ts
    │   │
    │   ├── constants
    │   │    └── constants.ts
    │   │
    │   ├── fixtures
    │   │    └── test.fixture.ts
    │   │
    │   ├── locators
    │   │    └── login.locators.ts
    │   │
    │   ├── pages
    │   │    ├── base.page.ts
    │   │    │  
    │   │    └── login
    │   │         └── login.page.ts
    │
    ├── playwright.config.ts
    ├── package.json
    ├── tsconfig.json
    ├── .env
    └── README.md

------------------------------------------------------------------------

# ⚙️ Prerequisites

Install the following tools:

-   Node.js (v18 or higher)
-   npm
-   Git

Verify installation:

    node -v
    npm -v

------------------------------------------------------------------------

# 📥 Installation

### 1️⃣ Clone the repository

    git clone <repository-url>

### 2️⃣ Navigate to project directory

    cd pw-test-lab

### 3️⃣ Install dependencies

    npm install

### 4️⃣ Install Playwright browsers

    npx playwright install

------------------------------------------------------------------------

# ▶️ Running Tests

### Run all tests

    npm run test

or

    npx playwright test

------------------------------------------------------------------------

### Run tests in headed mode

    npx playwright test --headed

------------------------------------------------------------------------

### Run tests in UI mode

    npx playwright test --ui

------------------------------------------------------------------------

### Run a specific test

    npx playwright test tests/login/login.spec.ts

------------------------------------------------------------------------

# 📊 Test Reports

Open Playwright HTML report:

    npx playwright show-report

Open Playwright Allure report:

    allure open allure-report

------------------------------------------------------------------------

# 🐞 Debugging Tests

Run tests in debug mode:

    npx playwright test --debug

------------------------------------------------------------------------

# 🧪 Test Design Pattern

This framework uses **Page Object Model (POM)**.

Structure:

    Tests
     ↓
    Page Objects
     ↓
    Locators

Benefits:

-   Better code reuse
-   Easy maintenance
-   Cleaner test scripts

------------------------------------------------------------------------

# 🚀 CI/CD Integration

This framework can integrate with:

-   Jenkins
-   GitHub Actions
-   GitLab CI
-   Azure DevOps

------------------------------------------------------------------------

# 👨‍💻 Author

**Aniket Maurya**\
SDET / QA Automation Engineer

------------------------------------------------------------------------

⭐ If you like this framework, give it a star on GitHub!
