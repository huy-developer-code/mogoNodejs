const mongoose = require("mongoose")
const express = require("express")
const router = express.Router()
const User = require('../model/User')

//Lay du lieu tu database
router.get("/", (req, res ,next) =>{
    User.find({})
    .then(data => {
        res.json(data)
    })
    .catch(err =>{
        err.status(500).json('loi serve')
    })
})
//them mot du lieu vao db
router.post("/", (req, res ,next) =>{
    var username = req.body.username
    var password = req.body.password
    User.findOne({
        username : username,
        password : password
    })
    .then(data => {
        if (data) {res.json("da co")}
        else{
            return User.create
            ({
            username: req.body.username ,
            password : req.body.password
            })
        }
    })
    .then(data => {
        res.json('them thanh cong')
    })
    .catch(err =>{
        res.status(500).json('loi server')
    })
})
    
//update du lieu 
router.put("/:id", (req, res ,next) =>{
    var id = req.params.id
    var newPassWord = req.body.newPassWord

    User.findByIdAndUpdate(id ,{
        password : newPassWord
    })
    .then(data =>{
        res.json('update thanh cong')
    })
    .catch(err =>{
        err.status(500).json('loi server')
    })
})
//xoa du lieu
router.delete("/:id", (req, res ,next) =>{
    var id = req.params.id
    User.findByIdAndDelete(id)
    .then(data => {
        res.json('xoa thanh cong')
    })
})
module.exports = router