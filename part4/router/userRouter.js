const express = require('express');
const bcrypt = require('bcrypt')
const User = require('../modules/user.model.js')
const userRouter= express.Router();
const {createUser} = require("../controller/users")

userRouter.post('/', createUser)




module.exports = userRouter