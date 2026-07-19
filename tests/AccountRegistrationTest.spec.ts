import {test,expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import { RegistrationPage } from '../pages/RegistrationPage'
import {MyAccountPage} from '../pages/MyAccountPage'
import {RandomDataUtil} from '../utils/randomDataGenerator'
import {TestConfig} from '../test.config'
import { afterEach } from 'node:test'

let homePage:HomePage
let registrationPage:RegistrationPage
let config:TestConfig;

/**
 * Single top-level beforeEach that initializes config, navigates to the app and
 * instantiates page objects assigned to the module-scoped variables.
 */
test.beforeEach(async({page})=>{
    config= new TestConfig();
    await page.goto(config.appUrl)

    homePage=  new HomePage(page)
    registrationPage=  new RegistrationPage(page)
})

//    // Page cleanup is handled automatically by Playwright

test.afterEach(async({page})=>{
    await page.close();
})

test('@ui @master  User Registration  @master @regression', async({page})=>{
    const currentitle= await page.title();
    console.log(currentitle)
    await expect(page).toHaveTitle('STORE')
    await  homePage.clickRegister();
      console.log('Filling registration form...');
      await registrationPage.setFirstName(RandomDataUtil.getFirstName())
      await registrationPage.setPassword(RandomDataUtil.getPassword())
      await registrationPage.clickLoginButton();

})