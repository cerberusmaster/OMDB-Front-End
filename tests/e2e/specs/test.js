// https://docs.cypress.io/api/table-of-contents

describe('Page Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('label', 'Movie Search Term')
    cy.contains('label', 'User Name')
    cy.contains('button', 'Start')
    cy.click('.fa-home')
  })
  
  it('Visits the guessing url', () => {
    cy.visit('/guessing')
    cy.get('input').type('5')
    cy.click('input', 'submit')
  })

  it('Visits the results url', () => {
    cy.visit('/results')
    cy.contains('caption', 'List of Results')
    cy.click('th', 'Updated')
  })
})