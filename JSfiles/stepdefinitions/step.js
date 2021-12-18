"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const calculator_1 = require("../pageObjects/calculator");
const angularHomepage_1 = require("../pageObjects/angularHomepage");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
let calc = new calculator_1.calculator;
let angularPage = new angularHomepage_1.angularHomepage();
(0, cucumber_1.Given)('I Will navigate to {string} page', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    if (string == "calculator") {
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
    }
    else if (string == "AngularJS") {
        yield protractor_1.browser.get('https://angularjs.org/');
    }
}));
(0, cucumber_1.When)('Add two number {string} and {string}', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield calc.firstEditbox.sendKeys(string);
    yield calc.secondEditbox.sendKeys(string2);
}));
(0, cucumber_1.When)('I clicked on header page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield angularPage.anguarLink.click();
}));
(0, cucumber_1.When)('You will naviagte to angular page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to nerw page");
}));
(0, cucumber_1.Then)('Enter {string} in search box', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.sleep(3000);
    yield angularPage.search.sendKeys(string);
}));
(0, cucumber_1.Then)('The output displayed should be {string}', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield calc.go.click();
    yield calc.res.getText().then(function (res1) {
        expect(res1).to.equal(string);
    });
    // Write code here that turns the phrase above into concrete actions
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBkZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQXVEO0FBQ3ZELDBEQUF1RDtBQUN2RCxvRUFBaUU7QUFDakUsMkNBQXFDO0FBQ3JDLGdEQUF1QjtBQUN2QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsQ0FBQTtBQUN6QixJQUFJLFdBQVcsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUN4QyxJQUFBLGdCQUFLLEVBQUMsa0NBQWtDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUN2RCxvRUFBb0U7SUFDcEUsSUFBRyxNQUFNLElBQUUsWUFBWSxFQUFDO1FBQ3BCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztLQUNsRTtTQUVJLElBQUcsTUFBTSxJQUFFLFdBQVcsRUFBQztRQUN4QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7S0FDOUM7QUFDSCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsc0NBQXNDLEVBQUUsQ0FBTSxNQUFNLEVBQUUsT0FBTyxFQUFFLEVBQUU7SUFDcEUsb0VBQW9FO0lBQ3BFLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsTUFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsSUFBQSxlQUFJLEVBQUMsMEJBQTBCLEVBQUUsR0FBUyxFQUFFO0lBQzFDLG9FQUFvRTtJQUNwRSxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFdkMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLG1DQUFtQyxFQUFFLEdBQVMsRUFBRTtJQUNuRCxvRUFBb0U7SUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyw4QkFBOEIsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQ3BELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3pCLE1BQU0sV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDM0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILElBQUEsZUFBSSxFQUFDLHlDQUF5QyxFQUFHLENBQU0sTUFBTSxFQUFFLEVBQUU7SUFDL0QsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJO1FBQ3hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ0Ysb0VBQW9FO0FBSXRFLENBQUMsQ0FBQSxDQUFDLENBQUMifQ==