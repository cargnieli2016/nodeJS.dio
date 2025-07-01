const p = require("./service/products")

async function main() {
    console.log("\n")
    console.log("             == Carrinho de Compras ==        ");
    p.getFullNme("480", "Teclado 101 teclas");
    p.getFullNme("481", "Mouse");
    p.getFullNme("482", "MousePad");
    console.log("\n")
    
}

main();