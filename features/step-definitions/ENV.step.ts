import {Given , Then} from '@cucumber/cucumber';

Given(/^I Open the app url$/,async ()=>{
    await browser.maximizeWindow();
    await browser.url('/');
});
Then(/^I Retrive the Browser title$/,async ()=>{
    const title = await browser.getTitle();
    console.log("Application Title is :" ,title);
})