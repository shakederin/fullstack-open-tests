const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
      },
      name: String,
      passwordHash: String,
      notes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Blog'
        }
      ],
})

const mongoUrl = "mongodb+srv://shaked:12345675@cluster0.1msvy.mongodb.net/Part4?retryWrites=true&w=majority"
mongoose.connect(mongoUrl).then(()=>console.log('DB connected...'))

const User = mongoose.model('User', UserSchema);

module.exports = User;