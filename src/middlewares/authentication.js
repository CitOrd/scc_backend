const token = require('../classes/token')

const verificarToken = (req, res, next) => {

    const tokenCapturista = req.get('x-token') || ''

    token.comprobarToken(tokenCapturista).then((decoded) => {
        req.capturista = decoded.capturista;
        next();
    })
        .catch(err => {
        res.json({
            ok: false,
            mensaje: 'El token no es valido'
        });
    });
};


module.exports.verificarToken = verificarToken



