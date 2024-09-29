import {expect, test} from "@playwright/test"

test('Getting the title of the page', async ({ page }) => {
    // go to https://practice.cydeo.com/
    await page.goto('https://practice.cydeo.com/');
    // get the title of the page
    let actualTitle = await page.title();
    console.log(actualTitle);
    //expect(actualTitle).toBe("Practice");

});

test('Getting the current URL of the page', async ({ page }) => {
    await page.goto('https://practice.cydeo.com/');
    let getCurrentURL = await page.url();
    console.log(getCurrentURL);
});

test('Set the windown size of the browser', async ({ page }) => {
    await page.setViewportSize({width: 1280, height: 720})
    await page.goto('https://practice.cydeo.com/');
});