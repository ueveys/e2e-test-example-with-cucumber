import { $, by, element, ElementFinder } from "protractor";

export class JhArtikelPage {
    public btnArtikelErstellen: ElementFinder;

    constructor() {
        this.btnArtikelErstellen= element(by.buttonText("Artikel erstellen")) ;
    }
}
