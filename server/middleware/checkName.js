import { request, response } from "express";

export function checkName(req = request, res = response) {
  const { name, lastname, email, age } = req.body;
  if (!name || !lastname || !email || !age) {
    res.status(400).send("Name is required");
  } else {
    console.log("Name seems ok");
    next();
  }
}
