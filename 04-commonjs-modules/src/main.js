const { getFullNme, productType } = require("./service/products");
const products = require("./service/products");

const config = require("./service/config");
const database = require("./service/database");

async function main() {
  console.log("\n");
  console.log("             == Carrinho de Compras ==        ");

  getFullNme("1", "teclado");
  products.getFullNme("1", "teclado");

  console.log(productType);
  //   product.getFullNme("480", "Teclado 101 teclas");
  //   product.getFullNme("481", "Mouse");
  //   product.getFullNme("482", "MousePad");
  //   console.log("\n");
  //   product.getProductLabel("mousePad");
  console.log("\n");
  console.log("Está em produção?: " + config.production);
  console.log("Versão do produto: " + config.version);
  console.log("\n");

  database.connectToDataBase("my-data");
  console.log("\n");
}

main();
