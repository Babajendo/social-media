require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const sequelize = require('./config/db')


app.get('/', (req, res) => {
    res.send('Hello World!')
})


try {
    await sequelize.authenticate()
    app.listen(port, () => {
        console.log(`This Social Media app is listening on port ${port}`)
    })
}   catch (error) {
    console.error('Unable to connect to the database:', error);
  }
    console.log('Connection has been established successfully.');
 
