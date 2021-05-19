const ctrl = {}
const { verificarToken } = require('../middlewares/authentication');
const {capturista} = require('../models');
const bcrypt = require('bcrypt')
const Token = require('../classes/token')

ctrl.create = async (req, res) =>{
   const body = req.body

   const capturist = {
    nombre: req.body.nombre,
    usuario: req.body.usuario,
    contrasenia: bcrypt.hashSync(req.body.contrasenia, 10)
};
capturista.create(capturist).then(capturistasDB => {
    const tokenCapturista = Token.getJwtToken({
        _id: capturistasDB._id,
        nombre: capturistasDB.nombre,
        usuario: capturistasDB.usuario
    });
    res.json({
        ok: true,
        token: tokenCapturista 
    });
}).catch(err => {
    res.json({
        ok: false,
        err
    });
});
}


ctrl.delete = async (req, res) =>{
    const {id} = req.params
    console.log(id)
    await capturista.findByIdAndDelete(id)
    console.log("fue eliminado")
}

ctrl.consul = async (req, res) => {
    const {id} = req.params
    await capturista.findById(id)
}


ctrl.login = (req, res) =>{

    const body = req.body
    capturista.findOne({usuario: body.usuario}, (err, capturistaDB) =>{
        if(err){
            throw err
        }
        if(!capturistaDB){
            return res.json({
                ok: false,
                msj: 'la contraseña no fue válida'
            })
        }
        if(capturistaDB.compararPassword(body.contrasenia)){
            const capturistaToken = Token.getJwtToken({
             _id: capturistaDB._id,
             nombre: capturistaDB.nombre,
             usuario: capturistaDB.usuario   
            })
           res.json({
               ok:true,
               token: capturistaToken
           }) 
        }else{
                 return res.json({
                ok: false,
                msj: 'la contraseña no fue válida'
            })
        }
    })
}



module.exports = ctrl