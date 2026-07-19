import {Page, Locator} from '@playwright/test'

export class LoginPage {

    private readonly page:Page 

    //Locators
    private readonly txtEmailAddress:Locator;
    private readonly txtPassword:Locator;
    private readonly  btnLogin:Locator;
    private readonly clkLogin:Locator;
    private readonly  txtErrorMessage:Locator;
    private readonly userHeading:Locator;
    private readonly lnkLogout:Locator;

    constructor(page:Page){
        this.page=page;

               // Initialize locators with CSS selectors
        this.txtEmailAddress= page.locator('#loginusername')
        this.txtPassword= page.locator('#loginpassword')
        this.clkLogin= page.locator('#login2')
        this.btnLogin= page.locator('//button[normalize-space()="Log in"]')
          this.txtErrorMessage=page.locator('.alert.alert-danger.alert-dismissible');
               this.userHeading=  page.locator('#nameofuser');
               this.lnkLogout= page.locator('//a[contains(text(),"Log out")]')
    }

        /**
     * Sets the email address in the email field
     * @param email - Email address to enter
     */
        async setEmail(email:string){
            await this.txtEmailAddress.fill(email)
        }


          /**
     * Sets the password in the password field
     * @param pwd - Password to enter
     */
        async setPassword(pass:string){
            await this.txtPassword.fill(pass)
        }

          async isLogoutLinkExists(): Promise<boolean>{
        try{
            const isUservisible= await this.lnkLogout.isVisible();
            return isUservisible;
        }catch(error){
            console.log(`Error checking My account Page Visiblity  ${error}`)
            return false;
        }
    
      }



           /**
     * Clicks the login button
     */
       async clickLogin(){
        await this.clkLogin.click();

       }

         async getloginErrorMessage():Promise<null | string>{
       
        return(this.txtErrorMessage.textContent());
    }


            /**
     * Clicks the login button
     */
       async clickLogin1(){
        await this.btnLogin.click();

       }



               /**
     * Performs complete login action
     * @param email - Email address to enter
     * @param password - Password to enter
     */
       async login(email :string, pass:string){
        await this.setEmail(email)
        await this.setPassword(pass)
        await this.btnLogin.click();
       }


}