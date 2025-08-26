import React, { useState, useEffect, useRef } from 'react'
import { Linkedin } from "lucide-react";

const mentorLabels = [
  { name: "Mr. Malvik Chauhan", linkedin: "https://linkedin.com/in/hiteshkumarnain" },
  { name: "Dr. Someone Else", linkedin: "https://linkedin.com/in/someoneelse" },
  { name: "Ms. Faculty Two", linkedin: "https://linkedin.com/in/facultytwo" },
  { name: "Student Ambassador", linkedin: "https://linkedin.com/in/studentambassador" }
];

// Sample image IDs received or known beforehand
const mentorImageIds = [
  "68ad4c9223d27b4e0212f8cf",
  "68ad4cb423d27b4e0212f8d1",
  "68ad4cc023d27b4e0212f8d3",
  "68ad4ccd23d27b4e0212f8d5",
];

const Mentors = () => {
  const [mentorImages, setMentorImages] = useState(
    Array(mentorImageIds.length).fill({ imgUrl: "" })
  );

  const fileInputRefs = useRef([]);

  // Fetch each image URL by its ID from backend on mount
  useEffect(() => {
    const fetchImageUrls = async () => {
      try {
        const promises = mentorImageIds.map(id =>
          fetch(`http://localhost:5000/upload/find/${id}`)
            .then(res => res.json())
            .then(data => data.fileUrl || "")
            .catch(() => "")
        );
        const urls = await Promise.all(promises);
        setMentorImages(urls.map(url => ({ imgUrl: url })));
      } catch (error) {
        console.error("Failed fetching mentor images URLs", error);
      }
    };
    fetchImageUrls();
  }, []);

  const handleRightClick = idx => e => {
    e.preventDefault();
    fileInputRefs.current[idx]?.click();
  };

  const handleFileSelect = idx => async e => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append("file", file);
      // PATCH to update the image by ID
      const response = await fetch(
        `http://localhost:5000/upload/change/${mentorImageIds[idx]}`,
        { method: "PATCH", body: formData }
      );
      const data = await response.json();
      if (response.ok && data.fileUrl) {
        setMentorImages(prev => prev.map((img, i) =>
          i === idx ? { imgUrl: data.fileUrl } : img
        ));
      }
    } catch (err) {
      console.error("Image update failed:", err);
    }
  };

  return (
    <div id='mentors' className='w-full flex flex-col justify-center items-center'>
      <h1 className='text-3xl font-semibold text-blue-950 mt-10'>DIRECTOR OF IIIT SNP</h1>
      <div className='w-10 bg-red-600 h-1 my-5'></div>

      <div className="relative h-1/5 w-1/5 group">
        {/* Editable Image 1 */}
        <img
          src={mentorImages[0]?.imgUrl || ""}
          alt={mentorLabels[0].name}
          className="w-full h-full object-cover"
          onContextMenu={handleRightClick(0)}
        />
        <input
          type="file"
          accept="image/*"
          ref={ref => fileInputRefs.current[0] = ref}
          style={{ display: "none" }}
          onChange={handleFileSelect(0)}
        />
        <div className="absolute bottom-0 ...">{/* rest unchanged */}</div>
      </div>

      <h1 className='text-3xl font-semibold text-blue-950 mt-10'>FACULTY CO-ORDINATOR</h1>
      <div className='w-10 bg-red-600 h-1 my-5'></div>
      <div className='flex flex-row items-center justify-center gap-10'>
        {/* Editable Image 2 */}
        <div className="relative h-1/5 w-1/5 group">
          <img
            src={mentorImages[1]?.imgUrl || ""}
            alt={mentorLabels[1].name}
            className="w-full h-full object-cover"
            onContextMenu={handleRightClick(1)}
          />
          <input
            type="file"
            accept="image/*"
            ref={ref => fileInputRefs.current[1] = ref}
            style={{ display: "none" }}
            onChange={handleFileSelect(1)}
          />
          <div className="absolute bottom-0 ...">{/* rest unchanged */}</div>
        </div>

        {/* Editable Image 3 */}
        <div className="relative h-1/5 w-1/5 group">
          <img
            src={mentorImages[2]?.imgUrl || ""}
            alt={mentorLabels[2].name}
            className="w-full h-full object-cover"
            onContextMenu={handleRightClick(2)}
          />
          <input
            type="file"
            accept="image/*"
            ref={ref => fileInputRefs.current[2] = ref}
            style={{ display: "none" }}
            onChange={handleFileSelect(2)}
          />
          <div className="absolute bottom-0 ...">{/* rest unchanged */}</div>
        </div>
      </div>

      <h1 className='text-3xl font-semibold text-blue-950 mt-10'>STUDENT AMBASSADOR</h1>
      <div className='w-10 bg-red-600 h-1 my-5'></div>
      {/* Editable Image 4 */}
      <div className="relative h-1/5 w-1/5 group mb-10">
        <img
          src={mentorImages[3]?.imgUrl || ""}
          alt={mentorLabels[3].name}
          className="w-full h-full object-cover"
          onContextMenu={handleRightClick(3)}
        />
        <input
          type="file"
          accept="image/*"
          ref={ref => fileInputRefs.current[3] = ref}
          style={{ display: "none" }}
          onChange={handleFileSelect(3)}
        />
        <div className="absolute bottom-0 ...">{/* rest unchanged */}</div>
      </div>
    </div>
  );
};


export default Mentors;
