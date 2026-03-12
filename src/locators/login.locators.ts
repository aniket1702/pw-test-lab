import { Page, Locator } from '@playwright/test';
export class LoginLocators {

    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    

    constructor(private readonly page:Page)
    {
        this.usernameInput = page.getByRole('textbox',{name:/username/i});
        this.passwordInput = page.getByRole('textbox',{name:/password/i});
        this.loginButton = page.getByRole('button', { name: /login/i });
    }


}