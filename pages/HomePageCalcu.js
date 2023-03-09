let HomePageCalcu = function(){

    let firsNumber_Input = element(by.model('first'));
    let secondNumber_Input =element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){

        browser.get(url);
    };
    
    this.enterFirstNumber = function(firstNo){

        firsNumber_Input.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(SecondNo){

        secondNumber_Input.sendKeys(SecondNo);


    };

    this.cickGo = function(){

        goButton.click();

    };

    this.verifyResult = function(result){

        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);

    };

};
module.exports =  new HomePageCalcu();