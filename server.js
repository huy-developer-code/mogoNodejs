const express = require('express')
var app = express()
var bodyParser = require ('body-parser')
const User = require('./model/User');
var routeUser = require('./router/User');

// for parsing application/json
app.use(bodyParser.json()); 

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

var routeUser = require('./router/User')
app.use("/api/user",routeUser)


app.post("/register", (req , res , next )=>{
    var username = req.body.username
    var password = req.body.password
    User.findOne({
        username : username,
        password : password
    })
    .then(
        data => {
            if (data)
            {
                res.json('data da ton tai')
            }
            else
            {
                return User.create
                ({
                    username : username,
                    password:password
                })
            }
        })
    .then(data =>
        { res.json('tao tai khoan thamjh cong')}
    )
    .catch(err => {
        err.status(500).json('tao tai khoan khoan failed')
    })

})
app.get("/login",(req ,res ,next)=>{
   res.json("Login")
})
app.post("/login", (req , res , next )=>{
    var username = req.body.username
    var password = req.body.password

    User.findOne({
        username : username,
        password:password
    })
    .then(data =>{
        if(data){
            res.json("dang nhap thanh cong")
        }else{
            res.status(300).json("tai khoan khong dung")
        }
    })
    .catch(err =>{
        err.status(500).json("co loi ben server")
    })
})
app.get('/',(req , res ,  next) => {
    res.json('Home')
})

app.listen(3000, () =>{
    console.log('server started on port 3000')
})
