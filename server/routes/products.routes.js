import { Router } from "express";

const product = Router();

product.get("/", (req, res) => {
  res.status(200).json(products);
});

product.get("/q", (req, res) => {
  const id = req.query.ID;
  const nombre = req.query.nombre;
  const precio = req.query.precio;
  const stock = req.query.stock;

  const JSON_res = {
    id: id,
    nombre: nombre,
    precio: parseInt(precio),
    stock: parseInt(stock),
  };

  res.status(200).send(JSON_res);
});

product
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    const producto = products.find((product) => product.id === parseInt(id));
    if (producto) {
      res.status(200).json(producto);
    } else {
      res.status(404).send("Producto no encontrado");
    }
  })
  .post((req, res) => {
    const id = req.params.id;
    const nuevoProducto = {
      id: parseInt(id),
      nombre: "Nuevo Producto",
      precio: 100,
      stock: 10,
    };
    products.push(nuevoProducto);
    res.status(200).json(products);
  })
  .delete((req, res) => {
    const id = req.params.id;
    const producto = products.find((producto) => producto.id === parseInt(id));
    if (producto) {
      const index = products.indexOf(producto);
      products.splice(index, 1);
      res.status(200).json(products);
    } else {
      res.status(404).send("Producto no encontrado");
    }
  })
  .put((req, res) => {
    const id = req.params.id;
    const producto = products.find((producto) => producto.id === parseInt(id));
    if (producto) {
      producto.nombre = "Producto actualizado";
      producto.precio = 200;
      producto.stock = 20;
      res.status(200).json(producto);
    } else {
      res.status(404).send("Producto no encontrado");
    }
  });

const products = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    stock: 10,
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
    stock: 20,
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300,
    stock: 30,
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 400,
    stock: 40,
  },
  {
    id: 5,
    nombre: "Producto 5",
    precio: 500,
    stock: 50,
  },
  {
    id: 6,
    nombre: "Producto 6",
    precio: 600,
    stock: 60,
  },
  {
    id: 7,
    nombre: "Producto 7",
    precio: 700,
    stock: 70,
  },
  {
    id: 8,
    nombre: "Producto 8",
    precio: 800,
    stock: 80,
  },
];

export default product;
