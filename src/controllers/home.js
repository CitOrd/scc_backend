const ctrl = {}

const {poost} = require("../models")

ctrl.index = async (req,res)=>{
     await poost.find().sort({timestamp: -1})
     .then(documentos =>{
         const contexto={
             poost: documentos.map(documento=>{
                return{
                    title: documento.title,
                    description: documento.description
                }
             })
             
         }
         res.render('index', {poost: contexto.poost})
    
     })
    
}

module.exports = ctrl