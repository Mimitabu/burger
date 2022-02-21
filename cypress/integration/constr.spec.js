import fixture from "../fixtures/example.json";

Cypress.Commands.add("login", () => {
    cy.request({
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        url: "https://norma.nomoreparties.space/api/auth/login",
        body: JSON.stringify({ email: "slavinamaya@gmail.com", password: "1234567" }),
    })
        .then((resp) => {
            window.localStorage.setItem("refreshToken", resp.body.refreshToken);
            window.localStorage.setItem("accessToken", resp.body.accessToken);
        });
});

describe('login & order', () => {
    before(() => {
        cy.visit('http://localhost:3000/');
        cy.wait(3000);
    });

    it('should add ingredient & finish order', () => {
        cy.get('div').contains('Краторная булка N-200i').as('bun_one');
        cy.get('div').contains('Соус фирменный Space Sauce').as('sause');
        cy.get('#dropSection').as('drop_field');

        cy.get('@bun_one').trigger('dragstart');
        cy.get('@drop_field').trigger('drop');
        cy.get('@sause').trigger('dragstart');
        cy.get('@drop_field').trigger('drop');

        cy.get('@drop_field').contains('Краторная булка N-200i');
        cy.get('@drop_field').contains('Соус фирменный Space Sauce');

        cy.get('button').contains('Оформить заказ').click();
    })

    it('should auth ok', () => {
        cy.contains('Войти')
        cy.get('input').first().as('email');
        cy.get('input').last().as('pass');

        cy.get('@email').type('slavinamaya@gmail.com');
        cy.get('@pass').type('1234567');

        cy.get('@email').should('have.value', 'slavinamaya@gmail.com');

        cy.get('button').contains('Войти').click();
        // cy.get('button').contains('Конструктор').click();

        cy.contains('Булки');

    });

    it('should finish order', () => {
        cy.contains('Булки');

        cy.intercept('POST', 'https://norma.nomoreparties.space/api/orders',
            { fixture: 'example.json' }).as('order');

        cy.get('button').contains('Оформить заказ').click();
        cy.wait('@order').then(res =>
            expect(res.response.body.order.number).equal(fixture.order.number)
        );
        cy.get('#modal').contains(`${fixture.order.number}`);
    })
})