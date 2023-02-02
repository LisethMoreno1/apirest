const asignaturas=[{nombre: 'liseth', asignatura: 'matematicas'}]

const asignaturaEndpoint =(req,res)=>{
    res.json({
        nombre: asignaturas
    })
}

function crearAsignatura(req,res){
    const data = req.body
    asignaturas.push(data);
    res.status(200).json({createdAsignaturas: data})
}

function editarAsignatura(req,res){
    const asignatura= req.params.asignatura;
    const data = req.body
    asignaturas[asignatura]=data;
    res.status(200).json({updatedAsignaturas: asignaturas[asignatura]})
}

function eliminarAsignatura(req,res){
    const asignatura= req.params.asignatura;
    const data= asignaturas[asignatura];
    asignaturas.splice(asignatura, 1)
    res.status(200).json({deleteAsignaturas: data})
}

module.exports={
    asignaturaEndpoint,
    crearAsignatura,
    editarAsignatura,
    eliminarAsignatura,
}