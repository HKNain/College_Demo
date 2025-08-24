import { useState, useEffect } from "react";
import { api } from "../utils/axios"; // adjust if path differs

const Contact = () => {
  const [contactData, setContactData] = useState({
    ContactHeading1: "CONTACT US",
    ContactHeading2: "IIIT SNP - Studios",
    ContactPara1: "X423+VH3, IIIT Delhi Sonipat Campus, SH 11, Khewra, Haryana",
    ContactPara2:
      "A Source guiding towards the Open Source",
    ContactAnchor: "rha@socet.edu.in",
  });

  const [editableId, setEditableId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/admin/geteditcontactdata");
        setContactData(response.data.heroData); 
      } catch (error) {
        console.error("API Error:", error.response || error.message || error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (id) => {
    setEditableId(id);
  };

  const handleBlur = async (id, e) => {
    const newValue = e.target.innerText.trim();

    if (contactData[id] === newValue) {
      setEditableId(null);
      return;
    }

    const oldValue = contactData[id];
    setContactData((prev) => ({ ...prev, [id]: newValue }));

    try {
      console.log("PATCHing data to API...");
      const response = await api.patch("/admin/posteditcontactdata", { [id]: newValue });
      console.log(`Updated ${id} successfully`, response.data);
    } catch (error) {
      console.error("API Error:", error.response || error.message || error);
      setContactData((prev) => ({ ...prev, [id]: oldValue })); // revert on fail
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
      {contactData[id]}
    </Element>
  );

  return (
    <div id="contact" className="w-full min-h-screen flex flex-col justify-center items-center">
      <EditableText
        id="ContactHeading1"
        element="h1"
        className="text-3xl font-semibold text-blue-950 mt-10"
      />

      <EditableText
        id="ContactHeading2"
        element="h3"
        className="text-gray-400 text-lg mt-3"
      />

      <div className="w-10 bg-red-600 h-1 my-5"></div>

      <div className="w-full flex justify-center items-center py-10 bg-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-11/12 md:w-4/5 text-center divide-y md:divide-y-0 md:divide-x md:divide-gray-300">
          
          {/* Address */}
          <div className="flex-1 px-5 py-5">
            <h2 className="font-bold text-blue-900 mb-2">ADDRESS</h2>
            <EditableText
              id="ContactPara1"
              element="p"
              className="text-gray-700"
            />
          </div>

          {/* Logo */}
          <div className="flex-1 flex flex-col items-center px-5 py-5">
            <img
              src="https://rha.socet.edu.in/img/logo.png"
              alt="Banyan Logo"
              className="w-40 h-auto"
            />
            <EditableText
              id="ContactPara2"
              element="p"
              className="mt-2 text-gray-700 text-xl"
            />
          </div>

          {/* Email */}
          <div className="flex-1 px-5 py-5">
            <h2 className="font-bold text-blue-900 mb-2">EMAIL</h2>
            <a
              id="ContactAnchor"
              href={`mailto:${contactData.ContactAnchor}`}
              tabIndex={0}
              contentEditable={editableId === "ContactAnchor"}
              suppressContentEditableWarning={true}
              onClick={() => handleEdit("ContactAnchor")}
              onBlur={(e) => handleBlur("ContactAnchor", e)}
              className="text-blue-600 hover:underline"
            >
              {contactData.ContactAnchor}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
