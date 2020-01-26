const express = require("express")
var path = require('path');
const cors = require('cors')
var port = process.env.PORT || 3005
const { mongoose } = require('./config/database')
const { usersRouter } = require("./app/controllers/userController")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/users", usersRouter)

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
    console.log("listening on port ", port)
})
