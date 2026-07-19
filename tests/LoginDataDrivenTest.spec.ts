import {test,expect} from '@playwright/test'
import {LoginPage} from  '../pages/LoginPage'
import {MyAccountPage} from '../pages/MyAccountPage'
import {TestConfig} from '../test.config'
import { DataProvider} from  '../utils/dataprovider'
import { HomePage } from '../pages/HomePage'
import { title } from 'process'

// Load JSON test data
const jsondata=  "testdata/logindata.json"
const jsonTestData=  DataProvider.getTestDataFromJson(jsondata)

for(const data  of jsonTestData) {
test(`@ui Login Test with Json Test data ${data.testName} `, async({page})=>{

   const config= new TestConfig();
   await page.goto(config.appUrl)
   //await page.waitForLoadState('networkidle')
   const  loginpage= new LoginPage(page)
    await  loginpage.clickLogin();
   await loginpage.login(data.email, data.password)
   await loginpage.clickLogin1();
    if (data.expected.toLowerCase() === 'success') {
   const currenttitle= await page.title();
   console.log(currenttitle)
   await expect(currenttitle).toContain('STORE')
   await expect(page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
    await expect(page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
     //expect(await page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
          //expect(await page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
     } else {
        //  verfiyLoginPopup()
          await expect(page.locator('#logInModal .modal-header')).toBeVisible();
             // await expect(page.locator('//h5[contains(text(),"Log in")]')).toBeVisible();
              // await expect(page.locator('(//label[contains(text(),"Username")])[2]')).toBeVisible();
            
          }

})
}

   


// Load CSV test data

const csvPath= "testdata/logindata.csv"
const csvTestData= DataProvider.getTestDataFromCsv(csvPath)

for(const data of csvTestData){
    test(`@ui Login Test with CSV Data Set ${data.testName} `, async({page})=>{

        const config= new TestConfig();
        await page.goto(config.appUrl)
       // await page.waitForLoadState('networkidle')
        const loginPage= new LoginPage(page)
          await loginPage.clickLogin();
        await  loginPage.login(data.email, data.password)
        await loginPage.clickLogin1();
         if (data.expected.toLowerCase() === 'success') {
   const currenttitle= await page.title();
   console.log(currenttitle)
   await expect(currenttitle).toContain('STORE')
   await expect(page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
    await expect(page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
     //expect(await page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
          //expect(await page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
     } else {
                 //  verfiyLoginPopup() 
                   await expect(page.locator('#logInModal .modal-header')).toBeVisible();
             // await expect(page.locator('//h5[contains(text(),"Log in")]')).toBeVisible();
               //await expect(page.locator('(//label[contains(text(),"Username")])[2]')).toBeVisible();
            
          }

})
}