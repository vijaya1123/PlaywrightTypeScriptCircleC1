import {Page, Locator} from '@playwright/test'
import { HomePage } from './HomePage'

export class LogoutPage{

    private readonly page:Page

    private readonly  lnkLogout:Locator


    constructor(page:Page){
        this.page=page

        this.lnkLogout= page.locator('//a[contains(text(),"Log out")]')
    }

        /**
     * Clicks the Continue button after logout
     * @returns Promise<HomePage> - Returns instance of HomePage
     */

          async clickLogout():Promise<HomePage>{
                await this.lnkLogout.click();
                return new HomePage(this.page)
            }
          }
