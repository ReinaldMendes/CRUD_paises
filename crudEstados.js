const prompt = require("prompt-sync")();
const { listagem: listarPaises, paises } = require("./crudPaises.js");
const estados = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= estados.length || isNaN(indice);

const listagem = () => {
  estados.forEach((estado, i) => {
    console.log(`${i + 1} - ${estado.sigla} - ${estado.nome} - País: ${estado.pais.nome}`);
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
    estado.nome = prompt("Qual é o nome do Estado? ");
    if (nomeInvalido(estado.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  listarPaises();
  let indicePais;
  while (true) {
    indicePais = lerIndice("Qual é o índice do País do Estado? ") - 1;
    if (indiceInvalido(indicePais)) {
      console.log("Índice de país inválido");
    } else {
      break;
    }
  }
  estado.pais = paises[indicePais];

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

    const indice = lerIndice("Qual é o índice do Estado que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
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

    const indice = lerIndice("Qual é o índice do estado que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
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
  estados
};
