# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDrivenTest.spec.ts >> @ui Login Test with Json Test data Valid login 
- Location: tests\LoginDataDrivenTest.spec.ts:14:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('//a[contains(text(),"Log out")]')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('//a[contains(text(),"Log out")]')
    10 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
       - unexpected value "hidden"
    - waiting for" https://www.demoblaze.com/index.html" navigation to finish...
    - navigated to "https://www.demoblaze.com/index.html"
    3 × locator resolved to <a href="#" id="logout2" class="nav-link" onclick="logOut()">Log out</a>
      - unexpected value "hidden"

```

```yaml
- navigation:
  - link "PRODUCT STORE":
    - /url: index.html
    - img
    - text: PRODUCT STORE
  - list:
    - listitem:
      - link "Home (current)":
        - /url: index.html
    - listitem:
      - link "Contact":
        - /url: "#"
    - listitem:
      - link "About us":
        - /url: "#"
    - listitem:
      - link "Cart":
        - /url: cart.html
    - listitem:
      - link "Log in":
        - /url: "#"
    - listitem
    - listitem
    - listitem:
      - link "Sign up":
        - /url: "#"
  - list:
    - listitem
    - listitem
    - listitem
  - img "First slide"
  - button "Previous"
  - button "Next"
- link "CATEGORIES":
  - /url: ""
- link "Phones":
  - /url: "#"
- link "Laptops":
  - /url: "#"
- link "Monitors":
  - /url: "#"
- list:
  - listitem:
    - button "Previous"
  - listitem:
    - button "Next"
- heading "About Us" [level=4]
- paragraph: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
- heading "Get in Touch" [level=4]
- paragraph: "Address: 2390 El Camino Real"
- paragraph: "Phone: +440 123456"
- paragraph: "Email: demo@blazemeter.com"
- heading "PRODUCT STORE" [level=4]:
  - img
  - text: PRODUCT STORE
- contentinfo:
  - paragraph: Copyright © Product Store
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | import {LoginPage} from  '../pages/LoginPage'
  3  | import {MyAccountPage} from '../pages/MyAccountPage'
  4  | import {TestConfig} from '../test.config'
  5  | import { DataProvider} from  '../utils/dataprovider'
  6  | import { HomePage } from '../pages/HomePage'
  7  | import { title } from 'process'
  8  | 
  9  | // Load JSON test data
  10 | const jsondata=  "testdata/logindata.json"
  11 | const jsonTestData=  DataProvider.getTestDataFromJson(jsondata)
  12 | 
  13 | for(const data  of jsonTestData) {
  14 | test(`@ui Login Test with Json Test data ${data.testName} `, async({page})=>{
  15 | 
  16 |    const config= new TestConfig();
  17 |    await page.goto(config.appUrl)
  18 |    //await page.waitForLoadState('networkidle')
  19 |    const  loginpage= new LoginPage(page)
  20 |     await  loginpage.clickLogin();
  21 |    await loginpage.login(data.email, data.password)
  22 |    await loginpage.clickLogin1();
  23 |     if (data.expected.toLowerCase() === 'success') {
  24 |    const currenttitle= await page.title();
  25 |    console.log(currenttitle)
  26 |    await expect(currenttitle).toContain('STORE')
> 27 |    await expect(page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
     |                                                                  ^ Error: expect(locator).toBeVisible() failed
  28 |     await expect(page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
  29 |      //expect(await page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
  30 |           //expect(await page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
  31 |      } else {
  32 |         //  verfiyLoginPopup()
  33 |           await expect(page.locator('#logInModal .modal-header')).toBeVisible();
  34 |              // await expect(page.locator('//h5[contains(text(),"Log in")]')).toBeVisible();
  35 |               // await expect(page.locator('(//label[contains(text(),"Username")])[2]')).toBeVisible();
  36 |             
  37 |           }
  38 | 
  39 | })
  40 | }
  41 | 
  42 |    
  43 | 
  44 | 
  45 | // Load CSV test data
  46 | 
  47 | const csvPath= "testdata/logindata.csv"
  48 | const csvTestData= DataProvider.getTestDataFromCsv(csvPath)
  49 | 
  50 | for(const data of csvTestData){
  51 |     test(`@ui Login Test with CSV Data Set ${data.testName} `, async({page})=>{
  52 | 
  53 |         const config= new TestConfig();
  54 |         await page.goto(config.appUrl)
  55 |        // await page.waitForLoadState('networkidle')
  56 |         const loginPage= new LoginPage(page)
  57 |           await loginPage.clickLogin();
  58 |         await  loginPage.login(data.email, data.password)
  59 |         await loginPage.clickLogin1();
  60 |          if (data.expected.toLowerCase() === 'success') {
  61 |    const currenttitle= await page.title();
  62 |    console.log(currenttitle)
  63 |    await expect(currenttitle).toContain('STORE')
  64 |    await expect(page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
  65 |     await expect(page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
  66 |      //expect(await page.locator('//a[contains(text(),"Log out")]')).toBeVisible();
  67 |           //expect(await page.locator('//a[contains(text(),"Welcome test")]')).toBeVisible();
  68 |      } else {
  69 |                  //  verfiyLoginPopup() 
  70 |                    await expect(page.locator('#logInModal .modal-header')).toBeVisible();
  71 |              // await expect(page.locator('//h5[contains(text(),"Log in")]')).toBeVisible();
  72 |                //await expect(page.locator('(//label[contains(text(),"Username")])[2]')).toBeVisible();
  73 |             
  74 |           }
  75 | 
  76 | })
  77 | }
```