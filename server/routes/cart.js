import express from "express";

const cart = express.Router();

cart.get("/", (req, res) => {
  res.status(200).json(users);
});

cart
  .route("/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  })
  .post((req, res) => {
    const id = req.params.id;
    const newData = {
      id: parseInt(id),
      name: "Test agregar user POST",
      email: "correo@correo.com",
      edad: 14,
      estado: "activo",
    };
    users.push(newData);
    res.status(200).json(users);
  })
  .delete((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      users.splice(user.id, 1);
      res.status(200).json(users);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  })
  .put((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      user.name = "Test PUT";
      res.status(200).json(users);
    } else {
      res.status(404).send("Usuario no encontrado");
    }
  });

const users = [
  {
    id: 1,
    nombre: "Juan Pérez",
    email: "juan.perez@example.com",
    edad: 30,
    estado: "activo",
  },
  {
    id: 2,
    nombre: "Ana Gómez",
    email: "ana.gomez@example.com",
    edad: 25,
    estado: "activo",
  },
  {
    id: 3,
    nombre: "Luis Ramírez",
    email: "luis.ramirez@example.com",
    edad: 35,
    estado: "inactivo",
  },
  {
    id: 4,
    nombre: "Sofía Castillo",
    email: "sofia.castillo@example.com",
    edad: 28,
    estado: "activo",
  },
  {
    id: 5,
    nombre: "Carlos Díaz",
    email: "carlos.diaz@example.com",
    edad: 42,
    estado: "inactivo",
  },
];

export { cart };
