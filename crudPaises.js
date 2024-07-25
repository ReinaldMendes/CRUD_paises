const prompt = require("prompt-sync")();

const paises = [];

const lerIndice = (mensagem) => parseInt(prompt(mensagem));

const nomeInvalido = (nome) => nome == "";

const indiceInvalido = (indice) =>
  indice < 0 || indice >= paises.length || isNaN(indice);

const listagem = () => {
  paises.forEach((pais, i) => {
    console.log(`${i + 1} - ${pais.nome}`);
  });
};

const modelo = () => {
  let pais = {}; // não posso adicionar atributos em algo indefinido

  while (true) {
    pais.nome = prompt("Qual é o nome do País? ");
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

  console.log("País criado com sucesso");
};

const atualizar = () => {
  while (true) {
    if (paises.length == 0) {
      console.log("Lista de países vazia");
      break;
    }

    listagem();

    const indice = lerIndice("Qual é o índice do País que deseja atualizar? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
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

    const indice = lerIndice("Qual é o índice do país que deseja remover? ") - 1;

    if (indiceInvalido(indice)) {
      console.log("Índice inválido");
    } else {
      paises.splice(indice, 1);
      console.log("País removido com sucesso");
      break;
    }
  }
};

module.exports = {
  criar,
  atualizar,
  remover,
  listagem,
  paises
};
