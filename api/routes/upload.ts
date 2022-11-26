import {Router, Request, Response} from "express"
import multer, {diskStorage} from "multer"

const uploadRouter: Router = Router()

const storage = diskStorage({
    destination:(req, file, cb)=>{
        //save file destination
        cb(null, "upload/")
    },
    filename: (req, file, cb) => {
        //cb(null, req.body.name)
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})

uploadRouter.post("/", upload.array("file", 10), (req:Request, res:Response)=>{
    res.status(200).json("file upload")
})

export {uploadRouter}