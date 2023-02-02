const estudiantes = [{ nombre: "liseth", edad: "20" }];

const estuEndpoint = (req, res) => {
  res.status(200).json({ nombre: estudiantes });
};

function Createestudiante(req, res) {
  const data = req.body;
  estudiantes.push(data);
  res.status(201).json({ createdEstudiantes: data });
}

function editarEstudiantes(req, res) {
  const nombre = req.params.nombre;
  const data = req.body;
  estudiantes[nombre] = data;
  res.status(200).json({ updateEstudiantes: estudiantes[nombre] });
}

function eliminarEstudiantes(req, res) {
  const nombre = req.params.nombre;
  const data = estudiantes[nombre];
  estudiantes.splice(nombre, 1);
  res.status(200).json({ deleteEstudiantes: data });
}

module.exports = {
  estuEndpoint,
  Createestudiante,
  editarEstudiantes,
  eliminarEstudiantes,
};
