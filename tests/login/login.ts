import { fixture, test } from "testcafe";
import Login from "../../src/pages/login_page";

const login = new Login()

fixture("SauceLab - Login").meta({type:"smoke", epic:"login"})
    .page("https://www.saucedemo.com/");

test("Login with standard_user", async (t) => {    
    await login.LogInWith("standard_user", "secret_sauce");
    await login.checkValidLogIn();
})

test("Login without username", async (t) => {
    await login.LogInWith(" ", "secret_sauce");
    await login.checkNoLogin();
})

test("Login without password", async (t) => {
    await login.LogInWith("standard_user", " ");
    await login.checkNoLogin();
})

test("Login with wrong password", async (t) => {    
    await login.LogInWith("standard_user", "secret_sace");
    await login.checkNoLogin();
})

test("Login with wrong username", async (t) => {    
    await login.LogInWith("standar_user", "secret_sauce");
    await login.checkNoLogin();
})