import { Schema, model, connect, Document } from 'mongoose';

interface IUser extends Document{
    firstname: string,
    lastname: string,
    email:string,
    password:string,
    createdAt:Date
}

const userSchema:Schema<IUser> = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        index: {unique: true}
    },
    password: {type: String},
    createAt: {
        type: Date,
        default: Date.now
    }
});


const UserModel = model("User", userSchema);
module.exports = {UserModel, userSchema};