import { ElementFinder,element,by, ElementArrayFinder } from "protractor";

export class calculator
{
    firstEditbox:ElementFinder;
    secondEditbox:ElementFinder;
    go:ElementFinder;
    getResult:ElementArrayFinder;
    res:ElementFinder

    constructor(){
        this.firstEditbox=element(by.model('first'));
        this.secondEditbox=element(by.model('second'));
        this.go=element(by.id('gobutton'));
        this.getResult=element.all(by.repeater('result in memory'));
        this.res=element(by.repeater('result in memory')).element(by.css("td:nth-child(3)"));

}

 result(getResult:ElementArrayFinder) {
    getResult.each((item)=>{
        item.element(by.css("td:nth-child(3)")).getText().then(function (res) {
            console.log(res)
        })
    })
}
}