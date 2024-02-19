/// <reference types="cypress" />

const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps")
const {  LoginPageActions } = require("../../../support/page_objects/page_actions/LoginPageActions")

const Login_Actions = new LoginPageActions()

Given('User is on Home Page', function () {
    // Write code here to navigate to Home Page

    return console.log('Navigating to Home Page')
})

When('User Navigates to Login Page', function () {
    // Write code here to navigate to Login Page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    return console.log('Navigating to Login Page')
})

When('User enters UserName and Password', function () {
    // Write code here to enter UserName and Password
    Login_Actions.username('Admin');
    Login_Actions.password('admin123');
    return console.log('Enter UserName and Password')
})

Then('Message displayed Login Successfully', function () {
    // Write code here to verify Message displayed Login Successfully
    Login_Actions.loginButton();
    return console.log('Login was Successful')
})