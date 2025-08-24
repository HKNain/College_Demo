import {Schema,model} from "mongoose"

const editAboutSchema = new Schema ({
   
        
        AboutHeading1 : {
            type : String ,
            default :'RedHat Academy SOGI'
        },
       AboutPara : {
        type : String ,
        default : 'Red Hat® Academy provides a curriculum to help education institutions keep pace with the demands of the industry. The curriculum involves hands-on instruction across the platform, middleware, and cloud technologies built with input from Red Hat development, support, and field consulting teams. Unlike a generic “distribution agnostic” Linux® curriculum, Red Hat’s curriculum is based on Red Hat Enterprise Linux, the leading enterprise Linux platform. Rather than learning theoretical skills, students learn practical skills based on use cases from thousands of enterprise implementations.'
       }

    
}) 

export default  model("editAbout",editAboutSchema)