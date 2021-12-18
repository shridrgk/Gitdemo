import { ElementFinder,element,by } from 'protractor';
export class angularHomepage{
    anguarLink:ElementFinder;
    search:ElementFinder

    constructor(){
        this.anguarLink=element(by.linkText('angular.io'));
        this.search=element(by.css('input[type="search"]'));

    }
    }