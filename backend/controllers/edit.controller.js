import editModel from "../models/edit.model.js";

export const postEditData = async (req, res) => {
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

    const updatedHero = await editModel.findOneAndUpdate({}, updates, {
      new: true,
      runValidators: true,
    });

    return res.status(200).json({
      success: "Updated Successfully",
      heroData: updatedHero,
    });
  } catch (error) {
    console.log("Error in postEditData:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


export const getEditData = async ( req, res ) =>{
      try{
      const heroData = await editModel.findOne();
      
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