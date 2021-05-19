const ctrl = {}
const {universidad} = require('../models');



ctrl.create = async (req, res) =>{
    const body = req.body
     await universidad.create(body) 
     console.log(body)
 
 }
 
 ctrl.delete = async (req, res) =>{
     const {id} = req.params
     console.log(id)
     await universidad.findByIdAndDelete(id)
     console.log("fue eliminado")
 }
 
 ctrl.consul = async (req, res) => {
     const {id} = req.params
     await materia.findById(id)
 }

module.exports = ctrl