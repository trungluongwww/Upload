import {Request, Response, Router} from "express";
import middleware from "./middleware";

export default (r: Router) => {
    r.post('/photo',middleware.upload.singlePhoto,(req:Request,res:Response)=>{
        console.log(req.file?.filename,req.file?.originalname)
        return res.json({msg:"ok"})
    })

    r.post('/list-photo',middleware.upload.arrayPhoto,(req:Request,res:Response)=>{
        if (req.files) {
            console.log(req.files)
        }
        return res.json({msg:"ok"})
    })

    r.post('/video',middleware.upload.singleVideo,(req:Request,res:Response)=>{
        console.log(req.file?.filename,req.file?.originalname)
        return res.json({msg:"ok"})
    })
};

