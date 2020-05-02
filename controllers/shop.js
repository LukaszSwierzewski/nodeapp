const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Shop",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  // console.log(product);
  Product.findById(prodId, (product) => {
    res.render("shop/product-details", {
      product,
      pageTitle: "Product info",
      path: "/products",
    });
  });
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getCart = (req, res, netx) => {
  res.render("shop/cart", {
    path: "/cart",
    pageTitle: "Shop cart",
  });
};
exports.getCheckout = (req, res, netx) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "checkout",
  });
};
exports.getOrders = (req, res, netx) => {
  res.render("shop/order", {
    path: "/orders",
    pageTitle: "orders",
  });
};
