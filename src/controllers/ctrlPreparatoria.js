const ctrl = {}
const {preparatoria} = require('../models');

const { fstat } = require('fs');
const path =require('path');
const { Recoverable } = require('repl');
const helpers = require('../helpers/libs')

ctrl.create = async (req, res) => {

   const imgurl = helpers.randomNumber() 
   const imageTempPath = req.files.path
   const ext = path.extname(req.files.originalname).toLowerCase()
   const targetPath = path.resolve(`src/public/upload/${imgurl}${ext}`) 
  

   if(ext === '.png' || ext === '.jpg'  ){
        fs.rename(imageTempPath, targetPath)
          const newPreparatoria = new preparatoria({
               filename: imgurl+ext,
               nombre: req.body.nombre,
               clave: req.body.clave
          })

          await capturista.create(newPreparatoria)  
     
        }       
   
}

module.exports = ctrl