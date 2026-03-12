import { Locator, Page, expect } from '@playwright/test';
import {URL } from '../constants/constants';

export class BasePage
{
    protected page:Page;
    constructor(page:Page)
    {
            this.page=page;
    }
    
    async navigateTo()
    {
        await this.page.goto(URL.baseURL);
    }

    async click(locator: Locator):Promise<void>
    {
        await locator.waitFor();
        await locator.click();
    }

    async fill(locators:Locator,value:string):Promise<void>
    {
        await locators.fill(value);
    }

    async getText(locator: Locator): Promise<string> 
    {
        return (await locator.innerText()).trim();
    }
}