import {Schema,model} from "mongoose"

const editSchema = new Schema ({
   
        RedHatImg : {
            type : String ,
            default :'https://rha.socet.edu.in/img/redhat.png',
        },
        HeroHeading1 : {
            type : String ,
            default :'Bridge the gap between education and industry'
        },
        HeroHeading2 : {
            type : String ,
            default :'Red Hat Academy turns academic institutions into centers for enterprise-ready talent'
        },
        HeroHeading3 : {
            type : String ,
            default :'Bridge the gap between education and industry'
        },
        HeroButton : {
            type : String ,
            default : 'About RHA-Sogi'
        }

    
}) 

export default  model("editdata",editSchema)