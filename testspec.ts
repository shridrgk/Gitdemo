import {
  browser,
  element,
  by,
  By,
  $,
  $$,
  ExpectedConditions,
} from "protractor";
import { angularHomepage } from "./pageObjects/angularHomepage";
import { calculator } from "./pageObjects/calculator";

describe("testing program", async () => {
  it("Addition test", async () => {
    //  browser.get('http://www.angularjs.org');
    await browser.get("http://juliemr.github.io/protractor-demo/");
    let calc = new calculator();

    async function add(a: number, b: number) {
      await calc.firstEditbox.sendKeys(a);
      await calc.secondEditbox.sendKeys(b);

      await calc.go.click();
    }

    await add(3, 5);
    await add(5, 4);
    await add(5, 5);

    await add(5, 10);
    await add(5, 25);

    await calc.getResult.count().then(function (res1) {
      console.log(res1);
    });

    calc.result(calc.getResult);
  });

  it("Angular home page title validation", async () => {
    let angularPage = new angularHomepage();
    await browser.get("https://angularjs.org/");
    await angularPage.anguarLink.click();
    await browser.sleep(3000);
    await angularPage.search.sendKeys("shri");
  });
});
