"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firstEditbox = (0, protractor_1.element)(protractor_1.by.model('first'));
        this.secondEditbox = (0, protractor_1.element)(protractor_1.by.model('second'));
        this.go = (0, protractor_1.element)(protractor_1.by.id('gobutton'));
        this.getResult = protractor_1.element.all(protractor_1.by.repeater('result in memory'));
        this.res = (0, protractor_1.element)(protractor_1.by.repeater('result in memory')).element(protractor_1.by.css("td:nth-child(3)"));
    }
    result(getResult) {
        getResult.each((item) => {
            item.element(protractor_1.by.css("td:nth-child(3)")).getText().then(function (res) {
                console.log(res);
            });
        });
    }
}
exports.calculator = calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL2NhbGN1bGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQTBFO0FBRTFFLE1BQWEsVUFBVTtJQVFuQjtRQUNJLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsYUFBYSxHQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEVBQUUsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQUcsR0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBRTdGLENBQUM7SUFFQSxNQUFNLENBQUMsU0FBNEI7UUFDaEMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRztnQkFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztDQUNBO0FBeEJELGdDQXdCQyJ9