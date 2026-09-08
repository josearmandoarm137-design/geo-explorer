# Geo Explorer

O **Geo Explorer** é um projeto desenvolvido como parte de um desafio da DIO.

O objetivo do projeto é praticar conceitos de programação, organização de projetos, Git e GitHub.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `commands/` — contém os comandos principais do projeto.
- `data/` — contém os dados das trilhas.
- `tests/` — contém os arquivos utilizados para testar os comandos.
- `docs/` — pasta destinada à documentação.

## Funcionalidades

### Track

Permite buscar uma trilha de aprendizagem de acordo com a tecnologia e o nível escolhido.

Exemplo:

```javascript
getTrack("Python", "beginner");
```

### Challenge

Retorna um desafio de programação baseado na tecnologia e no nível.

Exemplo:

```javascript
getChallenge("Python", "beginner");
```

### Certificate

Gera os dados de um certificado para uma pessoa que concluiu uma trilha.

Exemplo:

```javascript
generateCertificate("Jose Armando", "Python", "beginner");
```

## Como executar os testes

É necessário ter o Node.js instalado.

No terminal do projeto, execute:

```bash
node tests/track.test.js
node tests/challenge.test.js
node tests/certificate.test.js
```

## Tecnologias utilizadas

- JavaScript
- Node.js
- Git
- GitHub
- Visual Studio Code

## O que aprendi

Durante o desenvolvimento deste projeto, pratiquei:

- Criação e organização de arquivos e pastas.
- Programação com JavaScript.
- Criação e exportação de funções.
- Utilização de arquivos JSON.
- Criação de testes simples.
- Uso do terminal no Visual Studio Code.
- Controle de versão com Git.
- Criação de commits.
- Envio de alterações para o GitHub.

## Autor

**Jose Armando**

Projeto desenvolvido para fins de aprendizado e prática.