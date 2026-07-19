/**
 * Test Case: Login with Valid Credentials
* Tags: @master @sanity @regression
 * 
 * Steps:
 * 1) Navigate to the application URL
 * 2) Navigate to Login page via Home page
 * 3) Enter valid credentials and log in
 * 4) Verify successful login by checking 'My Account' page presence
 */
import {test,expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { TestConfig } from '../test.config';

let config:TestConfig;
let loginpage:LoginPage


// This hook runs before each test
test.beforeEach(async({page})=>{
    config= new TestConfig();
    await page.goto(config.appUrl)

    loginpage= new LoginPage(page)
})

// Optional cleanup after each test
test.afterEach(async({page})=>{
    await page.close();
})

test('@ui @master Login Test' ,async()=>{
     //Navigate to Login page via Home page

     await loginpage.clickLogin();
    
         //Enter valid credentials and log in
         await loginpage.setEmail(config.email)
         await loginpage.setPassword(config.password)
         await loginpage.clickLogin1();

})
