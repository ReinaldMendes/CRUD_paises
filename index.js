const prompt = require("prompt-sync")();
const { criar, atualizar, remover, listagem } = require("./crudCidades.js");
while (true) {
  console.log(` 1 - Criar
    2- Listar
    3- Atualizar
    4 -Remover
    5- Sair`);
  const opcao = prompt("Qual opão deseja? : ");

  switch (opcao) {
    case "1":
      criar();
      break;
    case "2":
      listagem();
      break;
    case "3":
      atualizar();
      break;
    case "4":
      remover();
      break;
    case "5":
      process.exit();

    default:
      break;
  }
}
