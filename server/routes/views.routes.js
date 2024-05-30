import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const examplePerson = {
    name: "Juan",
    lastName: "Perez",
    age: 25,
    email: "juan@example.com",
  };
  res.render("index", { examplePerson });
});

router.get("/admin", (req, res) => {
  const examplePerson = [
    {
      name: "Juan",
      lastName: "Perez",
      age: 25,
      email: "juan@example.com",
      isAdmin: true,
    },
    {
      name: "Pedro",
      lastName: "Gomez",
      age: 30,
      email: "pedro@example.com",
      isAdmin: false,
    },
  ];
  res.render("admin", { examplePerson: examplePerson[0] });
});

export default router;
