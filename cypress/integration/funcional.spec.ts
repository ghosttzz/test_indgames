/// <reference  types = "cypress" />

import loc from '../support/locators';
describe('Test scenarios', () => {

  beforeEach(() => {
    cy.visit('Esqueleto-Explosivo-2')
    cy.get(loc.quizPopup).should('be.visible').and('be.exist')
    cy.get(loc.closePopup).click()
    cy.get(loc.title).should('contain', 'Esqueleto Explosivo 2')


  })
  it('Validando Botão Play for Demo', () => {
    cy.intercept('POST', 'https://metrics.thunderkick.com/metrics/data').as('postMetrics')
    cy.get(loc.buttonPlayDemo).should('be.visible')
      .click()
    cy.get(loc.loading, { timeout: 900000 }).should('not.be.visible')
    cy.get(loc.gameDesktop, { timeout: 800000 }).should('be.visible').and('exist')
    cy.wait('@postMetrics', { timeout: 9000000 }).its('response.statusCode').should('eq', 200)
  })
  it('Verificando Barra de Opções', () => {
    cy.get('.menubar > .wrapper')
      .should('contain', 'GAMES')
      .and('contain', 'PROVIDERS')
      .and('contain', 'BY TYPE')
      .and('contain', 'casino')
      .and('contain', 'read')
      .and('contain', 'HOT/COLD SLOTS')
      .and('contain', 'PAYMENTS')
  })
  it('Verificando Barra de Pesquisa', () => {
    cy.get(loc.barSearch).type('Esqueleto Explosivo 2')

    cy.get(loc.responseSearch).should('contain', 'Esqueleto Explosivo 2').click()

    cy.get(loc.title, {timeout:700000}).should('contain', 'Esqueleto Explosivo 2')
  })
})