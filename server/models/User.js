import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  name: String,
  age: Number
},{
  timestamps: true
});

const User = model('User', userSchema);
export default User;
