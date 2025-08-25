import axios from "axios";
import FormData from "form-data";

export const fileUpload = async (req, res) => {
  try {
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

    const fileUrl = response.data.url;

    return res.status(200).json({
      message: "Image uploaded successfully",
      fileUrl,
    });

  } catch (error) {
    console.log("error in image upload", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
