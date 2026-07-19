
/**
 * Test Case: User Logout
 * 
 * Tags: @master @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Go to Login page from Home page
 * 3) Login with valid credentials
 * 4) Verify 'My Account' page
 * 5) Click on Logout link
 * 6) Click on Continue button
 * 7) Verify user is redirected to Home Page
 */
import {test,expect} from '@playwright/test'
import { TestConfig } from '../test.config'
import { LoginPage } from '../pages/LoginPage'
import { MyAccountPage } from '../pages/MyAccountPage'
import {LogoutPage} from '../pages/LogoutPage'
import { HomePage } from '../pages/HomePage'

// Declare shared variables
let config:TestConfig;
let loginPage:LoginPage
let myAccountPage:MyAccountPage
let logoutpage:LogoutPage
let homePage:HomePage


// Setup before each test
test.beforeEach(async({page})=>{
    config= new TestConfig();   // Load test config
    await page.goto(config.appUrl) // Step 1: Navigate to app URL

      // Initialize page objects
  loginPage=  new LoginPage(page)
  myAccountPage=  new MyAccountPage(page)
  logoutpage=  new LogoutPage(page)
  homePage =  new HomePage(page)

})

// Optional cleanup after each test
test.afterEach(async({page})=>{
    await page.close(); // Close the browser tab (helps keep tests clean)
});


test('@ui @master @sanity Logout Page Test Case', async({page})=>{

    await loginPage.clickLogin();
    await loginPage.setEmail(config.email)
    await loginPage.setPassword(config.password)
    await loginPage.clickLogin1();

    homePage= await logoutpage.clickLogout();

      expect(await homePage.isHomePageExists()).toBe(true);
})

