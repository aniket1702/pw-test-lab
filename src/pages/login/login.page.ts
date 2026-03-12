
import { Page } from '@playwright/test';
import { LoginLocators } from "../../locators/login.locators";
import { BasePage } from "../base.page";


export class LoginPage extends BasePage {
  private readonly locators: LoginLocators;

  constructor(page: Page) {
    super(page);
    this.locators = new LoginLocators(page);
  }

  async login(username:string, password:string):Promise<void>
  {
    await this.fill(this.locators.usernameInput,username);
    await this.fill(this.locators.passwordInput,password);
    await this.click(this.locators.loginButton);

  }

}