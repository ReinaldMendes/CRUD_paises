const prompt = require("prompt-sync")();

const paises = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= paises.length || isNaN(indice);

const listagem = () => {
  paises.forEach((pais, i) => {
    console.log(`${i + 1} - ${pais.nome}  `);
  });
};
const modelo = () => {
  let pais = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    pais.nome = prompt("Qual é o nome do Pais ? ");
    if (nomeInvalido(pais.nome)) {
      console.log("O nome não pode ser vazio");
    } else {
      break;
    }
  }

  return pais;
};
const criar = () => {
  const pais = modelo();

  paises.push(pais);

  console.log("Pais criado com sucesso");
};

const atualizar = () => {
  while (true) {
    if (paises.length == 0) {
      console.log("Lista de paises vazia");
      break;
    }

    listagem();

    const indice =
      lerIndice("Qual é o indice do Pais que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      const pais = modelo();
      paises[indice] = pais;
      break;
    }
  }
};

const remover = () => {
  while (true) {
    listagem();

    const indice =
      lerIndice("Qual é o indice do pais que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Indice inválido");
    } else {
      paises.forEach((pais) => {
        if (pais.sequencia == indice) {
          pais.sequencia = -1;
        }
      });
      paises.splice(indice, 1);
      console.log("Jogo removido com sucesso");
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
