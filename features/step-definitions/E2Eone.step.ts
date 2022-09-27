import {Given , Then , When } from '@cucumber/cucumber';
import {BASE_URL} from '../../Config/APIConfig';
import Pavan from '../pageobjects/E2Eone.page';
import superTest from 'superTest';
import { LiteralLikeNode } from 'typescript';

const request = superTest(BASE_URL);
let api_res : any;
let api_sta : any;
Given(/^I open the WebPage (.+)$/,async function(pageurl) {
    await Pavan.LoadApp(pageurl);
  });

  When(/^I made GET Requests on (.+)$/,async function(endurl) {
    await Pavan.enterUrl(BASE_URL+endurl);
    await Pavan.clickAjaxBtn();
  });

  Then(/^I made API GET call on (.+)$/,async function(endurl) {
    //console.log("Making API call here");
    const response = await request.get(endurl);
    api_res = response.body;
    api_sta = response.statusCode;

});

  Then(/^Validate the Results$/,async function() {
    const ui_status = await Pavan.getStatus();
    console.log("UI RESPONSE CODE IS:- " ,ui_status);
    const ui_response = JSON.parse(await Pavan.getOutputRes());
    console.log("UI RESPONSE IS :- " ,ui_response);

    expect(ui_status).toContain(api_sta);
    expect(ui_response).toEqual(api_res);
  });
