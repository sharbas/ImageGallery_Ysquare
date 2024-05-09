import Gallery from "../model/model.js";

const loadImages=async(req,res)=>{
    try{
        console.log('reached loadImages');

        const allImages= await Gallery.find({})
        console.log('allImages',allImages);
        
        return res.status(201).json({allImages})
    }catch(error){
        console.error('Error in LoadImages:', error);
        return res.status(500).json({message: 'Failed to LoadImages'});
    }
}


const deleteImage=async(req,res)=>{
    try{
        console.log('reached deleteImage', req.params );
       let {id}= req.params 
       const deleteImage= await Gallery.deleteOne({_id:id})
        res.status(200).json({message:'item deleted'})
        
    }catch(error){
        console.error('Error in deleteImage:', error);
        return res.status(500).json({message: 'Failed to deleteImage'});
    }
}

const uploadImage=async(req,res)=>{
    try{

        
        const image=req.file.filename
        const addImage=await Gallery.create({image:image})
        console.log(addImage,'added Image to db');
        
    }catch(error){
        console.error('Error in uploadImage:', error);
        return res.status(500).json({message: 'Failed to uploadImage'});
    }
}

export{
    loadImages,
    deleteImage,
    uploadImage
}