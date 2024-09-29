import { test } from '@playwright/test';

//create a test group with three tests in it with empty test body, all functions must be async
test.describe('Group1', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("https://practice.cydeo.com/");
    });

    test('check() check method checks the radio buttons and checkboxes if they havent been checked yet', async ({page}) => {
        let checkboxesLink = page.locator("text ='Checkboxes'")
        checkboxesLink.click();

        let checkBox1 = page.locator("input#box1")
        await checkBox1.check();
    });

    test('uncheck() check method unchecks the radio buttons and checkboxes if they have been checked', async ({page}) => {
        let checkboxesLink = page.locator("text ='Checkboxes'")
        checkboxesLink.click();

        let checkBox2 = page.locator("input#box2")
        await checkBox2.uncheck();
    });

    test('selectOption()', async ({page}) => {
        await page.locator("text ='Dropdown'").click();
        let simpleDropdown = page.locator("//select[@id='dropdown']");
        //select by value OR visible text
        //await simpleDropdown.selectOption("1");

        //select by visible text preffered way
        //await simpleDropdown.selectOption({label: "Option 1"});

        //select by index
        await simpleDropdown.selectOption({index: 1});
        
        await page.waitForTimeout(3000);
    });
    test('innerText() retrieves the visble text' , async ({page}) => {
        let headerElement = page.locator ("//span[@class='h1y']");
        let actualTest = await headerElement.innerText();
        console.log(actualTest);

    });
    test('inputValue() only works with <input> tag or <textarea> OR <select>' , async ({page}) => {

        let inputsLink = page.getByText("Inputs");
      //  await inputsLink.scrollIntoViewIfNeeded();
      //  await page.waitForTimeout(3000);

        await inputsLink.click();

        let inputBox = page.locator("//input[@type='number']");


        await inputBox.fill("123");

        let inputValue = await inputBox.inputValue();

        console.log(inputValue);
    });
});