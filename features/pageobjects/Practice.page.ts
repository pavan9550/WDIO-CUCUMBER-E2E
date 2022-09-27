import { RerunFormatter } from "@cucumber/cucumber";
import Page from "./page";

class Practice extends Page{
    private get firstName(){
        return $('#firstName')
    }
    private get lastName(){
        return $('#lastName')
    }
    private get useremail(){
        return $('#userEmail')
    }
    private get mobile(){
        return $('#userNumber')
    }
    private get subject(){
        return $('#subjectsInput')
    }
    private get address(){
        return $('#currentAddress')
    }

    async setNames(fName:string,lName:string){
        await(this.firstName.setValue(fName));
        await(this.lastName.setValue(lName));
    }
    async setEmail(email:string){
        await(this.useremail.setValue(email));
    }
    async setSubject(subject:string){
        await(this.subject.setValue(subject))
    }
    async setMobileNumber(mob:string){
        await(this.mobile.setValue(mob));
    }
    async setAddress(add:string){
        await(this.address.setValue(add));
    }
}
export default new Practice()
