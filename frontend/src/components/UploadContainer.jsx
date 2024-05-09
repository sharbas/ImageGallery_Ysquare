import React, { useState } from 'react'
import { IoCloudUpload } from "react-icons/io5";
import axios from 'axios'

function UploadButton() {

  const [file,setFile]=useState()

  function handleFile(e){
    const formdata=new FormData()
    formdata.append('file',file)
    axios.post('http://localhost:3000/uploadImage',formdata)
    console.log('file on upload',file);
  }

 
  return (
    <div className='bg-green-100 relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 flex justify-center items-center flex-wrap rounded-xl m-10' style={{width:'16rem',height:'16rem'}}>
       <input type='file' name='file' onChange={e=>setFile(e.target.files[0])} className='ml-20  w-full overflow-hidden truncate'/>
     <button onClick={handleFile} className='bg-yellow-200  rounded-lg w-3/5 h-1/6 '>
   
     <IoCloudUpload className=""/>upload your Image
   
   
     </button>


    </div>
  )
}

export default UploadButton
