describe ('Exemplu unde', () => {
// //Test verificare segment din URL
//     it ('Verificare segment', () => {
//         cy.visit('https://www.digi24.ro/stiri/actualitate/social/ajunsi-la-pensie-romanii-asteapta-sa-li-se-termine-viata-motivele-pentru-care-romania-coboara-constant-in-topul-tarilor-fericite-2730559');
//         cy.url().should('include','/stiri/');  //verifica segment

//     })

    // //Test cu delay
    // it('asteapta 10 secunde', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#L2AGLb').click();
    //     cy.wait(10000); //10 secunde  1000 = 1 sec
    //     cy.get('#APjFqb').type('Au trecut 10 secunde');

    // })


    // Testul cu selector de tip atribut
    // it('selectez folosind un atibut', () => {
    //     cy.visit('https://google.com');
    //     cy.get('#L2AGLb').click();
    //     cy.get('[alt="Google"]').should('be.visible');
    // })

    // //Testul fac screenshot la pagina
    // it('Fac screenshot la pagina', () => {
    //     cy.visit('https://google.com');
    //     cy.screenshot();  //face screenshot intr-un folder default
    // })

//    // Testul constanta si verificare continut input
//     it('verific o valoare din input', () => {
//         cy.visit('https://google.com');
//         cy.get('#L2AGLb').click();
//         const googleSearch = cy.get('#APjFqb'); //constanta
//         googleSearch.type('123');
//         googleSearch.should('have.value','123');
//            })

    //Testul verifica existenta unei clase pe un element selectat
    it ('verific o valoare din input', () => {

        cy.visit('https://www.libris.ro');
        cy.get('#autoCompleteButton').should('have.class','onSearchClick');
    })


})