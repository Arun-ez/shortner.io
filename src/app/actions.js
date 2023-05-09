"use server"
import { connectToDatabase } from "../../config/connect";
import { UrlModel } from "../../models/Url.model";

const GetData = async (key) => {
    try {
        await connectToDatabase();
        let response = await UrlModel.findOne({ key: key });
        return { success: response.origin };
    } catch (error) {
        throw new Error(error);
    }
}

const PostData = async (data) => {
    try {
        await connectToDatabase();
        await UrlModel.create(data);
        return { success: "done" };
    } catch (error) {
        throw new Error(error);
    }
}

export { GetData, PostData }