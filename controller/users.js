/*WE CAN INTERACT WITH MONGOOSE IN THREE DIFFRENNT WAYS
1. CALL BACK 
2. PROMISE 
3. ASYNC / AWAIT/ PROMISE
 */
const User = require("../model/User")

const index = (req, res,next) => {
    User.find( {}, (err , users ) => {
        if (err) next(err)
        return res.status(200).json({users})
    })
}
const newUser =(req , res , next) =>{
    console.log('req.body content', req.body)
    //create object model

}

module.exports = { index , newUser}