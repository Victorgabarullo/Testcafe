import { Selector, fixture, test } from "testcafe";

const username = Selector("#user-name");
const password = Selector("#password");
const loginBtn = Selector("#login-button");
const carLink = Selector(".shopping_cart_link");
const errorMessage = Selector(".error-message-container");

fixture("Login - DEV - SMOKE").meta({env:"dev", type:"smoke"})
    .page("https://www.saucedemo.com/");

test("Iniciar sesion con usuarios validos", async (t) => {
    await t.typeText(username, "standard_user")
    .typeText(password, "secret_sauce")
    .click(loginBtn)
    .expect(carLink.exists).ok()
})

test("Iniciar sesion con usuario invalidos", async (t) => {
    await t.typeText(username, "Victor")
    .typeText(password, "secret_sauce")
    .click(loginBtn)
    .expect(errorMessage.exists).ok()
})