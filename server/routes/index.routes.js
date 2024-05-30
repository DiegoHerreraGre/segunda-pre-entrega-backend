import express from "express";
import routesProducts from "./products.routes.js";
import routesCart from "./users.routes.js";

const router = express.Router();

router.use("/products", routesProducts);
router.use("/cart", routesCart);

export default router;
