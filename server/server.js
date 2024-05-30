import express, { json, urlencoded } from "express";
import router from "./routes/index.routes.js";
import __dirname from "./dirname.js";
const app = express();
const port = 8080;

app.use(json());
app.use(urlencoded({ extended: true }));
app.use("/static", express.static("server/public"));

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

console.log(__dirname)

export default app;
