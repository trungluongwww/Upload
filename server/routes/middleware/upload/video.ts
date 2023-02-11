import multer from 'multer'
import path from "path";
import random from "../../../../ultilities/strings/random";
import constants from "../../../../constants";
const storage = multer.diskStorage({
    destination : (req,file,cb)=>{
        cb(null,'static')
    },
    filename(req, file: Express.Multer.File, cb: (error: (Error | null), filename: string) => void) {
        cb(null,'video'+random.randomeCode()+'-'+file.originalname)
    }
})

export default multer({
    storage:storage,
    fileFilter(req, file: Express.Multer.File, cb: multer.FileFilterCallback) {
        if (!file){
            cb(null,false)
            return cb(new Error("file not found"))
        }

        const ext = path.extname(file.originalname).replace('.','').toLowerCase()
        if (!constants.upload.extension.video.includes(ext)) {
            cb(null, false);
            return cb(new Error("invalid extension video"))
        }
        cb(null, true);
    }
})