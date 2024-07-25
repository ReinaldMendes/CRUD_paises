const prompt = require("prompt-sync")();
// const { criar, atualizar, remover, listagem } = require("./crudPaises.js");
const cidades = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= cidades.length || isNaN(indice);

const listagem = () => {
  cidades.forEach((cidade, i) => {
    console.log(`${i + 1} - ${cidade.sigla} - ${cidade.nome}   `);
  });
};
const modelo = () => {
  let cidade = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    cidade.sigla = prompt("Qual é a UF da Cidade? ");
    if (nomeInvalido(cidade.sigla)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    cidade.nome = prompt("Qual é o nome da Cidade ? ");
    if (nomeInvalido(cidade.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  return cidade;
};
const criar = () => {
  const cidade = modelo();

  cidades.push(cidade);

  console.log("Cidade criada com sucesso");
};

const atualizar = () => {
  while (true) {
    if (cidades.length == 0) {
      console.log("Lista de cidades é vazia");
      break;
    }

    listagem();

    const indice =
      lerIndice("Qual é o indice da Cidade que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const cidade = modelo();
      cidades[indice] = cidade;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice =
      lerIndice("Qual é o indice da cidade que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      cidades.forEach((cidade) => {
        if (cidade.sequencia == indice) {
          cidade.sequencia = -1;
        }
      });
      cidades.splice(indice, 1);
      console.log("Cidade removida com sucesso");
      break;
    }
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listagem,
};
