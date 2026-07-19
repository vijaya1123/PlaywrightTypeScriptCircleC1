import {Page, Locator, expect} from '@playwright/test'

export class HomePage {

    private readonly page:Page;

    private  readonly lnkLogin:Locator
    private readonly lnkRegister:Locator
        private readonly productName:Locator;



    constructor(page:Page){
        this.page= page;

                // Initialize locators
        this.lnkLogin= page.locator('//a[contains(text(),"Log in")]')
        this.lnkRegister= page.locator(' //a[contains(text(), "Sign up")]')
         this.productName=  page.locator('//a[contains(text(),"Samsung galaxy s6")]')
  
    }

        // Check if HomePage exists
        async isHomePageExists(){
            let title:string =await this.page.title();
            if(title){
                return true
            }else{
                return false
            }
        }

          // Click "Register" link

          async clickRegister(){
            try{
            await this.lnkRegister.click();
          }catch(error){
            console.log(`Exception occured while clicking Register  ${error}`)
            throw error;
          }
        }

          async clickLogin(){
            try{
                await this.lnkLogin.click();
            }catch(error){
                console.log(`Exception occurred while clicking 'Login': ${error}`)
                throw  error
            }
          }

          async  clickProduct():Promise<void> {
            await  this.productName.click();
          }


}