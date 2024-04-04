import mongoose, { Model, Schema } from "mongoose";
import { BaseModel } from "./base.model"
import { IClassModel } from "../types";

const classSchema = new Schema<IClassModel>(
    {
        className: {
            type: String,
            required: true,
            trim: true,
        },
        ...BaseModel
    },
);

const classModel: Model<IClassModel> = mongoose.model("Class", classSchema);
export default classModel;