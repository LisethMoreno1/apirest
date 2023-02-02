const { Router } = require("express");

const {
  estuEndpoint,
  Createestudiante,
  editarEstudiantes,
  eliminarEstudiantes,
} = require("../controllers/estuControlers");

const routerEstudiante = Router();

routerEstudiante.get("/", estuEndpoint);
routerEstudiante.post("/", Createestudiante);
routerEstudiante.put("/:nombre", editarEstudiantes);
routerEstudiante.delete("/:nombre", eliminarEstudiantes);

module.exports = routerEstudiante;
