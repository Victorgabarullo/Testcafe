import { Selector, t } from "testcafe"

const shoppingCartIcon = Selector(".shopping_cart_link")
const productItem = Selector("div.inventory_item")
const inventoryList = Selector(".inventory_list")

class Products {

    productsAdded: any = [];

    async addProductToShoppingCart(indexOfProduct: number = 0) {
        await t.expect(inventoryList.exists).ok()
        if (indexOfProduct >= productItem.length) indexOfProduct = productItem.length - 1
        const item = productItem.nth(indexOfProduct)
        const itemName = await item.find(".inventory_item_name").textContent
        console.log(itemName)
        const itemPrice = await item.find(".pricebar .inventory_item_price").textContent
        console.log(itemPrice)
        const itemBtn = item.find("button")        
        this.productsAdded.push({ product: itemName, price: itemPrice })
        await t.click(item.find("button"))
        const btnMessage = await itemBtn.textContent
        await t.expect(btnMessage.toLowerCase()).eql("remove")
    }

}

export default Products