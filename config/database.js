const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose")
mongoose.Promise = global.Promise

//connecting to mongodb
const CONNECTION_URI = process.env.MongoDB || 'mongodb://localhost:27017/node-crud'
mongoose
    .connect( CONNECTION_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    })
    .then(() => {
        console.log("connected to DB")
    })
    .catch(() => {
        console.log("Something went wrong in DB Connection")
    })

// for Deprecation warnings, go to the below link
// https://mongoosejs.com/docs/deprecations.html#-findandmodify-