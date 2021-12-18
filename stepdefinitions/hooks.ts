import { After, Before, Status } from "@cucumber/cucumber";
import { browser } from "protractor";

Before({ tags: "@calculatortesting" }, async () => {
  browser.manage().window().maximize();
});

After({ tags: "@calculatortesting" }, async () => {
  console.log("Test is completed");
});
Before({ tags: "@Angulartesting" }, async () => {
  console.log("Test is started");
});
After({ tags: "@Angulartesting" }, async () => {
  console.log("Test is completed");
});
After(async function (scenario) {
  if (scenario.result.status === Status.FAILED) {
    const screenshot = await browser.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});
