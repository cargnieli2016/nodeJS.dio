// todas as funções que lidam com produto

async function getFullNme(codeID, produtctName) {
  
  console.log("product: -> " + "CodeId: " + codeID + "    " + "ProductName: -> " + produtctName);
}

async function getProductLabel(productName) {
  console.log("Product " + productName);
  
}

module.exports = {
  getFullNme,
  getProductLabel,
};
