"use server"
import { connectToDatabase } from "../../config/connect";
import { UrlModel } from "../../models/Url.model";

const GetData = async (key) => {
    try {
        await connectToDatabase();
        const response = await UrlModel.findOne({ key: key });
        if (response) return { success: true, url: response.origin }
        return { success: false }
    } catch (error) {
        return { success: false }
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