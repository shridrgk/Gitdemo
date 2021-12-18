"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
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
                "App Version": "0.3.2",
                "Test Environment": "STAGING",
                Browser: "Chrome  54.0.2840.98",
                Platform: "Windows 10",
                Parallel: "Scenarios",
                Executed: "Remote",
            },
        };
        reporter.generate(options);
    },
};
// Options to be passed to Jasmine-node.
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25mLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY3VjdW1iZXJjb25mLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVXLFFBQUEsTUFBTSxHQUFXO0lBQzFCLDRDQUE0QztJQUM1QyxtREFBbUQ7SUFFbkQsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsdURBQXVEO0lBQ3ZELFlBQVksRUFBRTtRQUNaLFdBQVcsRUFBRSxRQUFRO0tBQ3RCO0lBRUQsdUVBQXVFO0lBQ3ZFLDJDQUEyQztJQUMzQyxrQ0FBa0M7SUFDbEMsS0FBSyxFQUFFLENBQUMsMEJBQTBCLENBQUM7SUFDbkMsWUFBWSxFQUFFO1FBQ1osMEJBQTBCO1FBQzFCLElBQUksRUFBRSx1Q0FBdUM7UUFDN0MsTUFBTSxFQUFFLDZCQUE2QjtRQUVyQyxPQUFPLEVBQUU7WUFDUCx3QkFBd0IsRUFBRSxpQkFBaUI7WUFDM0MsaUJBQWlCO1NBQ2xCO0tBQ0Y7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsSUFBSSxRQUFRLEdBQUcsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDakQsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsV0FBVztZQUNsQixRQUFRLEVBQUUsZ0NBQWdDO1lBQzFDLE1BQU0sRUFBRSwrQkFBK0I7WUFDdkMsc0JBQXNCLEVBQUUsSUFBSTtZQUM1QixZQUFZLEVBQUUsSUFBSTtZQUNsQixRQUFRLEVBQUU7Z0JBQ1IsYUFBYSxFQUFFLE9BQU87Z0JBQ3RCLGtCQUFrQixFQUFFLFNBQVM7Z0JBQzdCLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUUsV0FBVztnQkFDckIsUUFBUSxFQUFFLFFBQVE7YUFDbkI7U0FDRixDQUFDO1FBQ0YsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDO0NBQ0YsQ0FBQztBQUNGLHdDQUF3QyJ9