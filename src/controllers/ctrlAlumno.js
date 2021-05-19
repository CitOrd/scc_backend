const ctrl = {}
const {alumno} = require('../models');



ctrl.create = async (req, res) =>{
    const body = req.body
 
     await alumno.create(body) 
     console.log(body)
 
 }
 
 ctrl.delete = async (req, res) =>{
     const {id} = req.params
     console.log(id)
     await alumno.findByIdAndDelete(id)
     console.log("fue eliminado")
 }
 
 ctrl.consul = async (req, res) => {
     const {id} = req.params
     await alumno.findById(id)
 }

module.exports = ctrl