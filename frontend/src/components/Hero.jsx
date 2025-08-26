import { useState, useEffect, useRef } from "react";
import { api } from "../utils/axios";

const Hero = ({role}) => {
  // const [role,setRole] = useState('user')
  
    // useEffect(()=>{
    //   const handleRole = async () =>{
    //     try {
    //       const response = await api.get('/api/auth/me')
    //       console.log ( response  )
    //       setRole(response.data.role)
    //     } catch (error) {
    //       console.log ( " error inside role part " , error )
    //       setRole('user')
    //     }
    //   }
    //     handleRole()
    // },[role])

  const [heroData, setHeroData] = useState({
    HeroHeading1:
      "Red Hat Academy turns academic institutions into centers for enterprise-ready talent",
    HeroHeading2: "by outfitting them with Red Hat training and certification.",
    HeroHeading3: "Bridge the gap between education and industry",
    HeroButton: "About RHA - SOGI",
  });

  // Simulated image data from backend, including _id and fileUrl
  const [heroImage, setHeroImage] = useState({
    _id: "68ac436a27b28e90daaed0bb", // ID of image document to PATCH later
    fileUrl:
      "https://ik.imagekit.io/kwy9fhvlz/SwasthyaLogo_Aapwocwwd.png", // default original image URL
  });

  // Ref to hidden file input for image selection
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/admin/geteditdata");
        setHeroData(response.data.heroData);

        // Also get image info from backend response if available
        if (response.data.heroImage) {
          setHeroImage(response.data.heroImage);
        }
      } catch (error) {
        console.error("API Error:", error.response || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    if (role ==='Admin'){
    setEditableId(id);}
  };

  const handleBlur = async (id, e) => {
    const newValue = e.target.innerText.trim();

    if (heroData[id] === newValue) {
      setEditableId(null);
      return;
    }

    const oldValue = heroData[id];

    setHeroData((prev) => ({ ...prev, [id]: newValue }));

    try {
      const response = await api.patch("/admin/posteditdata", { [id]: newValue });
      console.log(`Updated ${id} successfully`, response.data);
    } catch (error) {
      console.error("API Error:", error.response || error.message || error);
      setHeroData((prev) => ({ ...prev, [id]: oldValue }));
    }

    setEditableId(null);
  };

  const [editableId, setEditableId] = useState(null);

  const EditableText = ({ id, className }) => (
    <h1
      id={id}
      tabIndex={0}
      contentEditable={editableId === id}
      suppressContentEditableWarning={true}
      onClick={() => handleEdit(id)}
      onBlur={(e) => handleBlur(id, e)}
      className={className}
    >
      {heroData[id]}
    </h1>
  );

  // Trigger hidden input when image right-clicked
  const onImageRightClick = (e) => {
    if ( role ==='Admin'){
    e.preventDefault();
    fileInputRef.current && fileInputRef.current.click();}
  };

  // Handle file selection and PATCH new image
  const onFileSelected = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Send PATCH request to update image by id
      const response = await api.patch(`/upload/change/${heroImage._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // On success, update image URL to new one
      if (response.status === 200) {
        setHeroImage((prev) => ({ ...prev, fileUrl: response.data.fileUrl }));
      }
    } catch (error) {
      console.error("Error uploading new image", error.response || error.message || error);
    }
  };

  return (
    <div
      id="hero"
      className="h-screen z-40 w-full bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-9"
      style={{ backgroundImage: `url(${heroImage.fileUrl})` }}
    >
      <div className="h-40 w-40 mt-24">
        {/* Image with onContextMenu for right-click */}
        <img
          src={heroImage.fileUrl}
          alt="Hero"
          onContextMenu={onImageRightClick}
          className="cursor-pointer object-contain h-full w-full"
        />
      </div>

      <EditableText id="HeroHeading3" className="text-3xl font-bold text-white" />

      <div className="text-xl font-bold text-white flex flex-col justify-center items-center">
        <EditableText id="HeroHeading1" className="" />
        <EditableText id="HeroHeading2" className="" />
      </div>

      {/* Editable button */}
      <div
        role="button"
        tabIndex={0}
        contentEditable={editableId === "HeroButton"}
        suppressContentEditableWarning={true}
        onClick={() => handleEdit("HeroButton")}
        onBlur={(e) => handleBlur("HeroButton", e)}
        className="bg-transparent border-2 font-semibold hover:bg-red-500 hover:transition-colors hover:duration-700 text-white border-red-700 px-8 py-2 rounded-3xl cursor-pointer"
      >
        {heroData.HeroButton}
      </div>

      {/* Hidden file input for image selection */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={onFileSelected}
      />
    </div>
  );
};

export default Hero;
