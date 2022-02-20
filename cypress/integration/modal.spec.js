describe('dnd function ok', () => {
    before(function () {
        cy.visit('http://localhost:3000');
        cy.wait(3000);
    })

    it('should open & close modal', () => {
        cy.get('div').contains('Краторная булка N-200i').click();
        cy.get('#modal').contains('Детали ингредиента');
        cy.get('span').contains('Калории,ккал');
        cy.get('span').contains('420');
        cy.get('span').contains('Белки, г');
        cy.get('span').contains('80');

        cy.get('#modalClose').click();
        cy.get('#page').not('#modal');
    })
})

