import Page from "./page";
import {BASE_URL} from '../../Config/APIConfig';
import { API_Method } from "../../ENUM/APICalls";
class UserPage extends Page {

    private get url_textBox(){
        return $("//input[@id='urlvalue']")
    }
    private get ajax_Btn(){
        return $("//button[@id='submitajax']")
    }
    private get success_alert(){
        return $("//pre[@class='alert-success']")
    }
    private get status_text(){
        return $("//pre[@id='statuspre']")
    }
    private get output_area(){
        return $("//pre[@id='outputpre']")
    }




    private get method_Dropdown() { return $("//select[@id='httpmethod']")}
    private get addParam_Button() { return $("//button[@id='addprambutton']")}

    private get paramName1_box()  { return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[1]")}
    private get paramValue1_box() { return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[1]")}
    private get paramName2_box()  { return $("(//div[@id='allparameters']//input[contains(@class,'fakeinputname') and @value])[2]")}
    private get paramValue2_box() { return $("(//div[@id='allparameters']//input[contains(@class,'realinputvalue') and @value])[2]")}

    async openApp(pageUrl:string){
        await browser.url(pageUrl)
    }
    async enterAPIurl(EndPoint:string){
        await (await this.url_textBox).setValue(BASE_URL+EndPoint);
    }
    async clickonAjaxBtn(){
        await this.ajax_Btn.click();
    }
    async getStatusText() : Promise<string>{
        await (await this.success_alert).waitForDisplayed();
        return await (await this.status_text).getText();
    }
    async getOutputText() : Promise<string>{
        return await (await this.output_area).getText();
    }



    async selectMethod(apiType:API_Method){
        await (await this.method_Dropdown).selectByVisibleText(apiType);
    }
    async clickonAddParam(){
        await (await this.addParam_Button).click();
    }
    async enterFirstParam(param1:string,value1:string){
        await (await this.paramName1_box).setValue(param1);
        await (await this.paramValue1_box).setValue(value1)
    }
    async enterSecondParam(param2:string,value2:string){
        await (await this.paramName2_box).setValue(param2)
        await (await this.paramValue2_box).setValue(value2)
    }
}

export default new UserPage()