"use strict";
const environments = ["TEST", "UAT", "PROD"];

function selectEnvironment() {
    this.environment = (process.env.ENVIRONMENT).toUpperCase();
    this.application = (process.env.APPLICATION).toUpperCase();
    this.cfcURLs = {
        "TEST": "",
        "UAT": "",
        "PROD": ""
    };
    this.nexthubURLs = {
        "TEST":"",
        "UAT":"",
        "PROD":""
    };

    if(!environments.includes(this.environment)) {
        throw new Error("Please provide either of three values(PROD,UAT,TEST) in the .env file");
    }

    this.envToTest = this.application === "CFC" ? this.cfcURLs[this.environment] : this.nexthubURLs[this.environment];
    return this.envToTest;
}
module.exports = new selectEnvironment();
