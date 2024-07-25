const prompt = require("prompt-sync")();
// const { criar, atualizar, remover, listagem } = require("./crudPaises.js");
const estados = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= estados.length || isNaN(indice);

const listagem = () => {
  estados.forEach((estado, i) => {
    console.log(`${i + 1} - ${estado.sigla} - ${estado.nome}   `);
  });
};
const modelo = () => {
  let estado = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    estado.sigla = prompt("Qual é a UF do Estado? ");
    if (nomeInvalido(estado.sigla)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }
  while (true) {
    estado.nome = prompt("Qual é o nome do Estado ? ");
    if (nomeInvalido(estado.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  return estado;
};
const criar = () => {
  const estado = modelo();

  estados.push(estado);

  console.log("Estado criado com sucesso");
};

const atualizar = () => {
  while (true) {
    if (estados.length == 0) {
      console.log("Lista de estados é vazia");
      break;
    }

    listagem();

    const indice =
      lerIndice("Qual é o indice do EStado que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const estado = modelo();
      estados[indice] = estado;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice =
      lerIndice("Qual é o indice do estado que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      estados.forEach((estado) => {
        if (estado.sequencia == indice) {
          estado.sequencia = -1;
        }
      });
      estados.splice(indice, 1);
      console.log("Estado removido com sucesso");
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
