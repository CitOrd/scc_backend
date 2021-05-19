const path = require('path')

const exphbs = require('express-handlebars')


const morgan = require('morgan')

const express = require('express')

const routes = require('../routes/index')
const errorHandler = require('errorhandler')

const expressfiles = require('express-fileupload')


module.exports = app=>{

    app.set('port', process.env.PORT || 3000);

    app.set('views', path.join(__dirname, '../views'))

    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require( './helpers')
    }))

    app.set('view engine', '.hbs')

    app.use(morgan('dev'))
  
    app.use(express.urlencoded({extended: false}))
    app.use(express.json())
    

    app.use('/public', express.static(path.join(__dirname, '../public')))
    app.use(express.urlencoded({ extended: true }));

    app.use(expressfiles())

    routes(app)

    if('development' === app.get('env')){
        app.use(errorHandler)
    }

    return app
}