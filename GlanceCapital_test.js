Feature('TestBordo');

Scenario('test something', ({ I }) => {
    //Login

    I.amOnPage('/');
    I.click('//a[@class="btn btn-link"]');
    I.wait(2);
    I.fillField('//input[@id="input-email"]',"osman.saral+113@gmail.com");
    I.fillField('//input[@id="input-password"]',"123qweASD");
    I.click('//button[@id="btn-continue"]');
    I.wait(8);

    //Account Check

    I.click('//div[text()="Checking"]');
    I.wait(4);
    I.click('//a[@href="/dashboard"]');
    I.wait(4);
    I.click('//div[text()="Line of Credit"]')
    I.wait(4);
    I.click('//a[@href="/dashboard"]');
    I.wait(2);

    //Pay Bills

    I.click('//button[text()="Pay Bills"]');
    I.wait(4);
    I.click('//div[@class="react-select__indicators css-1wy0on6"]');
    I.wait(5);
    I.click('//div[@id="react-select-2-listbox"]');
    I.wait(4);
    I.click('//button[text()="Next"]');
    I.wait(4);
    I.fillField('//input[@class="form-control"]',"1");
    I.wait(4);
    I.click('//button[text()="Next"]');
    I.wait(5);
    I.click('//button[@class="btn btn-light"]');
    I.wait(5);
    I.click('//button[@class="btn btn-light btn-block"]');
    I.wait(2);

    //Move Money

    I.click('//button[text()="Move Money"]');
    I.wait(4);
    I.click('//div[text()="Send Money"]');
    I.wait(4);
    I.click('//div[@class="react-select__indicators css-1wy0on6"]');
    I.wait(5);
    I.click('//div[@id="react-select-2-listbox"]');
    I.wait(1);
    I.click('//button[text()="Next"]');
    I.wait(4);
    I.fillField('//input[@class="form-control"]',"1");
    I.wait(4);
    I.fillField('//input[@id="note"]',"Test Note");
    I.wait(4);
    I.click('//button[text()="Next"]');
    I.wait(2);
    I.click('//button[text()="Move Money"]');
    I.wait(4);

    //Between Accounts

    I.click('//div[text()="Between Accounts"]');
    I.wait(4);
    I.fillField('//input[@class="form-control"]',"1");
    I.wait(4);
    I.fillField('//input[@id="note"]',"Test Note");
    I.wait(4);
    I.click('//button[text()="Next"]');
    I.wait(3);

    //Side Bar Check

    I.click('//a[@href="/transactions"]');
    I.wait(3);
    I.click('//a[@href="/accounts"]');
    I.wait(3);
    I.click('//a[@href="/mastercard"]');
    I.wait(3);

    //Logout

    I.click('//a[@href="/api/auth/logout"]');
    pause();
});
