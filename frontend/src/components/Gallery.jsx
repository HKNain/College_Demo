import React, { useState } from 'react'
import { gallerySection } from '../utils/gallerySectionUtils.js'; 

function Gallery() {
const [imageIndex, setImageIndex] = useState(0)

    const radioButtons = []

    const [selected, setSelected] = useState(null);

for (let index = 0; index < gallerySection.length; index++) {
    radioButtons.push(
        <input 
          type="radio" 
          key={index} 
          name="gallery" 
          checked={imageIndex === index}
          onChange={() => setImageIndex(index)}
        />
    );
}





  return (
    <div className='w-full p-12 mt-3 flex flex-col justify-around items-center gap-8 '>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-3xl text-black '>
                Gallery
            </h1>
            <p className='text-xl text-gray-400 '>Check our gallery from the recent events</p>
        </div>
        <div className='p-4 w-full flex flex-col '>

            <div>

            </div>
            <div className='flex justify-center w-full items-center p-5 gap-4'>
                {radioButtons}
            </div>

        </div>
    </div>
  )
}

export default Gallery
