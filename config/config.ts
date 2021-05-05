import * as path from "path";
import { browser, Config } from "protractor";
import { Reporter } from "../support/reporter";
const jsonReports = process.cwd() + "/reports/json";

export const config: Config = {

    //seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    directConnect:true,

    SELENIUM_PROMISE_MANAGER: false,

    baseUrl: "http://192.168.1.239:5049",

    capabilities: {
        browserName: "firefox",
    },

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
        "../../features/huebner.feature",
        "../../features/artikel.feature",
    ],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        Reporter.createDirectory(jsonReports);
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:./reports/json/cucumber_report.json",
        require: ["../../typeScript/stepdefinitions/*.js", "../../typeScript/support/*.js"],
        tags: "@CucumberScenario or @ProtractorScenario or @TypeScriptScenario or @OutlineScenario or @MeinVeysel",
        strict: true,
        
    },

    onComplete: () => {
        Reporter.createHTMLReport();
    },
};
