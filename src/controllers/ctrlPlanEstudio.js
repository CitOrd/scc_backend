const ctrl = {}
const {planEstudio} = require('../models');



ctrl.create = async (req, res) =>{
    const body = req.body
 
     await planEstudio.create(body) 
     console.log(body)
 
 }
 
 ctrl.delete = async (req, res) =>{
     const {id} = req.params
     console.log(id)
     await planEstudio.findByIdAndDelete(id)
     console.log("fue eliminado")
 }
 
 ctrl.consul = async (req, res) => {
     const {id} = req.params
     await planEstudio.findById(id)
 }

 
 ctrl.listar = async (req, res) => {
    const planesEstudio = await planEstudio.find()
    res.render('planEstudio-views/list-planesEstudio', {planEstudio})
 }
 
module.exports = ctrl