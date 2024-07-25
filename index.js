const prompt = require("prompt-sync")();
const { criar: criarCidade, atualizar: atualizarCidade, remover: removerCidade, listagem: listarCidades } = require("./crudCidades.js");
const { criar: criarEstado, atualizar: atualizarEstado, remover: removerEstado, listagem: listarEstados } = require("./crudEstados.js");
const { criar: criarPais, atualizar: atualizarPais, remover: removerPais, listagem: listarPaises } = require("./crudPaises.js");

while (true) {
  console.log(`
    1 - Criar Cidade
    2 - Listar Cidades
    3 - Atualizar Cidade
    4 - Remover Cidade
    5 - Criar Estado
    6 - Listar Estados
    7 - Atualizar Estado
    8 - Remover Estado
    9 - Criar País
    10 - Listar Países
    11 - Atualizar País
    12 - Remover País
    13 - Sair
  `);

  const opcao = prompt("Qual opção deseja? : ");

  switch (opcao) {
    case "1":
      criarCidade();
      break;
    case "2":
      listarCidades();
      break;
    case "3":
      atualizarCidade();
      break;
    case "4":
      removerCidade();
      break;
    case "5":
      criarEstado();
      break;
    case "6":
      listarEstados();
      break;
    case "7":
      atualizarEstado();
      break;
    case "8":
      removerEstado();
      break;
    case "9":
      criarPais();
      break;
    case "10":
      listarPaises();
      break;
    case "11":
      atualizarPais();
      break;
    case "12":
      removerPais();
      break;
    case "13":
      process.exit();
    default:
      console.log("Opção inválida, tente novamente.");
      break;
  }
}
