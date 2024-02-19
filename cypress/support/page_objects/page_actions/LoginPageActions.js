const {LoginPageLocators} = require('../page_elements/LoginPageElements.json')

export class LoginPageActions {
    username_selector = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password_selector = ':nth-child(3) >.oxd-input-group > :nth-child(2) >.oxd-input'
    loginButton_selector = '.oxd-button'
    username(value){
        cy.get(LoginPageLocators.username_selector).type(value)
        return
    }

    password(value){ 
        cy.get(LoginPageLocators.password_selector).type(value)
        return
    }

    loginButton(){
        cy.get(LoginPageLocators.loginButton_selector).click();
        return
    }
}