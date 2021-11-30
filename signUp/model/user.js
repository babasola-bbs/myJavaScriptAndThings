const mongoose = require('mongoose')
const uuid = require('uuid')



const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        maxlength: 32,
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, "By Our Standards, That Name Is Not Valid"], 
        index: true
    },
    email: {
        type: String,
        required: [true, "Cannot Be Blank"],
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String
    },
    salt: String,
},{timestamps: true})


    userSchema.pre('save', function(next){
            this.salt = uuid()
            password = securePassword(this.plainPassword, this.salt)
            next()
        })

        //creating static methods for clean routes
    userSchema.statics.Create = async (data) => {
            let model = new User(data); 
            let resUser = await model.save(); //save your user
            return resUser;
        };


    const securePassword = function(plainPassword, salt){
        if(!plainPassword) return "";

        try{
            return crypto.createHmac("sha256", this.salt).update(plainPassword).digest("hex")
        }
        catch(err){
            return "";
        }
    };


let User = mongoose.model("User", userSchema)
module.exports = {User};