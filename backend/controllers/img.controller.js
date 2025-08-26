import Img from "../models/img.model.js";
import axios from "axios";
import FormData from "form-data";

export const ImageonDB = async (req, res) => {
    try {
        if (!req.file || !req.file.buffer) {
        return res.status(400).json({ error: "No file uploaded or multer misconfigured" });
        }
        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;


        console.log(fileBuffer, fileName);


        const form = new FormData();
        form.append("file", fileBuffer, fileName);
        form.append("fileName", fileName);

        const response = await axios.post(process.env.IMAGEKIT_UPLOAD_URL, form, {
            headers: {
                ...form.getHeaders(),
                Authorization: `Basic ${Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ":").toString("base64")}`,
            },
        });

        console.log("Response : ",response)

        const fileUrl = response.data.url;

        console.log("fileURL", fileUrl)

        const newImage = new Img({
            fileUrl
        });
 
        if(newImage){
            await newImage.save();

            res.status(201).json({
                _id: newImage._id,
                fileUrl,
                message: "Image uploaded and saved to DB"
            });
        }else{
            res
            .status(400)
            .json({ error: "File didn't save" });
        }
    } catch (error) {
        console.log("Error in Saving Image", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}


export const updateImage = async (req, res) => {
  try {
    const imageId = req.params.id; // Assuming the image ID comes from URL params

    if (!req.file || !req.file.buffer) {
      return res.status(400).json({ error: "No file uploaded or multer misconfigured" });
    }

    // Find existing image document by ID
    const existingImage = await Img.findById(imageId);
    if (!existingImage) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Prepare new image upload to ImageKit
    const fileBuffer = req.file.buffer;
    const fileName = req.file.originalname;

    const form = new FormData();
    form.append("file", fileBuffer, fileName);
    form.append("fileName", fileName);

    const response = await axios.post(process.env.IMAGEKIT_UPLOAD_URL, form, {
      headers: {
        ...form.getHeaders(),
        Authorization: `Basic ${Buffer.from(process.env.IMAGEKIT_PRIVATE_KEY + ":").toString("base64")}`,
      },
    });

    // Get new image URL from response
    const newFileUrl = response.data.url;

    // Update document with new URL
    existingImage.fileUrl = newFileUrl;
    await existingImage.save();

    // Return updated image info
    res.status(200).json({
      _id: existingImage._id,
      fileUrl: newFileUrl,
      message: "Image updated successfully",
    });
  } catch (error) {
    console.error("Error in updating image", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getImageUrlById = async (req, res) => {
  try {
    const imageId = req.params.id;

    // Find image document by ID
    const imageDoc = await Img.findById(imageId).select("fileUrl");

    if (!imageDoc) {
      return res.status(404).json({ error: "Image not found" });
    }

    // Respond with the fileUrl
    res.status(200).json({ fileUrl: imageDoc.fileUrl });
  } catch (error) {
    console.error("Error fetching image URL:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
