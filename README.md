## Curso Cypress: Automação de testes E2E

Neste repositório contém as práticas que fiz durante o curso.

### O que aprendi durante o curso:
- Criar e configurar um novo projeto utilizando Cypress
- Programar a interação com os elementos HTML, simulando cliques, digitações, ações em geral
- Visualizar e personalizar relatórios de execução dos testes automatizados
- Utilizar recursos de Playback e Dashboard para acompanhar o histórico de execuções
- Testar a partir de uma massa de dados oriundos de um arquivo externo
- Testar dados sensíveis, evitar flaky tests e diversas boas práticas de escrita e organização

### Sites e artigos recomendados durante o curso:
Documentação do Cypress: https://docs.cypress.io/guides/overview/why-cypress
Pirâmide de testes: https://cursos.alura.com.br/extra/alura-mais/entenda-a-piramide-de-teste-c206
Continuous testing: https://cursos.alura.com.br/extra/alura-mais/o-que-e-continuous-testing--c1144
Sintaxe do comando contains: https://docs.cypress.io/api/commands/contains
Códigos de exemplo Cypress: https://github.com/cypress-io/cypress
Executando os testes em modo headless: https://docs.cypress.io/guides/guides/command-line#cypress-run
Site mochawesome: https://www.npmjs.com/package/cypress-mochawesome-reporter
API: https://cursos.alura.com.br/extra/alura-mais/o-que-e-uma-api--c697
API REST: https://www.alura.com.br/artigos/rest-conceito-e-fundamentos
Boas práticas com Cypress: https://docs.cypress.io/guides/references/best-practices
Mocks e Stubs em testes: https://www.alura.com.br/artigos/testes-com-mocks-e-stubs


### Unidade 1:
- Iniciar um novo projeto usando o NodeJS, através do comando npm init, inicializando o arquivo package.json;
- Criar um novo arquivo de teste, com extensão .spec.js dentro da pasta integration e utilizar o comando describe para descrever a suite de testes;
- Usar a função beforeEach e o comando cy.visit(), para indicar a URL que será carregada antes de cada novo caso de teste;
- Criar um novo caso de teste utilizando a função it e utilizar os recursos cy.get(), bem como as opção .type, .click e .should para fazer os assertions;
- Usar o Selector Playground do Cypress para identificar o nome do elemento;
- Usar as ferramentas de desenvolvedor para melhor identificar os elementos html da página.

### Unidade 2:
- Criar uma nova suite de testes, criando um novo arquivo com a extensão .spec.js dentro da pasta integration;
- Utilizar com mais detalhes as ferramentas de desenvolvedor (DevTools) do navegador para explorar e identificar os elementos com que o Cypress irá interagir;
- Utilizar o comando cy.contains() para procurar por um texto dentro de um seletor, facilitando a busca por um elemento;
- Criar novos casos de teste, incluindo a função it(). Não há limites para a quantidade de testes incluídos.

### Unidade 3:
- Executar os testes em modo headless, sem abrir a interface gráfica do Cypress;
- Verificar os relatórios e vídeos gerados ao executar testes em modo headless;
- Usar o pacote Mochawesome para personalizar a geração do relatório e ter a possibilidade de gerá-los como arquivos html, visualizando-os no browser;
- Utilizar o Dashboard para integrar os resultados dos testes e ter uma visão mais analítica e completa dos dados;
- Criar novos comandos personalizados, de acordo com a necessidade e referenciá-los como se fossem comando nativos do Cypress, como por exemplo: cy.login(), cy.registrar() ou da forma que considerar melhor.

### Unidade 4:
- Utilizar dados de um arquivo externo nos casos de teste, fornecendo uma massa de dados;
- Utilizar a função require para obter dados de um módulo ou arquivo externo;
- Utilizar a função forEach para iterar sobre uma coleção de elementos e não precisar replicar código;
- Fazer testes em API’s REST, verificando o status e corpo da resposta, bem como outros comportamentos;
- Usar o comando cy.request() e usar o .expect para fazer as asserções dos resultados esperados;
- Cuidados ao testar dados sensíveis, para não expor o conteúdo a quem não poderia ter acesso;
- Criar arquivo cypress.env.json para configurar variáveis de ambiente;
- Usar o comando {logs: false} na função que faz a digitação para omitir os dados que não podem ser mostrados.

### Unidade 5:
- Organizar os testes separando-os por funcionalidades afins, para melhorar a manutenção e legibilidade do código;
- Qual o conceito dos flaky tests e algumas maneira de evitá-los, como por exemplo:evitar eventos orientados a tempo, dependência de aplicações de terceiros, testes que podem ser quebrados por processamento concorrente;
- Boas práticas na escrita dos testes para melhorar performance e segurança;
- O conceito de mocks e stubs e a importância de usá-los;
- A importância em já pensar em boas práticas de escrita, organização e performance desde a concepção do projeto de testes.
