import { $, by, element, ElementFinder } from "protractor";

export class JhLoginStartseite {
    public nutzer: ElementFinder;
    public password: ElementFinder;
    public btnLogin: ElementFinder;
    public menuArtikel: ElementFinder; 

    constructor() {
        this.nutzer= $("#mat-input-0") ;
        this.password=$("#mat-input-1");
        this.btnLogin=$("button[class='mat-raised-button mat-button-base mat-primary']");
        this.menuArtikel=element(by.linkText("Artikel"));
    }
}
