import {test,expect} from '@playwright/test'
import {HomePage} from '../pages/HomePage'
import {ProductPage} from  '../pages/ProductPage'
import { TestConfig } from '../test.config'
import { CheckoutPage } from '../pages/CheckoutPage'

let config:TestConfig;
let homePage:HomePage
let productPage:ProductPage
let checkoutPage:CheckoutPage

test.beforeEach(async({page})=>{
    config=  new TestConfig();
    await page.goto(config.appUrl)

    homePage= new HomePage(page)
    productPage= new ProductPage(page)
    checkoutPage= new CheckoutPage(page)

})

test.afterEach(async({page})=>{
    await page.close();
})

test('@ui @master @sanity Add Product add to Cart', async({page})=>{
    await homePage.clickProduct();
        await page.waitForTimeout(4000)
    await productPage.addToCart();
        await page.waitForTimeout(4000)
    await  productPage.cartItems();
        await page.waitForTimeout(8000)
    await expect(page.locator('table tr:nth-child(1) td:nth-child(2)')).toContainText('Samsung galaxy s6')
         await page.waitForTimeout(4000)
    await checkoutPage.clickPlaceOrder();
    await page.waitForTimeout(3000)
       await checkoutPage.setFirstName("Viijay")
    await checkoutPage.setCountry("China")
    await checkoutPage.setCity("Texas")
    await checkoutPage.setCreditCard("12245433")
    await checkoutPage.setMonth("july")
    await checkoutPage.setYear("2027")
    await checkoutPage.clickPurchase();
       // await page.waitForTimeout(5000)
        //await checkoutPage.clickClose();

    await expect(page.locator('//h2[text()="Thank you for your purchase!"]')).toBeVisible


})

