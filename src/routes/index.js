const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const poost = require('../controllers/poost')

const materia = require('../controllers/ctrlMateria')
const planesEst = require('../controllers/ctrlPlanEstudio')
const prep = require('../controllers/ctrlPreparatoria')
const cap = require('../controllers/ctrlCapturista')
const uni =require('../controllers/ctrlUniversidad')
const alum= require('../controllers/ctrlAlumno')

module.exports = app =>{
    
    router.get('/', home.index)
    router.get('/poost/:poost_id', poost.index )
    router.post('/poost', poost.create)
    router.post('/poost/:poost_id/like', poost.like)
    router.post('/poost/:poost_id/comment', poost.comment)
    router.delete('/poost/:poost_id', poost.delete)

     /**Para registrar las preparatorias */
     router.post('/preparatoria/add', prep.create)

    
     /**Para el crud de materias */
     router.post('/materia/add', materia.create)
     router.delete('/materia/remove/:id', materia.delete)
     router.get('/materia/consul:id', materia.consul)
     router.put('/materia/edit:id', materia.update)
     router.get('/materia/listar',materia.list)

     /**Para el crud de planes de estudio */
     router.post('/planesEstudio/add', planesEst.create)
     router.delete('/planEstudio/remove/:id', planesEst.delete)
     router.get('/planEstudio/consul/:id', planesEst.consul)
     router.get('/planEstudio/listar', planesEst.listar)

     /**Para el crud de capturistas */
     router.post('/capturista/login', cap.login)
     router.post('/capturista/add', cap.create)
     router.delete('/capturista/remove/:id', cap.delete)
     router.get('/capturista/consul/:id',cap.consul)


     /**Para crud de universidad */
     router.post('/universidad/add', uni.create)
     router.delete('/universidad/remove/:id', uni.delete)
     router.get('/universidad/consul/:id', uni.consul)

     /**Para el crud de alumnos */
     router.post('/alumno/add', alum.create)
     router.delete('/alumno/remove', alum.delete)
     router.get('/alumno/consul', alum.consul)
 
     
    app.use(router)

}