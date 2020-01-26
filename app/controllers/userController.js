const express = require("express")
const router = express.Router()
const { User } = require("../models/users")

// get all the user
router.get('/', (req, res) => {
    User.find()
        .then(users => {
            res.send(users)
        })
        .catch(err => {
            res.send(err.message)
        })
})

//create record with username and email
router.post('/', (req, res) => {
    const body = req.body
    const { email } = body
    // Checking whether an email is already exists or not
    User.findOne({ email })
        .then(record => {
            // is record is not found then create an user
            if(!record){
                const user = new User(body)
                user.save()
                    .then(function (user) {
                        res.send(user)
                    })
                    .catch(function (err) {
                        res.send(err)
                    })
            }else {
                res.send("Email already in use")
            }
        })
        .catch(err => {
            res.send(err)
        })

})

// get the user with the id
router.get('/:id', (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then(user => {
            res.send(user)
        })
        .catch(()=> {
            res.send({message: "Not found any user with this id"})
        })
})

// update the user record
router.put('/:id', (req, res) => {
    const id = req.params.id
    const body = req.body
    User.findByIdAndUpdate(id, {$set: body}, {new: true, runValidators: true})
        .then(user=> {
            res.send(user)
        })
        .catch(err => {
            res.send({ message: "No record found with this id"})
        })
})

// delete the user record
router.delete('/:id', (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(user => {
            res.send(user)
        })
        .catch(() => {
            res.send ({ message: "No record found with this id"})
        })
})

module.exports = {
    usersRouter : router
}