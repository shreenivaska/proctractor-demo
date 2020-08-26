let homepage = function() {
    let firstNumber_input = element(by.model('first'));
    let secondNUmber_input = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));
    let ddlOperator = element(by.model('operator'));

    this.load = function(url) {
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNumber) {
        firstNumber_input.sendKeys(firstNumber);
    };
    this.enterSecondNumber = function(secondNumber) {
        secondNUmber_input.sendKeys(secondNumber);
    };
    this.clickGo = function() {
        goButton.click();
    };
    this.selectOperator = function(value) {
        ddlOperator.all(by.xpath('option[.="' + value + '"]')).click();
    };

    this.verifyResult = function(result) {
        let output = element(by.cssContainingText('.ng-binding', '444'));
        expect(output.getText()).toEqual(result);
    };
};

module.exports = new homepage();