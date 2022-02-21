describe('dnd function ok', () => {
    before(function () {
        cy.visit('http://localhost:3000');
        cy.wait(3000);
    })

    it('should drag and drop ingredient & delete', () => {
        cy.get('div').contains('Краторная булка N-200i').as('bun_one');
        cy.get('div').contains('Флюоресцентная булка R2-D3').as('bun_two');
        cy.get('div').contains('Соус фирменный Space Sauce').as('sause');
        cy.get('#dropSection').as('drop_field');

        cy.get('@sause').trigger('dragstart');
        cy.get('@drop_field').trigger('drop');

        cy.get('@drop_field').contains('Соус фирменный Space Sauce');

        cy.get('span.constructor-element__action').click();

        cy.get('@drop_field').not('Соус фирменный Space Sauce');

        cy.get('@bun_one').trigger('dragstart');
        cy.get('@drop_field').trigger('drop');

        cy.get('@sause').trigger('dragstart');
        cy.get('@drop_field').trigger('drop')

        cy.get('@drop_field').contains('Краторная булка N-200i');
        cy.get('@drop_field').contains('Соус фирменный Space Sauce');

        cy.get('@bun_two').trigger('dragstart');
        cy.get('@drop_field').trigger('drop');

        cy.get('@drop_field').contains('Флюоресцентная булка R2-D3');
        cy.get('@drop_field').contains('Соус фирменный Space Sauce');

    })

})

