class Home_Page {
  web_visit() {
    cy.visit("https://demoqa.com/");
  }
  web_verify() {
    cy.get(".banner-image").should("exist");
    cy.get(".banner-image").should(
      "have.attr",
      "src",
      "/assets/WB-u-E_TRWX.svg",
    );
  }

  Home_page_verify() {
    const array = [
      "Elements",
      "Forms",
      "Alerts, Frame & Windows",
      "Widgets",
      "Interactions",
      "Book Store Application",
    ];

     cy.verifycatogory(".category-cards a", array);
     cy.Verifylinkstatus(".category-cards a")

     cy.get(".category-cards a").each(($el) => {
      //getting the length
      const length = $el.length;
      cy.log(length);

      //verify the text from h5
      //cy.wrap($el).find("h5").should("contain.text", array[index]);
      
      //with the custom command
      //cy.verifyCategories(".category-cards a", array);

      // const href = $el.prop("href");
      // cy.request(href).its("status").should("eq", 200);
    
    });


  }
}
export default Home_Page;
