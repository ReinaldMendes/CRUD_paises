const prompt = require("prompt-sync")();
const { listagem: listarEstados } = require("./crudEstados.js");
const cidades = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= cidades.length || isNaN(indice);

const listagem = () => {
  cidades.forEach((cidade, i) => {
    console.log(`${i + 1} - ${cidade.sigla} - ${cidade.nome} - Estado: ${cidade.estado.nome} - País: ${cidade.estado.pais.nome}`);
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
    cidade.nome = prompt("Qual é o nome da Cidade? ");
    if (nomeInvalido(cidade.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  listarEstados();
  const indiceEstado = lerIndice("Qual é o índice do Estado da Cidade? ") - 1;
  cidade.estado = estados[indiceEstado];

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

    const indice = lerIndice("Qual é o índice da Cidade que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
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

    const indice = lerIndice("Qual é o índice da cidade que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
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
