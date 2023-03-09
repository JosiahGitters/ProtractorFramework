let HomePageCalcu = require('../pages/HomePageCalcu');

describe('Demo Calculator Tests', function(){

    it('additon test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
            HomePageCalcu.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
            HomePageCalcu.enterFirstNumber('8');

        //element(by.model('second')).sendKeys('3');
            HomePageCalcu.enterSecondNumber('11');

        //element(by.css('[ng-click="doAddition()"]')).click();
            HomePageCalcu.cickGo();
        
        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
            HomePageCalcu.verifyResult('19');

        browser.sleep(2000)

        
    });

    it('additon test',function(){

        //browser.get('http://juliemr.github.io/protractor-demo/');
            HomePageCalcu.get('http://juliemr.github.io/protractor-demo/');

        //element(by.model('first')).sendKeys('2');
            HomePageCalcu.enterFirstNumber('8');

        //element(by.model('second')).sendKeys('3');
            HomePageCalcu.enterSecondNumber('11');

        //element(by.css('[ng-click="doAddition()"]')).click();
            HomePageCalcu.cickGo1();
        
        //let result = element(by.cssContainingText('.ng-binding','5'));
        //expect(result.getText()).toEqual('5');
            HomePageCalcu.verifyResult('19');

        browser.sleep(2000)

        
    });



});