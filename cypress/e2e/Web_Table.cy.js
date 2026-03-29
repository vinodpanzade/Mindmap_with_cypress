import  Web_table from "../support/Pages/Web_table"
const web_table=new Web_table();


describe("Test suit for table",()=>{
    it("Test cases for table ",()=>{
        web_table.visit();
        web_table.webtables_addition();
        //web_table.webtable_datareading();
    })
})
