import {Page, Locator} from '@playwright/test'

export class ProductPage{


    private  readonly page:Page
    private readonly  btnAddToCart:Locator
       private readonly  cartLink:Locator
       private readonly  producttable:Locator
       private readonly  productHeading:Locator
        

    constructor(page:Page){
        this.page=page;
        this.btnAddToCart= page.locator('//a[contains(text(),"Add to cart")]')
        this.cartLink= page.locator('//a[contains(text(),"Cart")]')
        this.producttable =page.locator('//table[@class="table table-bordered table-hover table-striped"]')
        this.productHeading= page.locator('table tr:nth-child(1) td:nth-child(2)')
    }

    /**
     * Adds product to cart
     */
    async addToCart():Promise<void>{
        await this.btnAddToCart.click();
    }

        /**
     * click on cart link
     */
    async  cartItems():Promise<void>{
        await this.cartLink.click();
    }



}