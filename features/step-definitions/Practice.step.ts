import {Given,Then,When} from '@cucumber/cucumber';
import PracticePage from '../pageobjects/Practice.page';
import formdata from '../../Resources/formdata.json';
import  { parseJsonFile } from '../../utils/FileUtils';
import { RESOURCE_FOLDER_PATH } from '../../Constants/pathconst';

Given("I am on form page {string}",async (pageUrl:string)=>{
    await browser.url(pageUrl);
    await browser.maximizeWindow();
});
When("I enter all mandate fields", async()=>{
    await PracticePage.setNames(formdata.firstname,formdata.lastname);
    await PracticePage.setEmail(formdata.email);
    await PracticePage.setMobileNumber(formdata.mobileno);
    await PracticePage.setSubject(formdata.subject);
    await browser.pause(5000);
    
});
When(/^I enter all mandate fields from (.+)$/,async(FILE:string)=>{
    //let data = fs.readFileSync(datapath,"utf-8");
    let testdata = parseJsonFile(RESOURCE_FOLDER_PATH + FILE);
    await PracticePage.setNames(testdata.firstname,testdata.lastname);
    await PracticePage.setEmail(testdata.email);
    await PracticePage.setMobileNumber(testdata.mobileno);
    await PracticePage.setSubject(testdata.subject);
    await browser.pause(5000);
})
When("Submits the form",async()=>{

})
Then("I should see {string}",async(message:String)=>{

})