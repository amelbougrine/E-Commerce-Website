import mongoose from 'mongoose';

const useSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    isAdmin: {type: Boolean, required: true, default: false}
});
const useModel = mongoose.model("User", useSchema);

export default useModel;