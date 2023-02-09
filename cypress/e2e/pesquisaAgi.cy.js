
describe('Pesquisa', () => {

    beforeEach(() => {
        cy.visit('/') 
        cy.get('#search-open').click()
    });
    
    it('palavra chave com sucesso', () => {
      
        cy.get('.desktop-search > .search-form > label > .search-field').type('Pix').click()
        cy.get('.desktop-search > .search-form > .search-submit').click()

        cy.contains('Resultados da busca por: Pix')

    })

    it('data sem sucesso exibir mensagem informativa', () => {
  
        cy.get('.desktop-search > .search-form > label > .search-field').type('02/12/2000').click()
        cy.get('.desktop-search > .search-form > .search-submit').click()

        cy.contains('Nenhum resultado')
        cy.contains('Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.')

    })

    it('caracter especial sem sucesso exibir mensagem informativa', () => {
  
        cy.get('.desktop-search > .search-form > label > .search-field').type('@trasfer#').click()
        cy.get('.desktop-search > .search-form > .search-submit').click()

        cy.contains('Nenhum resultado')
        cy.contains('Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.')

    })

    it('listar todo conteudo da pagina', () => {
  
        cy.get('.desktop-search > .search-form > label > .search-field').click()
        cy.get('.desktop-search > .search-form > .search-submit').click()

        cy.contains('Resultados da busca por:')

    })

  })