import {Given,Then} from '@cucumber/cucumber';

Given(/^I Open the Browser and load (.+)$/, async function (url) {
    await browser.url(url);
    await browser.maximizeWindow();
  });

Then(/^I should see a header saying (.+)$/, async function (header) {
    //const headerText = await $('.heading')
    //const headerText = await $("h1[class='heading']")
    const headerText = await $("//h1[@class='heading']");
    expect(await headerText.getText()).toEqual(header);
  });