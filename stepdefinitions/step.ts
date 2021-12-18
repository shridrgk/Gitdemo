import { Given, Then, When } from "@cucumber/cucumber";
import { calculator } from '../pageObjects/calculator';
import { angularHomepage } from '../pageObjects/angularHomepage';
import { browser } from 'protractor';
import chai from "chai"
var expect = chai.expect; 

let calc = new calculator
let angularPage = new angularHomepage();
Given('I Will navigate to {string} page', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    if(string=="calculator"){
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    else if(string=="AngularJS"){
        await browser.get('https://angularjs.org/')
    }
  });

  When('Add two number {string} and {string}', async(string, string2) => {
    // Write code here that turns the phrase above into concrete actions
    await calc.firstEditbox.sendKeys(string);
    await calc.secondEditbox.sendKeys(string2);
  
  });

  When('I clicked on header page', async () => {
    // Write code here that turns the phrase above into concrete actions
    await angularPage.anguarLink.click();
    
  });

  When('You will naviagte to angular page', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to nerw page")
  });

  Then('Enter {string} in search box', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await browser.sleep(3000)
    await angularPage.search.sendKeys(string)
  });

  Then('The output displayed should be {string}',  async(string) => {
    await calc.go.click();
    await calc.res.getText().then(function (res1) {
        expect(res1).to.equal(string);
    })
    // Write code here that turns the phrase above into concrete actions
   
   
    
  });
