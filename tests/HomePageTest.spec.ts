import {test,expect} from '@playwright/test'
import { TestConfig } from '../test.config'


test.describe('Demo Blaze Home Page' , ()=>{
    let config:TestConfig;

    test.beforeEach(async({page})=>{
        config= new TestConfig();
        await page.goto(config.appUrl)
          await expect(page).toHaveURL(/^(http|https):\/\//); 
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('@ui Should load Home page and show title', async({page})=>{
        const title=  await page.title();
        console.log(title)
        expect(title).toBeTruthy();
        expect(title.length).toBeGreaterThan(2)
        await expect(page).toHaveTitle('STORE')
    })

    ////a[contains(text(), 'PRODUCT STORE')]

    test('@ui Should display main logo and header element', async({page})=>{

        const logo=  page.locator('//a[contains(text(), "PRODUCT STORE")]')
        await expect(logo).toBeVisible();

        await expect(page.locator('nav').first()).toBeVisible();
    })


})