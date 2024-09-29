import {test} from '@playwright/test'

test.describe('@lib01','Test Group1', () => {
    test.beforeEach( async ({page}) => {
        await page.goto('https://practice.cydeo.com/');
        console.log("BeforeALL executed");
    })
    test.afterEach( async ({page}) => {
    })

    test('Getting the title of the page', async ({ page }) => {
        console.log(await page.title());
    });
    
    test('Getting the current URL of the page', async ({ page }) => {
        console.log(page.url());
    });

});