# blog AgiBank
## Teste NTconsult Agibank


### Clonando o projeto

1. Acesse a URL 
2. Clique no botão 'Clone'
3. Escolha uma das opções (_Clone with SSH_ ou _Clone with HTTPS_) e então clique no botão _Copy URL_ ao lado do campo da opção escolhida
4. No terminal, no diretório onde você armazena seus projetos de software, digite `git clone [URL copiada no passo anteior]` e pressione ENTER
5. Por fim, acesso o diretório do projeto recém clonado (`cd curso-cypress-intermediario/`)

### Inicializando o NPM

No terminal, dentro do diretório `curso-cypress-intermediario/`, execute o comando `npm init -y` (este comando irá criar o arquivo `package.json` na raiz do projeto)

### Inicializando o arquivo .gitignore

No mesmo diretório, crie um arquivo chamado `.gitignore`, com o seguinte conteúdo:

```.gitignore
.DS_Store
cypress/screenshots/
cypress/videos/
node_modules/
```

### Criando o diretório `temp/`

Na raiz do projeto, crie um diretório chamado `temp/`. Este diretório será utilizado posteriormente para o teste de clone de projeto.

### Instalando o Cypress

No terminal, na raiz do projeto, execute o comando `npm i cypress -D` (este comando irá instalar o Cypress como dependência de desenvolvimento, além de criar o arquivo `package-lock.json` e o diretório `node_modules/`)

### Inicializando o Cypress

No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir o Cypress em modo interativo e irá criar a estrutura inicial para os testes automatizados)

#### Configurando o projeto de testes automatizados

1. Feche a aplicação Electron do Cypress
2. Abra o arquivo `cypress.json` criado na raiz do projeto e altere seus conteúdo pelo seguinte:

```json
{
    "baseUrl": "http://localhost/"
}
```

4. Por fim, dentro do diretório `cypress/integration/`, delete o diretório `examples/`



### Modo interativo

1. No terminal, na raiz do projeto, execute o comando `npx cypress open` (este comando irá abrir a aplicação Electron do Cypress)
2. Para executar todos os testes em modo interativo, clique no botão 'Run all specs'. Ou, para executar um arquivo de testes em específico, clique no mesmo na listagem de testes.

## Parabéns, você chegou ao fim do curso!
___