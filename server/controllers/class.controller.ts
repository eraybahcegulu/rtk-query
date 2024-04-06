import { Request, Response, NextFunction } from "express";
import Class from "../models/class.model";

export const getClasses = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const classes = await Class.find()
        return res.status(200).json(classes);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const getClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const exist = await Class.findOne({ _id: req.params.classId })
        return res.status(200).json(exist);
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const createClass = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const newClass = new Class({
            className: "test",
        });

        await newClass.save();
        return res.status(200).json({ message: "created" });
    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const deleteClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await Class.deleteOne({ _id: req.params.classId })

        return res.status(200).json({ message: "deleted" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};

export const updateClass = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        const exist = await Class.findOne({ _id: req.params.classId })

        if (!exist) {
            return res.status(400).json({ message: 'Class not found' });
        }

        if(exist.className === req.body.className) {
            return res.status(400).json({ message: 'Already exist' });
        }

        exist.className = req.body.className;
        await exist.save();

        return res.status(200).json({ message: "updated" });

    } catch (error: any) {
        console.error('Error', error);
        return res.status(500).json(error.message);
    }
};