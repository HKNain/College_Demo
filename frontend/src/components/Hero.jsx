import { useState, useEffect } from "react";
import { api } from "../utils/axios"; // adjust path if needed
import { roleUtil } from "../utils/roleUtil"; // temporarily not used for testing

const Hero =    () => {
  const [userRole, setUserRole] = useState(null);

useEffect(() => {
  const fetchRole = async () => {
    try {
      const role = await roleUtil();
      setUserRole(role);
      console.log("User Role:", role);
    } catch (err) {
      console.error("Error fetching role:", err);
    }
  };
  fetchRole();
}, []);
  const [editableId, setEditableId] = useState(null);
  const [heroData, setHeroData] = useState({
    HeroHeading1:
      "Red Hat Academy turns academic institutions into centers for enterprise-ready talent",
    HeroHeading2: "by outfitting them with Red Hat training and certification.",
    HeroHeading3: "Bridge the gap between education and industry",
    HeroButton: "About RHA - SOGI",
  });
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await api.get("/admin/geteditdata");
      setHeroData(response.data.heroData);
    } catch (error) {
      console.error("API Error:", error.response || error.message || error);
    }
  };

  fetchData();
}, []);
  


  

  const handleEdit = (id) => {
    if (userRole === "Admin"){
    setEditableId(id); }
    
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
      console.log("Sending PATCH request to API...");
      const response = await api.patch("/admin/posteditdata", { [id]: newValue });
      console.log(`Updated ${id} successfully`, response.data);
    } catch (error) {
      console.error("API Error:", error.response || error.message || error);
      setHeroData((prev) => ({ ...prev, [id]: oldValue }));
    }

    setEditableId(null);
  };

  const EditableText = ({ id, className }) => (
    <h1
      id={id}
      tabIndex={0} // make focusable
      contentEditable={editableId === id}
      suppressContentEditableWarning={true}
      onClick={() => handleEdit(id)}
      onBlur={(e) => handleBlur(id, e)}
      className={className}
    >
      {heroData[id]}
    </h1>
  );

  return (
    <div
      id="hero"
      className="h-screen z-40 w-full bg-[url('https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg')] 
        bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center gap-9"
    >
      <div className="h-40 w-40 mt-24">
        <img src="https://rha.socet.edu.in/img/redhat.png" alt="Red Hat Logo" />
      </div>

      <EditableText
        id="HeroHeading3"
        className="text-3xl font-bold text-white"
      />

      <div className="text-xl font-bold text-white flex flex-col justify-center items-center">
        <EditableText id="HeroHeading1" className="" />
        <EditableText id="HeroHeading2" className="" />
      </div>

      {/* Editable button */}
      <div
        role="button"
        tabIndex={0} // make focusable
        contentEditable={editableId === "HeroButton"}
        suppressContentEditableWarning={true}
        onClick={() => handleEdit("HeroButton")}
        onBlur={(e) => handleBlur("HeroButton", e)}
        className="bg-transparent border-2 font-semibold hover:bg-red-500 hover:transition-colors hover:duration-700 text-white border-red-700 px-8 py-2 rounded-3xl cursor-pointer"
      >
        {heroData.HeroButton}
      </div>
    </div>
  );
};

export default Hero;
