//Custom command here

//reusable command 

//command for the handling the alert 

Cypress.Commands.add("handleAlert",(expectText)=>{
    cy.on("window:alert",(text)=>{
        expect(text).to.eq(expectText)
    })
})

Cypress.Commands.add("handleconfirm",(expectresult)=>{
    cy.on("window:confirm",(text)=>{
        expect(text).to.eq(expectresult)
    })
})

 

Cypress.Commands.add("handlePrompt", (inputText) => {
  cy.window().then((win) => {
    cy.stub(win, "prompt").returns(inputText);
  });
});

//for the verify catogory
Cypress.Commands.add("verifycatogory",(selector,expectedArray)=>{
    cy.get(selector).each(($el,index)=>{
        cy.wrap($el).find("h5").should("contains.text",expectedArray[index])
    })
})

Cypress.Commands.add("Verifylinkstatus",(selector)=>{
   cy.get(selector).each(($el)=>{
    const url=$el.prop("href");
    cy.request(url).its("status").should("eq",200)
   })
   
})


//number of col and row
Cypress.Commands.add("countrowandcol",(element)=>{
        cy.get(element).then((el)=>{
            const len=el.length
            cy.log(len)
        })
     })

//Verify the heading
 //  cy.get("thead>tr>th").each(($el,index) => {
    //   cy.wrap($el).should("contain.text",arr[index])

    //  });
    Cypress.Commands.add("verifyheading",($ele,arr)=>{
        cy.get($ele).each(($ele,index)=>{
            cy.wrap($ele).should("contain.text",arr[index])
        })
    })

    //   cy.get("tbody>tr").each(($row)=>{
    //   cy.wrap($row).find("td").each(($col)=>{
    //     cy.wrap($col).invoke("text").then((data)=>{
    //       cy.log(data)
    //     })
    //   })
    //  })

     //printing the data
     Cypress.Commands.add("Printingdata",($el)=>{
        cy.get($el).find("td").each(($col)=>{
            cy.wrap($col).invoke("text").then((data)=>{
                cy.log(data)
            })
        })
     })

//Fill the form 
  Cypress.Commands.add("Fillform",(data)=>{
     cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#userEmail").type(data.email);
    cy.get("#age").type(data.age);
    cy.get("#salary").type(data.salary);
    cy.get("#department").type(data.department);
    cy.get("#submit").click();
   
  })
    