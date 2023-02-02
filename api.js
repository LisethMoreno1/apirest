const express = require("express");
const routerAsignatura = require("./routes/asignaturaRoutes");
const routerEstudiante = require("./routes/estudiantesRoutes");
const api = express();
const port = 8000;

api.get("/", (req, res) => {
  res.json({
    saludo: "hola",
  });
});
api.use(express.json());
api.use("/api/estudiante", routerEstudiante);
api.use("/api/asignatura", routerAsignatura);


api.listen(port, () =>
  console.log(`Servidor iniciado en http://localhost:${port}`)
);
