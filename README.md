# Blog AgiBank
## Teste NTconsult Agibank
### Pré-requisitos
É necessário ter Node.js e o npm instalados para executar este projeto.
Usei as versões v18.14.0 de Node.js e 9.3.1 do npm, respectivamente. Sugiro que você use as mesmas versões LTS ou posteriores.
(Caso não tenha node instalado segue link [https://nodejs.org/en/download/])
### Instalação
Execute npm install (ou npm i para a versão curta) para instalar as dependências de desenvolvimento.
### Testes
Execute npm run cy:run para executar o teste no modo headless.
Ou execute npm run cy:open para abrir o aplicativo Cypress e executar os testes no modo interativo.

|Cenarios de Testes|
|------------------|
|[CT001-AGI-BLOG]-palavra chave com sucesso|
|[CT002-AGI-BLOG]-data sem sucesso exibir mensagem informativa|
|[CT003-AGI-BLOG]-caracter especial sem sucesso exibir mensagem informativa|
|[CT004-AGI-BLOG]-listar todo conteudo da pagina|

Este projeto foi criado com 💚 por Wellington Santos.