import  Alerts_page from '../support/Pages/Alerts_Page'

const alert=new Alerts_page();

describe("Test suite",()=>{
    it("Testing for Alert",()=>{
        alert.visit();
        alert.Alerts_menu();
    })
})