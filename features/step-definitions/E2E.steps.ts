import {Given,When,Then} from '@cucumber/cucumber';
import userPage from '../pageobjects/E2E.page';
import SuperTest from 'supertest';
import { BASE_URL } from '../../Config/APIConfig';
import { API_Method } from '../../ENUM/APICalls';

const request = SuperTest(BASE_URL);
let Api_res : any;
let Api_status : any;
let response : any;
Given(/^I am on Page (.+)$/, async function (pageurl) {
    await userPage.openApp(pageurl);
  });
When(/^I Perform (.+) user search$/, async function (endpoint) {
    await userPage.enterAPIurl(endpoint);
    await userPage.clickonAjaxBtn();
  });
When(/^I Make GET (.+) Api Call$/, async function (endpoint) {
    //console.log("API CALL WILL BE DONE HERE!!!!");
    const response = await request.get(endpoint)
    Api_res = response.body;
    Api_status = response.statusCode;
    console.log("API RESPONSE :- " ,Api_res);
  });
Then(/^I Validate the Result$/, async function () {

    const ui_status = await userPage.getStatusText();
    console.log("STATUS FROM UI:- " , ui_status);

    const ui_response =  JSON.parse( await userPage.getOutputText());
    console.log("RESPONSE FROM UI :- " , ui_response);

    expect(ui_status).toContain(String(Api_status));
    expect(ui_response).toEqual(Api_res);
  });



  When (/^I Perform Create User Search for Api (.+)$/,async (service:string)=>{
    //await userPage.selectMethod("POST")
    await userPage.selectMethod(API_Method.POST);
    await userPage.enterAPIurl(BASE_URL+service)
    await userPage.clickonAddParam()
    await userPage.enterFirstParam("name","sadab")
    await userPage.clickonAddParam()
    await userPage.enterSecondParam("job","tester");
    await userPage.clickonAjaxBtn();
  });
  When(/^I Make POST (.+) Api Call$/,async (endpoint:string)=>{
    //console.log("API CALL HERE");
    const payLoad = {
        "name" : "sadab",
        "job"  : "tester"
    }
    response = await request.post(endpoint).send(payLoad).set('content-type','application/json')
  });
  When(/^I Validate the Result$/,async ()=>{
    const ui_status = await userPage.getStatusText();
    const ui_response= JSON.parse(await userPage.getOutputText());

    expect(ui_status).toContain(response.statusCode+"100");
    expect(ui_response).toEqual(response.body);
  })

