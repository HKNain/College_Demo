import {Schema,model} from "mongoose"

const editMentorSchema = new Schema ({
   
        
        MentorHeading1 : {
            type : String ,
            default :'DIRECTOR OF IIIT SNP'
        },
        MentorHeading2 : {
            type : String ,
            default :'FACULTY CO-ORDINATOR'
        },
        MentorHeading3 : {
            type : String ,
            default :'STUDENT AMBASSADOR'
        },
        MentorHeading4 : {
            type : String ,
            default :'RedHat Academy SOGI'
        },
        MentorSpan1 : {
            type : String ,
            default :'Mr. Malvik Chauhan'
        },
        MentorSpan2 : {
            type : String ,
            default :'Mr. Malvik Chauhan'
        },
        MentorSpan3 : {
            type : String ,
            default :'Mr. Malvik Chauhan'
        },
       
    
}) 

export default  model("editMentor",editMentorSchema)