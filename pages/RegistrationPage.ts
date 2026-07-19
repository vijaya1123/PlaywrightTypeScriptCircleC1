import {Page, Locator,expect} from '@playwright/test'

export class RegistrationPage {

    private readonly  page:Page

       // Locators
       private readonly  txtUserName:Locator
       private  readonly  txtPassword:Locator
       private readonly  btnLogin:Locator;
       private readonly  cartLink:Locator
    

       constructor(page:Page){
        this.page=page

        this.txtUserName= page.locator('#sign-username')
        this.txtPassword=  page.locator('#sign-password')
        this.btnLogin= page.locator('//button[text()="Sign up"]')
        this.cartLink= page.locator('//a[contains(text(),"Cart")]')
       
       }

        /**
     * Sets the first name in the registration form
     * @param fname - First name to enter
     */
      async setFirstName(fnm:string):Promise<void> {
        await this.txtUserName.fill(fnm);
      }

      
        /**
     * Sets the Password in the registration form
     * @param password -password to enter
     */
      async setPassword(pwd:string):Promise<void>{
        await this.txtPassword.fill(pwd);
      }

        /**
     * Clicks the login button
     */
    async clickLoginButton():Promise<void>{
        await this.btnLogin.click();
    }

   

          /**
     * Complete registration workflow
     * @param userData - Object containing registration data
     */

           async completeRegistration(userData:{
            firstName:string
            password:string
           }): Promise<void> {
            await this.setFirstName(userData.firstName)
            await this.setPassword(userData.password)
            await this.btnLogin.click();
           }
        }
//a[contains(text(),'Add to cart')]
//a[contains(text(),'Samsung galaxy s6')]
//a[contains(text(),'Cart')]
//a[contains(text(),'Delete')]
//button[contains(text(),'Place Order')]
//#name
//#country  #city #card  #month #year   //button[contains(text(),'Purchase')]

////table[@class='table table-bordered table-hover table-striped']
//table tr:nth-child(1) td:nth-child(2)
//  private readonly lblOrderConMsg: Locator;
////h2[text()='Thank you for your purchase!']

/*
{
  "name": "Ravali",
  "country": "Portugal",
  "city": "sintra",
  "creditCard": "9811 0111 0123",
  "month": "10",
  "year": "2024",
  "successMessage": "Thank you for your purchase!"
}
  */