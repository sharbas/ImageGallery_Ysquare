import express from 'express'
import {loadImages,deleteImage,uploadImage} from '../controller/controller.js'
import { upload } from '../middleware/multer.js'
const router=express.Router()

router.get('/allImages',loadImages)
router.delete('/deleteImage/:id',deleteImage)
router.post('/uploadImage',upload.single('file'),uploadImage)



export default router