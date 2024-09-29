import {test} from '@playwright/test';

test.describe("Test Group1", () => {
    test.beforeAll( async () => {
        console.log("BeforeALL executed");
    })
    test.afterAll( async () => {
        console.log("AfterALL executed");
    })

    test.beforeEach( async () => {
        console.log("beforeEach executed");
    })
    test.afterEach( async () => {
        console.log("afterEach executed");
    })

    test("Test Case 1", async ({page}) =>{
        console.log("Test Case 1 executed");
    } );

    test("Test Case 2", async ({page}) =>{
        console.log("Test Case 2 executed");
    } );

    test("Test Case 3", async ({page}) =>{
        console.log("Test Case 3 executed");
    } );
 })