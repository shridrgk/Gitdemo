import { Config } from "protractor";
import * as reporter from "cucumber-html-reporter";
export let config: Config = {
  // The address of a running selenium server.
  // seleniumAddress: 'http://localhost:4444/wd/hub',

  directConnect: true,
  framework: "custom",
  frameworkPath: require.resolve("protractor-cucumber-framework"),

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: "chrome",
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ["../features/demo.feature"],
  cucumberOpts: {
    // require step definition
    tags: "@calculatortesting or @Angulartesting",
    format: "json:./cucumber_report.json",

    require: [
      "./stepdefinitions/*.js", // accepts a glob
      // accepts a glob
    ],
  },

  onComplete: () => {
    var reporter = require("cucumber-html-reporter");
    var options = {
      theme: "bootstrap",
      jsonFile: "./JSfiles/cucumber_report.json",
      output: "./report/cucumber_report.html",
      reportSuiteAsScenarios: true,
      launchReport: true,
      metadata: {
        "App Version": "0.0.1",
        "Test Environment": "STAGING",
        Browser: "Chrome  96.0.4664.45 ",
        Platform: "Windows 10",
        Parallel: "Scenarios",
        Executed: "Remote",
      },
    };
    reporter.generate(options);
  },
};
// Options to be passed to Jasmine-node.
