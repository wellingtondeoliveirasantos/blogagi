describe('Pesquisa', () => {

    beforeEach(() => {
        cy.visit('/')
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click();
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click();
    });

    it('pesquisa bem-sucedida por palavra-chave', () => {
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').type('Pix').click()
        cy.contains(' Search Results for: ')
    })

    it('pesquisa sem sucesso por data deve exibir mensagem informativa', () => {
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').type('02/12/9999').click()
        cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')
    })

    it('pesquisa sem sucesso por caracteres especiais deve exibir mensagem informativa', () => {
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').type('@trasfer#').click()
        cy.contains('Lamentamos, mas nada foi encontrado para sua pesquisa, tente novamente com outras palavras.')

    })

    it('listar todo o conteúdo da página', () => {
        cy.get('.site-header-above-section-right > .ast-builder-layout-element').click()
    })
})
