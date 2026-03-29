class Alerts_page {
  visit() {
    cy.visit("https://demoqa.com/alerts");
  }
  Alerts_menu() {
    cy.contains("Alerts").click();
    cy.get(".text-center").should("contain", "Alerts");
    cy.get(".mr-3").should("contain", "Click Button to see alert");
    cy.get("#alertButton").click();
    cy.handleAlert("You clicked a button");

     
    cy.get(".mr-3").should("contain", "On button click, alert will appear after 5 seconds");
    cy.get("#timerAlertButton").click()

    cy.handleAlert("You clicked a button")

     cy.get(".mr-3").should("contain", "On button click, confirm box will appear");
     cy.get('#confirmButton').click()
      cy.handleconfirm("Do you confirm action?")
    //  cy.on("window:confirm",(text)=>{
    //   expect(text).to.eq("Do you confirm action?")
    //  })

     
     cy.get(".mr-3").should("contain", "On button click, prompt box will appear");
     cy.get('#promtButton').click()
    //cy.window().then(win => cy.stub(win, 'prompt').returns('Yes'));
     cy.handlePrompt("Yes")




  }
}
export default Alerts_page;
