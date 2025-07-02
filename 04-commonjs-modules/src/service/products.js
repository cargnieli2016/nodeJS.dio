// todas as funções que lidam com produto

const productType = {
  version: "digital",
  tax: "x1",
};

//hidden const
const apiURL = {
  url: 'www.google.com.br',
}

async function getFullNme(codeID, produtctName) {
  console.log(
    "product: -> " +
      "CodeId: " +
      codeID +
      "    " +
      "ProductName: -> " +
      produtctName
  );
  await doBreakLine();
}

//hidden function
async function doBreakLine() {
  console.log("\n");
}

async function getProductLabel(productName) {
  console.log("Product " + productName);
}

module.exports = {
  getFullNme,
  getProductLabel,
  productType,
};
