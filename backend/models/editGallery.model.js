import {Schema,model} from "mongoose"

const editGallerySchema = new Schema ({
   
        
        GalleryHeading1 : {
            type : String ,
            default :'GALLERY'
        },
        GalleryPara1 : {
            type : String ,
            default :'GALLERY'
        },
       
    
}) 

export default  model("editGallery",editGallerySchema)