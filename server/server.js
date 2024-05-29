import express, { json, urlencoded } from "express";
import { cart } from "./routes/cart.js";
import { product } from "./routes/products.js";
const app = express();
const port = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/cart", cart);
app.use("/products", product);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export { app };
