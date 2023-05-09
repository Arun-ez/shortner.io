import mongoose from "mongoose";

const UrlSchema = new mongoose.Schema({
    origin: {
        type: String,
        require: true
    },

    key: {
        type: String,
        require: true,
        unique: true
    }
})

mongoose.models = {};
const UrlModel = mongoose.model("urls", UrlSchema);

export { UrlModel }