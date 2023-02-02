const { Router } = require("express");
const { asignaturaEndpoint, crearAsignatura, editarAsignatura, eliminarAsignatura } = require("../controllers/asigControllers");

const routerAsignatura = Router();

routerAsignatura.get("/", asignaturaEndpoint);
routerAsignatura.post("/", crearAsignatura);
routerAsignatura.put("/", editarAsignatura);
routerAsignatura.delete("/", eliminarAsignatura);


module.exports = routerAsignatura;
