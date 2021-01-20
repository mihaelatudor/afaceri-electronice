const express = require('express')
const app = express()

const Sequelize = require('sequelize')

const sequelize = new Sequelize('ae_db', 'mihaela', 'parola', {
    dialect: "mysql",
    host: "127.0.0.1"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})

app.use('/', express.static('frontend'))
app.listen(8080)