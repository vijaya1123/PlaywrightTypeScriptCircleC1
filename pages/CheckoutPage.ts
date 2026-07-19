import {Page,expect, Locator} from '@playwright/test'
import { config } from 'process';

export class  CheckoutPage {

    private readonly  page:Page;
    
    private readonly  btnPlaceOrder:Locator
    private readonly txtName:Locator
    private readonly txtCountry:Locator
    private readonly  txtCity:Locator
    private  readonly txtCreditCart:Locator
    private readonly  txtMonth:Locator
    private readonly  txtYear:Locator
    private readonly  btnPurChase:Locator
    private readonly lblOrderConMsg: Locator;
    private readonly btnClose:Locator



    constructor(page:Page){
        this.page=page;
        this.btnPlaceOrder= page.locator('//button[contains(text(),"Place Order")]')
        this.txtName=  page.locator('#name')
        this.txtCountry= page.locator('#country')
        this.txtCity=  page.locator('#city')
        this.txtCreditCart= page.locator('#card')
        this.txtMonth= page.locator('#month')
        this.txtYear= page.locator('#year')
        this.btnPurChase= page.locator('//button[contains(text(),"Purchase")]')
        this.lblOrderConMsg = page.locator('//h2[text()="Thank you for your purchase!"]');
        this.btnClose=  page.locator('//button[contains(text(),"Close")]')

    }

       /**
     * click on purchase button
     */
    async  clickPurchase():Promise<void>{
        await this.btnPurChase.click();
    }

       /**
     * click on close button
     */
    async  clickClose():Promise<void>{
        await this.btnClose.click();
    }

       /**
     * click on place order button
     */
    async  clickPlaceOrder():Promise<void>{
        await this.btnPlaceOrder.click();
    }
    async  setFirstName(firstname:string): Promise<void>{
        await this.txtName.fill(firstname)
    }

     async  setCountry(country:string): Promise<void>{
        await this.txtCountry.fill(country)
    }

    async  setCity(city:string):Promise<void> {
        await this.txtCity.fill(city)
    }

    async setCreditCard(card:string):Promise<void>{
        await this.txtCreditCart.fill(card)
    }

    async  setMonth(month:string):Promise<void> {
        await this.txtMonth.fill(month)
    }

    async setYear(year:string):Promise<void> {
        await this.txtYear.fill(year)

    }

      async isOrderPlaced() {
        try {
            // Handle alert if present
            if (this.page.on('dialog', dialog => dialog.accept())) {
                await this.page.waitForEvent('dialog');
            }
            
            await expect(this.lblOrderConMsg).toHaveText("Thank you for your purchase!");
            return true;
        } catch (error) {
            console.log(`Error verifying order placement: ${error}`);
            return false;
        }
    }


}