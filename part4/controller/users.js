const User = require("../modules/user.model")
const bcrypt = require("bcrypt");

exports.createUser = async (req,res) =>{
    const userData = req.body;
    if(!userData.username || ! userData.password || !userData.name ) {
        res.status(400).send("missing user data")
        return;
    }
    if(userData.username.length < 3 || userData.password.length < 3){
        res.status(400).send("invalid data");
        return;
    }
    const password = await bcrypt.hash(userData.password, 10)
    const newUser =  new User({
      username : userData.username,
      name : userData.name,
      passwordHash : password,
    })
    try {
        await User.insertMany(newUser);
        res.send("user add!")
    } catch (error) {
        res.status(400). send("this username already taken")
    }
}