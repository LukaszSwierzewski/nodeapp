const express = require("express");
const productsController = require("../controllers/admin");

const router = express.Router();
//   /admin/add-prdocut
router.get("/add-product", productsController.getAddProduct);
router.post("/add-product", productsController.postAddProduct);
router.get("/products", productsController.getProducts);

module.exports = router;
