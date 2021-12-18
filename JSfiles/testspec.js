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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const angularHomepage_1 = require("./pageObjects/angularHomepage");
const calculator_1 = require("./pageObjects/calculator");
describe('testing program', () => __awaiter(void 0, void 0, void 0, function* () {
    it('Addition test', () => __awaiter(void 0, void 0, void 0, function* () {
        //  browser.get('http://www.angularjs.org');
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        let calc = new calculator_1.calculator;
        function add(a, b) {
            return __awaiter(this, void 0, void 0, function* () {
                yield calc.firstEditbox.sendKeys(a);
                yield calc.secondEditbox.sendKeys(b);
                yield calc.go.click();
            });
        }
        yield add(3, 5);
        // await add(5, 4);
        // await add(5, 5);
        yield calc.getResult.count().then(function (res1) {
            console.log(res1);
        });
        calc.result(calc.getResult);
    }));
    it('Angular home page title validation', () => __awaiter(void 0, void 0, void 0, function* () {
        let angularPage = new angularHomepage_1.angularHomepage();
        yield protractor_1.browser.get('https://angularjs.org/');
        yield angularPage.anguarLink.click();
        yield protractor_1.browser.sleep(3000);
        yield angularPage.search.sendKeys("shri");
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUErRTtBQUMvRSxtRUFBZ0U7QUFDaEUseURBQXNEO0FBRXRELFFBQVEsQ0FBQyxpQkFBaUIsRUFBRSxHQUFTLEVBQUU7SUFDbkMsRUFBRSxDQUFDLGVBQWUsRUFBRSxHQUFTLEVBQUU7UUFDM0IsNENBQTRDO1FBQzdDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLENBQUE7UUFJeEIsU0FBZSxHQUFHLENBQUUsQ0FBUSxFQUFFLENBQVE7O2dCQUNsQyxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxNQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVyQyxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDMUIsQ0FBQztTQUFBO1FBRUQsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUk7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNyQixDQUFDLENBQUMsQ0FBQztRQUdFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBS3BDLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0NBQW9DLEVBQUUsR0FBUSxFQUFFO1FBQy9DLElBQUksV0FBVyxHQUFHLElBQUksaUNBQWUsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtRQUMzQyxNQUFNLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN6QixNQUFNLFdBQVcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTdDLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUEsQ0FBQyxDQUFDIn0=