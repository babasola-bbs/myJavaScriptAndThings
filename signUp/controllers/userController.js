let {User} = require('../model/user')
const {validationResult} = require('express-validator')
var jwt = require('jsonwebtoken')
var expressJWT = require('express-jwt')



exports.signup = async (req, res) => {

  try {
    console.log(req.body);
    const user = await User.create(req.body); //create a user
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      err: "Not Able To Save To Database",
    });
  }
};




    // const errors = validationResult(req)

    // if(!errors.isEmpty()){
    //     return res.status(400).json({
    //         error: errors.array()[0].msg
    //     })
    // }

    // const users = new User(req.body)
    // users.save((err, user) => {
    //     if(err){
    //         return res.status(400).json({
    //             error: "Unable To Add User"
    //         })
    //     }
    //     return res.json({
    //         message: "Success",
    //         user
    //     })
    // })



exports.signin = (req, res) => {

    const {email, password} = req.body
    User.findOne({email}, (err, user) =>{
        if(err || !user){
            return res.status(400).json({
                error: "Email Not Found"
            })
        }

        // if(!user.authenticate(password)){
        //     return res.status(400).json({
        //         error: "Email And Password Do Not Match"
        //     })
        // }

        const token = jwt.sign({_id: user._id}, process.env.SECRET)

        res.cookie('token', token, {expire: new Date() + 1})

        const {_id, name, email} = user
        return res.json({
            token,
            user:{
                _id,
                name,
                email
            }
        })
    })
}


exports.signout = (req, res) => {

    res.clearCookie('token')
    return res.json({
        message: "User Successfully Signed Out"
    })

}