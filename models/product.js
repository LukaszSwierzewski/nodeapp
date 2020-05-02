const fs = require("fs");
const path = require("path");

const getProductsFromFile = (cb) => {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

module.exports = class Product {
  constructor(title, description, price, image) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = image;
  }

  save() {
    this.id = Math.random().toString();
    const p = path.join(
      path.dirname(process.mainModule.filename),
      "data",
      "products.json"
    );
    fs.readFile(p, (err, fileContent) => {
      let products = [];
      if (!err) {
        products = JSON.parse(fileContent);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
  static findById(id, cb) {
    getProductsFromFile((products) => {
      const product = products.find((p) => p.id === id);
      cb(product);
    });
  }
};
