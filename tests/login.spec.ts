import { test, expect } from '@playwright/test';
import { description, epic, severity } from 'allure-js-commons';
import { LoginPage } from '../src/pages/login/login.page';
import { CREDENTIALS } from '../src/constants/constants';

test.describe('Login Functionality', () => {

  test('Valid Login', async ({ page }) => {

    description('Valid login with admin credentials');
    epic('Login Module');
    severity('critical');

    const loginPage = new LoginPage(page);

    await loginPage.navigateTo();
    await loginPage.login(
      CREDENTIALS.Username,
      CREDENTIALS.Password
    );

    await expect(page).toHaveTitle('OrangeHRM');
  });

});
