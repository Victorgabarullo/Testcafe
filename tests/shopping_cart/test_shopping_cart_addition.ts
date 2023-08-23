import { fixture, test } from "testcafe";
import Login from "../../src/pages/login_page";
import Products from "../../src/pages/products_page";

const login = new Login()
const product = new Products()

fixture("SauceLab - Add products to Shoppin Cart")
    .page("https://www.saucedemo.com/")

test("Add one product to shopping cart", async (t) => {
    await login.LogInWith("standard_user", "secret_sauce")
    await product.addProductToShoppingCart();
})