class Web_table {
  visit() {
    cy.visit("https://demoqa.com/elements");
  }

  webtable_datareading() {
    cy.contains("Web Tables").click();
    cy.get("h1").contains("Web Tables");

    //number of col in table
    //  cy.get("thead>tr>th").then((el)=>{
    //   const len=el.length;
    //   cy.log(len)
    //  })

    //count of col
    cy.countrowandcol("thead>tr>th");

    //number of rows in table
    //  cy.get("tbody>tr>td").then((el)=>{
    //    const len=el.length;
    //   cy.log(len)
    //  })

    //count of row
    cy.countrowandcol("tbody>tr>td");

    const arr = [
      "First Name",
      "Last Name",
      "Age",
      "Email",
      "Salary",
      "Department",
      "Action",
    ];
    //  cy.get("thead>tr>th").each(($el,index) => {
    //   cy.wrap($el).should("contain.text",arr[index])

    //  });
    cy.verifyheading("thead>tr>th", arr);

    //  cy.get("tbody>tr").each(($row)=>{
    //   cy.wrap($row).find("td").each(($col)=>{
    //     cy.wrap($col).invoke("text").then((data)=>{
    //       cy.log(data)
    //     })
    //   })
    //  })
    cy.Printingdata("tbody>tr");
  }

  webtables_addition() {
    cy.contains("Web Tables").click();
    cy.get("h1").contains("Web Tables");

    /*
        task 
        have to add the fields or add rows in table and then check it is adedd or not 
        have to delete the feild and check it is delete or not like this 
        */
   
    

    cy.fixture("Fix").then((datas) => {
      datas.forEach((data) => {
        cy.get("#addNewRecordButton").click();
        cy.Fillform(data);
        
      });
   
    });

    // cy.get("#firstName").type("Vinod");
    // cy.get("#lastName").type("Panzade");
    // cy.get("#userEmail").type("vinod12@gmail.com");
    // cy.get("#age").type(23);
    // cy.get("#salary").type(22000);
    // cy.get("#department").type("BSG");
    // cy.get("#submit").click();
    // cy.screenshot("vinod data");

    //with each loop
    // cy.fixture("Fix").then((datas)=>{
    //   cy.wrap(datas).each((user)=>{
    //     cy.Fillform(user)
    //   })
    // })

    //after adding the field we will edit the fields
    // cy.get("#edit-record-4").scrollIntoView().click();
    // cy.get("#firstName").type("Sandeep");
    // cy.get("#lastName").type("Prajapati");
    // cy.get("#userEmail").type("sandeep12@gmail.com");
    // cy.get("#age").type(30);
    // cy.get("#salary").type(44000);
    // cy.get("#department").type("BSG-group");
    // cy.get("#submit").click();
    // cy.screenshot("Sandeep data");

    // cy.get("#delete-record-4").click();
    // cy.screenshot("Delete the data");
  }
}
export default Web_table;
