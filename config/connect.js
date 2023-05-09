import mongoose from "mongoose";

const connectToDatabase = async () => {

    if (mongoose.connection.readyState) {
        return true;
    }

    try {
        let response = await mongoose.connect(process.env.MONGO_URI);
        return true;
        return true;
    } catch (error) {
        throw new Error(error);
    }
}

export { connectToDatabase }