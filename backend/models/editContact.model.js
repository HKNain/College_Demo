import {Schema,model} from "mongoose"

const editContactSchema = new Schema ({
   
        
        ContactHeading1 : {
            type : String ,
            default :'CONTACT US'
        },
        ContactHeading2 : {
            type : String ,
            default :'IIIT SNP - Studios'
        },
        ContactPara1: {
             type : String ,
            default :'X423+VH3, IIIT Delhi Sonipat Campus, SH 11, Khewra, Haryana'
        },
        ContactPara2: {
             type : String ,
            default :'A Source guiding towards the Open Source'
        },
        ContactAnchor: {
             type : String ,
            default :'rha@socet.edu.in'
        },
       
    
}) 

export default  model("editContact",editContactSchema)