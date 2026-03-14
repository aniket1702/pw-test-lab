import { test, expect } from '../src/fixtures/test.fixture';
import { description, epic, severity } from 'allure-js-commons';
import { LoginPage } from '../src/pages/login/login.page';
import { CREDENTIALS } from '../src/constants/constants';
import { ENV } from '../src/config/env.config';

test.describe('Login Functionality', () => {

  test('Valid Login', async ({ loginPage }) => {

    description('Valid login with admin credentials');
    epic('Login Module');
    severity('critical');

    await loginPage.navigateTo();
    await loginPage.login(
      ENV.USERNAME,
      ENV.PASSWORD
    );

    await loginPage.verifyLoginSuccess();
  });

});
