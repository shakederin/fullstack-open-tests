const User = require("../modules/user.model")
const bcrypt = require("bcrypt");

exports.createUser = async (req,res) =>{
    const userData = req.body;
    if(!userData.username || ! userData.password || !userData.name ) {
      res.status(400).send("missing user data")
    }
    const password = await bcrypt.hash(userData.password, 10)
    const newUser =  new User({
      username : userData.username,
      name : userData.name,
      passwordHash : password,
    })
    User.insertMany(newUser);
    res.send("user add!")
}