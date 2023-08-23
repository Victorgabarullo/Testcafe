import { Selector, t } from "testcafe";

const usernameFld = Selector("#user-name");
const passwordFld = Selector("#password");
const loginBtn = Selector("#login-button");
const errorMessage = Selector(".error-message-container");

class Login {

    async LogInWith(username: string, password: string) {
        await t.typeText(usernameFld, username)
            .typeText(passwordFld, password)
            .click(loginBtn)
    }

    async checkValidLogIn() {
        await t.expect(loginBtn.exists).notOk();
    }

    async checkNoLogin() {
        await t.expect(errorMessage.exists).ok();
    }

}

export default Login