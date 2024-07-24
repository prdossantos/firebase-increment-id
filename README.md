
# Projeto Firebase Increment ID

## Descrição do Projeto

Este projeto utiliza Firebase Functions e Firestore para criar um sistema de registros com `incrementId` sequenciais e automáticos, seguindo os princípios do Domain-Driven Design (DDD). Ele demonstra como escalar uma arquitetura serverless com Node.js e Firebase.

## Como Rodar

1. Clone o repositório:
   ```bash
   git clone https://github.com/prdossantos/firebase-increment-id.git
   cd firebase-increment-id
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o emulador do Firebase:
   ```bash
   npm run serve
   ```

### Usando Docker

Para facilitar o desenvolvimento e o teste, você pode usar Docker para rodar o projeto:
   ```bash
   docker-compose up -d
   # Aguarde até que todos os serviços iniciem.
   ```

Isso irá iniciar todos os serviços necessários em um container Docker.

## Design de Arquitetura

A arquitetura é baseada nos princípios do Domain-Driven Design (DDD) para promover uma estrutura modular e escalável:

- **Domain:** Contém a lógica central do negócio.
- **Application:** Serviços que orquestram o comportamento do domínio.
- **Infrastructure:** Implementações técnicas, como repositórios e triggers do Firestore.
- **Presentation:** Controladores que lidam com as requisições HTTP.


## Testes Automatizados

Os testes estão localizados na pasta `/test` e utilizam `jest` para validação das funcionalidades principais.

### Como Rodar os Testes

Para executar os testes, utilize o seguinte comando no terminal:

```bash
npm test
```

### Funções

Para testar as funções do Firebase localmente, você pode usar as seguintes rotas após iniciar o emulador ou o container Docker:

- **Criar Registro:** POST `http://localhost:5001/firebase-increment-id/us-central1/createRecord` - Cria um novo registro

## Acessos do Firebase Emulator

Para acessar o Firebase Emulator UI e visualizar os dados do Firestore, funções, etc., use o seguinte endereço no seu navegador:

- **Firebase Emulator UI:** `http://localhost:4000`

Isso permitirá que você interaja com os emuladores do Firebase, incluindo Firestore, Functions, Auth, e outros serviços suportados, em um ambiente local.

## Conclusão

Esta arquitetura é escalável e segue boas práticas de design e teste, garantindo que novas funcionalidades possam ser adicionadas de forma eficiente e segura.
