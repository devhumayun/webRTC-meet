const express = require('express')
const app = express()
const color = require('colors')
const { createServer } = require('http')
// const { httpServer } = require('socket.oi');
const path = require('path')



// create get route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});


app.listen(5050, () => {
    console.log('Server is runing on 5050 port');
})