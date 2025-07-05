const product = require("./service/products");
const config = require("./service/config");
const database = require("./service/database");

async function main() {
    // console.log("\n")
    // console.log("             == Carrinho de Compras ==        ");
    // p.getFullNme("480", "Teclado 101 teclas");
    // p.getFullNme("481", "Mouse");
    // p.getFullNme("482", "MousePad");
    // console.log("\n")
    // p.getProductLabel("mousePad")
    // console.log("\n");
    console.log("\n");
    console.log("Está em produção?: " + config.production);
    console.log("Versão do produto: " + config.version);
    console.log("\n");
    
}

main();