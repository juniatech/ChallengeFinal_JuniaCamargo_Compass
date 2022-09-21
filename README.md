<a href="https://compass.uol">
    <img src="https://compass.uol/etc.clientlibs/compass/clientlibs/clientlib-react/resources/static/media/logo.d35fe3b1.svg" alt="Compass.UOL logo" title="Compass.UOL" align="right" height="25" />
</a>

# 📗LogicalForest
![image](https://user-images.githubusercontent.com/95503135/190703170-a2aaa1a2-760a-4604-a467-eb0a4092792e.png)

[![Badge ServeRest](https://img.shields.io/badge/API-ServeRest-green)](https://github.com/ServeRest/ServeRest/)

# Introdução do Projeto
Nessa Sprint foram abordados os temas para Automação de Testes de API com Cypress:
 * Configurações iniciais de um projeto Cypress.
 * Configurações de ambientes dinâmicos.
 * Reconhecimento da API Serverest
 * Estrutura e comandos personalizados
 * Design Pattern Service Object
 * Massas de dados fixas e dinâmicas
 * Teste de contrato
 * Report da automação
 
# Escopo
Neste Challenge tivemos vários novos desafios, e para organizar a estrutura de Análise e mapeamento de API, realizei o [Plano de Teste da API Serverest](https://github.com/juniatech/ChallengeFinal_JuniaCamargo_Compass/tree/develop/plano_de_teste) e também utilizei o [Postman com o import do JSON do Swagger](https://github.com/juniatech/ChallengeFinal_JuniaCamargo_Compass/tree/develop/postman) pois, automatizar testes sem a devida análise e planejamento prévio, traz o risco de produzir diversos artefatos (código) que não trarão o devido valor ao projeto. 

O Escopo do projeto nos traz os seguintes itens:
 * Login (Realizar login).
 * Usuários (Listar usuários cadastrados, cadastrar usuário, buscar usuário por ID, excluir usuário e editar usuário).
 * Produtos (Listar produtos cadastrados, cadastrar produto, buscar produto por ID, excluir produto e editar produto).
 * Carrinhos (Listar carrinhos cadastrados, cadastrar carrinho, buscar carrinho por ID, excluir carrinho e cancelar carrinho de compra e retornar produtos para estoque).

# Casos de teste

Separei os Casos de teste, em dois tópicos, o primeiro em Suite de Casos de Testes que você encontra no [Plano de Teste](https://github.com/juniatech/ChallengeFinal_JuniaCamargo_Compass/tree/develop/plano_de_teste), que cobre 100% dos casos da API Serverest de acordo com o nosso Mapa mental, e Candidatos para Automação para fins educacionais, trabalhando de acordo com o prazo de entrega, busquei trazer prioridade aos temas abordados nas vídeo aulas, para poder absorver todo o conteúdo, focando primeiramente na base de resultados em automação, e a raíz do pensamento lógico de automação de testes com Cypress.

Lista de casos de teste para validar as rotas da API:

 * CT01 - Validar login realizado com sucesso;
 * CT02 - Validar listagem de usuários;
 * CT03 - Validar cadastro de usuário com sucesso;
 * CT04 - Validar e-mail já cadastrado; 
 * CT05 - Validar busca de usuário; 
 * CT06 - Validar busca de usuário não encontrado; 
 * CT07 - Validar exclusão de registro com sucesso; 
 * CT08 - Validar usuário com carrinho cadastrado; 
 * CT09 - Validar usuário alterado com sucesso; 
 * CT10 - Validar usuário cadastrado com sucesso; 
 * CT11 - Validar usuário com e-mail já cadastrado; 
 * CT12 - Validar listagem de produtos; 
 * CT13 - Validar cadastro de produto com sucesso; 
 * CT14 - Validar nome de produto já existente;
 * CT15 - Validar token ausente, inválido ou expirado; 
 * CT16 - Validar rota exclusiva para administradores;
 * CT17 - Validar rota de produtos exclusiva para administradores;
 * CT18 - Validar produto encontrado com sucesso; 
 * CT19 - Validar produto não encontrado; 
 * CT20 - Validar registro de produto excluído com sucesso; 
 * CT21 - Validar nenhum registro excluído; 
 * CT22 - Validar se o produto faz parte do carrinho; 
 * CT23 - Validar rota de produtos exclusiva para administradores; 
 * CT24 - Validar produto alterado com sucesso; 
 * CT25 - Validar produto cadastrado com sucesso; 
 * CT26 - Validar se já existe produto com o mesmo nome; 
 * CT27 - Validar rota de cadastro de produto, exclusiva para administradores; 
 * CT28 - Validar cadastro de produto com sucesso; 
 * CT29 - Validar lista de carrinhos;
 * CT30 - Validar cadastro de carrinho por usuário;
 * CT31 - Validar se algo deu errado no cadastro de carrinho;
 * CT32 - Validar carrinho encontrado por ID; 
 * CT33 - Validar carrinho não encontrado por ID; 
 * CT34 - Validar registro de carrinho excluído com sucesso; 
 * CT35 - Validar carrinho não encontrado para o usuário; 
 * CT36 - Validar registro excluído com sucesso para cancelar compra.

Candidatos para automação de Back-end: 

* CT01 - Validar a buscar todos os usuários cadastrados na Serverest;
* CT02 - Validar que não deve postar um novo usuário administrador existente;
* CT03 - Validar a realização de login com sucesso; 
* CT04 - Validar a buscar e salvar um usuário em um arquivo json; 
* CT05 - Validar ao buscar o usuário de um arquivo json; 
* CT06 - Validar a realização de login com sucesso; 
* CT07 - Validar a busca de todos os produtos cadastrados; 
* CT08 - Validar ao postar um novo produto com sucesso; 

<h1>
   <img width="665px" r src="https://media.giphy.com/media/rT8xFeyfVGKtOlfu34/giphy.gif">
</h1>

# Estratégia de testes

Foi realizado o Teste de Integração para garantir que não haja nenhuma quebra naquilo que foi feito unitariamente e naquilo que está sendo integrado junto. Através da utilização da ferramenta POSTMAN, e acesso à documentação Swagger da API, então, pré realizada a validação da aplicação, em comparação com resultados pré-determinados nos cenários de teste. Também, pré implementada a automação dos testes da API através da utilização da ferramenta Cypress.

# Comandos de execussão

* Comando de execussão dos testes na ferramenta Cypress
```
npm run cy:run:prod
```

* Criação do arquivo (package.json)
```
npm init -y
```

* Instalação do Cypress
```
npm install --save-dev cypress@9.7.0
```

* Execultar Cypress em tela gráfica
```
npx cypress open
```

* Ambiente de produção Cypress
```
npm: run cy:open:prod
```

* Execultar a API na máquina
```
npx serverest@latest
```

* Instalação do Faker de dados falsos
```
npm install @faker-js/faker --save-dev
```

* Instalação do Ajv para validar os schemas 
```
npm install --save-dev ajv
```

* Instalação do mocha para report automatizados
```
npm install mocha --save-dev
```

* Instalação do Mochawesome para tela gráfica de reports automatizados
```
npm i --save-dev cypress-mochawesome-reporter
```

# Ferramentas e tecnologias utilizadas

Abaixo listamos as ferramentas utilizadas para as atividades de teste:
 * [Canva](https://www.canva.com/) (para a elaboração da documentação de testes);
 * [XMind](https://xmind.app/) (Para versionamento do mapa mental);
 * [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) (a linguagem de programação utilizada para realização de automação de testes);
 * [Node.js](https://nodejs.org/en/docs/) (para a execução de códigos JavaScript fora do navegador web, faça a compilação deles e os execute);
 * [Cypress](https://docs.cypress.io/guides/overview/why-cypress) (para automatização de testes);
 * [Faker](https://fakerjs.dev/) (para gerar dados fake dos testes);
 * [Ajv](https://ajv.js.org/guide/getting-started.html) (para validar os schemas para teste de contrato);
 * [Mocha](https://mochajs.org/) (para reports automatizados);
 * [Swagger](https://serverest.dev/) (para o versionamento da documentação);
 * [Postman](https://www.postman.com/downloads/) (uma ferramenta para analisar a documentação dos arquivos Swegger e interagir com as rotas da API e automatização de testes);

# Referências
 * [Compass.UOL](https://compass.uol/en/home/);
 * [Testes de API com Cypress (com Maximiliano Alves) | Pair Testing #02](https://www.youtube.com/watch?v=rbObfNh2bno&t=4018s);
 * [Documentação Serverest](https://github.com/ServeRest/ServeRest);
 * [Exemplos de automação com boas práticas que consomem a API ServeRest](https://github.com/search?q=serverest&type=Repositories);
 * [TDD na prática](https://github.com/PauloGoncalvesBH/aprenda-tdd-na-pratica);
 * [Mochawesome Reporter](https://github.com/LironEr/cypress-mochawesome-reporter/blob/9c11e7005351e8750fe48b90d010c9bf29539956/README.md#setup);
 

# Créditos

Aos colegas de trabalho que com toda dedicação se esforçaram muito e me auxiliaram na resolução de problemas, em especial o Eduardo, Nosvaldo e Patricia e a nossa Scrum Master Larissa por nos guiar e trazer todo apoio.
