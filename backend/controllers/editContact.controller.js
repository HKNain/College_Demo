import editModel from "../models/editContact.model.js";

export const postEditContactData = async (req, res) => {
  try {
    console.log(req.body);
    const updates = {};

    let hero = await editModel.findOne();

    
    if (!hero) {
      hero = new editModel(); 
      await hero.save();
    }

    
    for (const key in req.body) {
      if (req.body[key] !== undefined && req.body[key] !== hero[key]) {
        updates[key] = req.body[key];
      }
    }

    if (Object.keys(updates).length === 0) {
      return res.status(200).json({ success: "No changes detected", heroData: hero });
    }
    console.log ( updates )
  const updatedHero = await editModel.findOneAndUpdate(
  { _id: hero._id }, // filter
  { $set: updates }, // update
  { new: true, runValidators: true }
);

console.log (updatedHero)


    return res.status(200).json({
      success: "Updated Successfully",
      heroData: updatedHero,
    });
  } catch (error) {
    console.log("Error in postEditData:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getEditContactData = async ( req, res ) =>{
      try{
      let heroData = await editModel.findOne();
      
      if (!heroData) {
        heroData = new editModel()
       await heroData.save()
      }
       
        return res.status(200).json({"success":"getData Successfully",heroData})



    }catch (error ){
        console.log ( " error in getEditdata " , error )
        return res.status(500).json({error : " Internal Server Error"})
    }

}

