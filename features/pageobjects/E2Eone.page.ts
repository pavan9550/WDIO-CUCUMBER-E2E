import Page from "./page";
import superTest from 'superTest';
import { BASE_URL } from "../../Config/APIConfig";

class Pavan extends Page{
    private get url_TextBox(){
        return $("//input[@id='urlvalue']")
    }
    private get ajax_Button(){
        return $("//button[@id='submitajax']")
    }
    private get success_alert(){
        return $("//pre[@class='alert-success']")
    }
    private get status_text(){
        return $("//pre[@id='statuspre']")
    }
    private get outer_Result(){
        return $("//pre[@id='outputpre']")
    }

    async LoadApp(pageUrl : string){
        await browser.url(pageUrl)
    }
    async enterUrl(endPoint : string){
        await (await this.url_TextBox).setValue(endPoint)
    }
    async clickAjaxBtn(){
        await(await this.ajax_Button).click();
    }
    async getStatus() : Promise<string>{
        await(await this.success_alert).waitForDisplayed();
        return await(await this.status_text).getText();
    }
    async getOutputRes() : Promise<string>{
        return await(await this.outer_Result).getText();
    }
}

export default new Pavan()