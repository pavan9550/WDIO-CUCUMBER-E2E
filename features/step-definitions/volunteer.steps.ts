import {Given , Then , When  } from '@cucumber/cucumber';
import  Volunteer  from '../pageobjects/volunteer.page';
Given(/^I Open the Browser and load \"([^\"]*)\"$/, async function (appUrl) {
    await browser.url(appUrl);
    await browser.maximizeWindow();
  });

  Then(/^I validate the header \"([^\"]*)\"$/, async function (appHeader) {
    const headerText =  $("//div[@class='segment_header']//h1");
    //expect(await headerText.getText()).toEqual(appHeader)
    expect(await headerText).toHaveText(appHeader);
});

  When(/^I Enter firstName (.+) , lastName (.+) , phone (.+) , country (.+) , city (.+) and mail (.+)$/, async function (fname, lname, phn, cntry, cty, mail ) {
    // const FName = await $("//input[@name='RESULT_TextField-1']");
    // const LName = await $("//input[@name='RESULT_TextField-2']")
    // const Phn   = await $("//input[@name='RESULT_TextField-3']")
    // const Country = await $("//input[@name='RESULT_TextField-4']")
    // const City    = await $("//input[@name='RESULT_TextField-5']")
    // const Mail    = await $("//input[@name='RESULT_TextField-6']")

    //FName.setValue(fname);
    await (await Volunteer.FName).setValue(fname)
    //LName.setValue(lname);
    await(await Volunteer.LName).setValue(lname);
    //Phn.setValue(phn);
    await(await Volunteer.Phn).setValue(phn);
    //Country.setValue(cntry);
    await(await Volunteer.Country).setValue(cntry);
    //City.setValue(cty);
    await(await Volunteer.City).setValue(cty);
    //Mail.setValue(mail);
    await(await Volunteer.Mail).setValue(mail);
  });


  Then(/^I Select the gender (.+)$/, async function (gender) {
    //const gender_radio  = await $$("//input[@name='RESULT_RadioButton-7']")

    // for(let i=0;i<gender_radio.length;i++){
    //     const element = await(gender_radio[i].getAttribute('value'))
    //     //const element = await(gender_radio[i].selectByVisibleText(gender))
    //     if(element===gender){
    //         await(gender_radio[i].click())
    //         break;
    //     }
    // }
    await Volunteer.selectDropDown(await Volunteer.Gender,gender);
  });

  Then(/^I Select the Best Time to Contact (.+)$/, async function (time ) {
    const BestTime_dropdown = await $("//select[@name='RESULT_RadioButton-9']")
    BestTime_dropdown.selectByVisibleText(time);
    await browser.pause(5000);
  });

  Then(/^I Click on submit button$/, async function () {
    const submit_btn = await $("//input[@name='Submit']")
    submit_btn.click();
  });
  Then(/^I should see a header saying \"([^\"]*)\"$/, async function (head_two) {
    //await browser.pause(5000);
    const h_tet =await $("//div[@class='segment_header']")
    expect(h_tet).toHaveText(head_two)
});