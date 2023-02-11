import photo from "./photo";
import video from "./video";
import {NextFunction, Request, Response} from "express";
import multer from "multer";
import response from "../../../../ultilities/response";

const singlePhoto = (req: Request, res: Response, next: NextFunction) => {
    photo.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return response.r400(res, null, err.message)
        } else if (err) {
            // An unknown error occurred when uploading.
            return response.r400(res, null, err.message)
        }

        next()
    })
}

const arrayPhoto = (req: Request, res: Response, next: NextFunction) => {
    photo.array('files', 20)(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return response.r400(res, null, err.message)
        } else if (err) {
            // An unknown error occurred when uploading.
            return response.r400(res, null, err.message)
        }

        next()
    })
}

const singleVideo = (req: Request, res: Response, next: NextFunction) => {
    video.single('file')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            // A Multer error occurred when uploading.
            return response.r400(res, null, err.message)
        } else if (err) {
            // An unknown error occurred when uploading.
            return response.r400(res, null, err.message)
        }

        next()
    })
}

export default {
    singlePhoto,
    arrayPhoto,
    singleVideo,
}