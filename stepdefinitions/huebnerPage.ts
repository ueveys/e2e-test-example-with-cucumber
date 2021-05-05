import { browser } from "protractor";
import { JhArtikelPage } from "../pages/artikelPage";
import { JhLoginStartseite } from "../pages/startseite";
const { Then, Given, When } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const jh: JhLoginStartseite = new JhLoginStartseite();
const artikel: JhArtikelPage = new JhArtikelPage();
var helpers = require('protractor-helpers');

Given('gehe auf die seite Prüfsoftware seite', function () {
     // Write code here that turns the phrase above into concrete actions
});


When('tippe nutzer {string} ein', async (string)=> {
     // Write code here that turns the phrase above into concrete actions
     await jh.nutzer.sendKeys(string);
});


When('tippe password {string} ein', async (string)=> {
     // Write code here that turns the phrase above into concrete actions
     await jh.password.sendKeys(string);
});

When('einloggen', async ()=> {
     // Write code here that turns the phrase above into concrete actions
     await helpers.waitForElement(jh.btnLogin, 10000);
     await jh.btnLogin.click();
});

When('Menu Artikel klicken', async ()=> {
     // Write code here that turns the phrase above into concrete actions
     await helpers.waitForElement(jh.menuArtikel, 10000);
     await jh.menuArtikel.click();
});

When('Btn Artikel erstellen klicken', async ()=> {
     // Write code here that turns the phrase above into concrete actions
     await artikel.btnArtikelErstellen.click();
});