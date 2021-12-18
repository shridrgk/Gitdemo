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
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
(0, cucumber_1.Before)({ tags: "@calculatortesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.manage().window().maximize();
}));
(0, cucumber_1.After)({ tags: "@calculatortesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test is completed");
}));
(0, cucumber_1.Before)({ tags: "@Angulartesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test is started");
}));
(0, cucumber_1.After)({ tags: "@Angulartesting" }, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Test is completed");
}));
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwZGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxpREFBMkQ7QUFDM0QsMkNBQXFDO0FBRXJDLElBQUEsaUJBQU0sRUFBQyxFQUFFLElBQUksRUFBRSxvQkFBb0IsRUFBRSxFQUFFLEdBQVMsRUFBRTtJQUNoRCxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGdCQUFLLEVBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDL0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGlCQUFNLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGdCQUFLLEVBQUMsRUFBRSxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxHQUFTLEVBQUU7SUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDSCxJQUFBLGdCQUFLLEVBQUMsVUFBZ0IsUUFBUTs7UUFDNUIsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUM1QyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=