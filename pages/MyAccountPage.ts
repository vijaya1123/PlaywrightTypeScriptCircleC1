import {Page, Locator} from '@playwright/test'
import {LogoutPage} from '../pages/LogoutPage'

export class MyAccountPage {

    private readonly page: Page;
    
    // Locators using CSS selectors
    private readonly userHeading: Locator;
    private readonly lnkLogout: Locator;
    
    constructor(page:Page){
        this.page=page;

            // Initialize locators with CSS selectors
        this.userHeading=  page.locator('#nameofuser');
        this.lnkLogout= page.locator('#logout2')
    }

       /**
     * Verifies if My Account page is displayed
     * @returns Promise<boolean> - Returns true if heading is visible
     */
      async isMyAccountExists(): Promise<boolean>{
        try{
            const isvisible= await this.userHeading.isVisible();
            return isvisible;
        }catch(error){
            console.log(`Error checking My account Page Visiblity  ${error}`)
            return false;
        }
    
      }

        /**
     * Clicks on Logout link
     * @returns Promise<LogoutPage> - Returns instance of LogoutPage
     */
       async clickLogoutPage():Promise<LogoutPage>{
        try{
            await this.lnkLogout.click();
            return new LogoutPage(this.page)
        }catch(error){
              console.log(`Unable to click Logout link: ${error}`);
            throw error; // Re-throw the error to fail the test
        }

       }

          /**
     * Alternative method to return page exists using title
     * @returns Promise<boolean> - Returns true if page title matches
     */
    async getPageTitle():Promise<string> {
        return (this.page.title());
    }
}
    


    
