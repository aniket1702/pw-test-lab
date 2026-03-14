# 🚀 Playwright + TypeScript Automation Framework

![Playwright](https://img.shields.io/badge/Playwright-Automation-green?logo=playwright)
![TypeScript](https://img.shields.io/badge/TypeScript-Framework-blue?logo=typescript)
![Node](https://img.shields.io/badge/Node.js-Runtime-success?logo=node.js)

A scalable and maintainable UI automation framework built using
Playwright and TypeScript.

------------------------------------------------------------------------

# 📌 Features

-   Page Object Model (POM)
-   Environment configuration using `.env`
-   Reusable fixtures
-   Cross-browser testing
-   Parallel execution
-   HTML test reports
-   Allure reporting
-   CI/CD ready with GitHub Actions

------------------------------------------------------------------------

# 🛠 Tech Stack

-   Playwright -- UI Automation
-   TypeScript -- Type-safe scripting
-   Node.js -- Runtime
-   dotenv -- Environment configuration
-   GitHub Actions -- CI/CD
-   GitHub Pages -- Report Hosting

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

# ⚙️ Installation

## 1️⃣ Clone Repository

git clone `<repository-url>`{=html}

## 2️⃣ Install Dependencies

npm install

## 3️⃣ Install Browsers

npx playwright install

------------------------------------------------------------------------

# ▶️ Running Tests

npm run test

or

npx playwright test

------------------------------------------------------------------------

# 📊 Reports

### Playwright HTML Report

npx playwright show-report

### Allure Report

allure open allure-report

------------------------------------------------------------------------

# 🚀 GitHub Actions + Allure Deployment

On every push to `main`:

1.  Tests run automatically
2.  Allure report is generated
3.  Report is deployed to GitHub Pages

### Workflow Location:

.github/workflows/playwright.yml

### Deployment Tool Used:

peaceiris/actions-gh-pages@v4

### GitHub Pages Setup:

Settings → Pages → Branch: gh-pages Folder: /(root)

### Report URL:

https://`<your-username>`{=html}.github.io/`<repository-name>`{=html}/

------------------------------------------------------------------------

# 🧪 Framework Design

Uses Page Object Model (POM):

Tests → Page Objects → Locators

Benefits: - Maintainable - Scalable - Clean structure

------------------------------------------------------------------------

# 👨‍💻 Author

Aniket Maurya\
SDET / QA Automation Engineer

------------------------------------------------------------------------

⭐ If you like this framework, give it a star on GitHub!
