const express = require("express")
const cors = require('cors')
var port = process.env.PORT || 3005
const { mongoose } = require('./config/database')
const { usersRouter } = require("./app/controllers/userController")
const app = express()

app.use(express.json())
app.use(cors())
app.use("/users", usersRouter)

app.listen(port, () => {
    console.log("listening on port ", port)
})
