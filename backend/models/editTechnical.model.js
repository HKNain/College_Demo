import {Schema,model} from "mongoose"

const edittechnicalSchema = new Schema ({
   
        
        TechnicalHeading1 : {
            type : String ,
            default :'TECHNICAL ASSOCIATE'
        },
        TechnicalPara1 : {
            type : String ,
            default :'We are one of the leading and innovative Cloud and open source companies, since 1996. Extending our support and solution starting from large enterprises to small companies, with the most experienced and certified staff.'
        },
        TechnicalPara2 : {
            type : String ,
            default :'Our primary goal is “To provide optimized solutions based on Cloud and open source products” to large Corporate, small enterprise, and individual users, and let organizations feel “Be free and stable”.'
        },
       
       
    
}) 

export default  model("editTechnical",edittechnicalSchema)