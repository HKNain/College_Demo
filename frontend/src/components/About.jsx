import { useState, useEffect } from "react";
import { api } from "../utils/axios"; // adjust path if needed

const About = ({role}) => {
  const [aboutData, setAboutData] = useState({
    AboutHeading1: "RedHat Academy SOGI",
    AboutPara: `Red Hat® Academy provides a curriculum to help education institutions keep pace with 
    the demands of the industry. The curriculum involves hands-on instruction across the 
    platform, middleware, and cloud technologies built with input from Red Hat development, 
    support, and field consulting teams. Unlike a generic “distribution agnostic” Linux® 
    curriculum, Red Hat’s curriculum is based on Red Hat Enterprise Linux, the leading 
    enterprise Linux platform. Rather than learning theoretical skills, students learn 
    practical skills based on use cases from thousands of enterprise implementations.`
  });

  const [editableId, setEditableId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/admin/geteditaboutdata");
        setAboutData(response.data.heroData); // backend should return aboutData object
      } catch (error) {
        console.error("API Error:", error.response || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    if ( role ==='Admin')
    setEditableId(id);
  };

  const handleBlur = async (id, e) => {
    const newValue = e.target.innerText.trim();

    if (aboutData[id] === newValue) {
      setEditableId(null);
      return;
    }

    const oldValue = aboutData[id];
    setAboutData((prev) => ({ ...prev, [id]: newValue }));

    try {
      console.log("Sending PATCH request to API...");
      const response = await api.patch("/admin/posteditaboutdata", { [id]: newValue });
      console.log(`Updated ${id} successfully`, response.data);
    } catch (error) {
      console.error("API Error:", error.response || error.message || error);
      setAboutData((prev) => ({ ...prev, [id]: oldValue })); // revert if failed
    }

    setEditableId(null);
  };

  const EditableText = ({ id, className, element: Element = "p" }) => (
    <Element
      id={id}
      tabIndex={0}
      contentEditable={editableId === id}
      suppressContentEditableWarning={true}
      onClick={() => handleEdit(id)}
      onBlur={(e) => handleBlur(id, e)}
      className={className}
    >
      {aboutData[id]}
    </Element>
  );

  return (
    <div id="about" className="p-14 w-full flex justify-around items-center">
      <div className="w-1/3 text-black p-4 rounded-xl shadow-lg">
        <EditableText
          id="AboutHeading1"
          element="h1"
          className="font-bold mb-2 text-3xl"
        />
        <EditableText
          id="AboutPara"
          element="p"
          className="text-md font-semibold"
        />
      </div>
    </div>
  );
};

export default About;
