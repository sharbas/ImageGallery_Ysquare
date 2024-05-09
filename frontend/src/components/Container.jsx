import React, { useEffect, useState } from 'react'
import { FcRemoveImage } from "react-icons/fc"
import axios from 'axios'
import UploadButton from './UploadContainer'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


// import { CiCircleRemove } from "react-icons/ci";
// import { CgPlayListRemove } from "react-icons/cg";
function Container() {
  const [allImages,setAllImages]=useState()

  useEffect(()=>{
    const loadImages=async()=>{
      try{
        let res=await axios.get("http://localhost:3000/allImages")
        console.log('res.allImagessssssssss',res.data.allImages);
setAllImages(res.data.allImages)
      }catch(error){
  console.log('error while loading  the image');
      }
    }
    loadImages()
 
  },[])
  const deleteImage=async(id)=>{
    try {

      const result = await Swal.fire({
        title: 'Are you sure?',
        text: 'You are about to delete this image!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/deleteImage/${id}`);
        // Update the state to reflect the deleted image
        setAllImages(prevImages => prevImages.filter(image => image._id !== id));
        // Show success message
        Swal.fire('Deleted!', 'The image has been deleted.', 'success');
      }
    } catch (error) {
      console.log('Error while deleting the image:', error);
      // Show error message
      Swal.fire('Error!', 'Failed to delete the image.', 'error');
    }
  }
  return (
    <div className='flex flex-wrap justify-evenly m-10 border-2 border-gray-200 pt-10 bg-yellow-200'>

    {/* ///photo container/// */}
    {allImages && allImages.map((image,index)=>{

    return (
    <div key={index} className='relative max-w-sm transition-all duration-300 cursor-pointer filter m-10 ' >
      <img className='rounded-lg transform-scale-80 hover:scale-125 transition-transform' src={`http://localhost:3000/images/${image.image}`} style={{width:'16rem',height:'16rem'}} alt='image description' >
        
      </img>
     
      <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' onClick={()=>deleteImage(image._id)} >
    <FcRemoveImage  style={{width:'2rem',height:'2rem'}} />
  </button>
    </div>
  )})}
{/* //////upload container////// */}
    <UploadButton/>
    </div>
  )
}

export default Container
