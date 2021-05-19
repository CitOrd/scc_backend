const jwt= require('jsonwebtoken')
const { token } = require('morgan')

class Token {

constructor(){}

static getJwtToken(payload){
    return jwt.sign({
        usuario: payload
    }, this.seed, {expiresIn: this.caducidad} )

}

static comprobarToken(userToken){
    return new Promise( (resolve, reject) => { 
        jwt.verify(userToken, this.seed, (err, decoded) =>{
            if(err ){
                reject() 

            }

            else {
                resolve(decoded)
            }
        } )
    })

}

}


module.exports = Token

Token.seed = 'seed-de-mi-app'
Token.caducidad = '30d'

