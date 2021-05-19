const ctrl = {}
const {materia} = require('../models');

ctrl.create = async (req, res) =>{
    const body = req.body
     await materia.create(body) 
     console.log(body)
 
 }
 
 ctrl.delete = async (req, res) =>{
     const {id} = req.params
     console.log(id)
     await materia.findByIdAndDelete(id)
     console.log("fue eliminado")
 }
 
 ctrl.consul = async (req, res) => {
     const {id} = req.params
     await materia.findById(id)
 }

ctrl.update = (req, res) => {
    const {id} = req.params
    const matAux =  {
        titulo: req.body.titulo,
        semestre: req.body.semestre,
        clave: req.body.clave
    }
    materia.findByIdAndUpdate(id, matAux)
}

ctrl.list = async (req, res) =>{
    const materias = await materia.find()
    res.json({
        ok:true,
        materias
    })
}

module.exports = ctrl