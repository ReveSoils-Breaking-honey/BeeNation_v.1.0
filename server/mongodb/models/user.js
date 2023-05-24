import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true,"Please Provide a name"] },
    email: { type: String, required: [true,"Please Provide an email"],unique:[true,"Email Exist"] },
    password: { type: String, required: [true,"Please Provide a password"] },
    details: {type: mongoose.Schema.Types.ObjectId, ref: "UserDetails",},
    avatar: { type: String, required: true },
    allProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;