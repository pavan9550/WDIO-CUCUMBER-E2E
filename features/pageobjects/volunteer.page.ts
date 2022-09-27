import Page from "./page";

class Volunteer extends Page{
    get Header(){return $("//div[@class='segment_header']//h1");}
    get FName(){return $("//input[@name='RESULT_TextField-1']");}
    get LName(){return $("//input[@name='RESULT_TextField-2']");}
    get Phn(){return $("//input[@name='RESULT_TextField-3']")}
    get Country(){return $("//input[@name='RESULT_TextField-4']")}
    get City(){return $("//input[@name='RESULT_TextField-5']")}
    get Mail(){return $("//input[@name='RESULT_TextField-6']")}
    get Gender(){return $$("//input[@name='RESULT_RadioButton-7']")}


    async selectDropDown(element:WebdriverIO.ElementArray,value){
        for(let i=0;i<element.length;i++){
            const elem = await(element[i].getAttribute('value'))
            //const element = await(gender_radio[i].selectByVisibleText(gender))
            if(elem===value){
                await(element[i]).click();
                break;
            }
        }
    }
}
export default new Volunteer()
