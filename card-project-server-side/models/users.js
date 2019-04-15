var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


var userSchema = new.mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: String,
  email: {type: String, required: true},
  password: {type: String, required: true}
});

userSchema.pre("save", function(next){
  const user = this;
if (!user.isModified("password")){
  return next();
}
bcrypt.hash(user.password, 10).then(hashedPassword => {
  user.password = hashedPassword;
  next();
});
});

module.exports = mongoose.model("user", userSchema);