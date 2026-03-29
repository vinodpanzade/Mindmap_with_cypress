import Home_Page from '../support/Pages/Home_Page'
const sample = new Home_Page();
describe("Test using cypress",()=>{
    it("Test suit 1 ",()=>{

        sample.web_visit();
       // sample.web_verify();
        sample.Home_page_verify();
    })
   
})
