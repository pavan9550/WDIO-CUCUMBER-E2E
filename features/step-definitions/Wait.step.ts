import {Given , Then , When} from '@cucumber/cucumber';
Given(/^I am on dynamic laoding (.+) page$/,async (appURL : string)=>{
    await browser.url(appURL);
    await browser.maximizeWindow();
});
When(/^I click on start button$/,async ()=>{
    const Start_Btn = $('#start button');
    await (await Start_Btn).click();
});
Then(/^i validate loading Icon$/,async ()=>{
    const loadingIcon = $('#loading img');
    const msg         = $('#finish h4');
    await (await loadingIcon).waitForDisplayed({timeout:5000})
    await (await loadingIcon).waitForDisplayed({timeout:5000,reverse:true,timeoutMsg:'Error Message'})
    await (await msg).waitForDisplayed({timeout:10000});
    await expect(msg).toBeDisplayed();
});