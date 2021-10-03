const express = require('express')
const logger = require("morgan")
const mongoClient = require("mongoose")
const body = require("body-parser")

//Connect mongoose
mongoClient.connect('mongodb://localhost/nodeApiStarter')
.then(() => console.log("KET NOI NHÁ"))
.catch((error) => console.error(`LOI KET NOI ${error} `))

const userRoute = require('./routes/user')


//---------------------------------------------
const app = express()
app.use(body.json())
//Route
app.use('/users', userRoute)

//MiddleWare
app.use(logger('dev'))


//route
app.get('/', (req, res, next) => {
    return res.status(200).json({
        message: "server is OK!"
    })
})
//Catch 404 errors and forward then to error handle
app.use((req, res, next) => {
    const err = new Error('Not found')
    err.status = 404
    next(err)
})
//Error handle function
app.use(() => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500
    return res.status(status).json({
        error: {
            message: error.message
        }
    })
})


//start server
const post = app.get('port') || 3000

app.listen(post, () => console.log(`server is listen on port ${3000}`))
