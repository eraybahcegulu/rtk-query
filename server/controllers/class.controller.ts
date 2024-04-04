import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classes = await Class.find()
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Class.findOne({  _id: req.params.classId })
        return res.status(200).json(exist);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const add = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const existClass = await Class.findOne({ className: req.body.className })
        if (existClass) {
            return res.status(400).json({ message: `${existClass.className} already exist in your classes.` });
        }

        const newClass = new Class({
            className: req.body.className,
        });

        await newClass.save();
        return res.status(200).json({ message: "created" });
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};