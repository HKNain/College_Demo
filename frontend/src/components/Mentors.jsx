import React, { useState, useEffect, useRef } from 'react'
import { Linkedin } from "lucide-react";

const mentorLabels = [
  { name: "Mr. Malvik Chauhan", linkedin: "https://linkedin.com/in/hiteshkumarnain" },
  { name: "Dr. Someone Else", linkedin: "https://linkedin.com/in/someoneelse" },
  { name: "Ms. Faculty Two", linkedin: "https://linkedin.com/in/facultytwo" },
  { name: "Student Ambassador", linkedin: "https://linkedin.com/in/studentambassador" }
];

const Mentors = () => {
  const [mentorImages, setMentorImages] = useState([
    { _id: "", imgUrl: "" }, 
    { _id: "", imgUrl: "" },
    { _id: "", imgUrl: "" },
    { _id: "", imgUrl: "" },
  ]);
  const fileInputRefs = useRef([]);

  useEffect(() => {
    // Fetch dynamic images and their IDs from backend
    // Replace with your actual API endpoint
    fetch("http://localhost:5000/api/mentor-images")
      .then(res => res.json())
      .then(data => setMentorImages(data))
      .catch(_ => {}); // error handling as needed
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
        `http://localhost:5000/upload/change/${mentorImages[idx]._id}`,
        { method: "PATCH", body: formData }
      );
      const data = await response.json();
      if (response.ok && data.imgUrl) {
        setMentorImages(prev => prev.map((img, i) =>
          i === idx ? { ...img, imgUrl: data.imgUrl } : img
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
          src={mentorImages[0]?.imgUrl}
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
            src={mentorImages[1]?.imgUrl}
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
            src={mentorImages[2]?.imgUrl}
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
          src={mentorImages[3]?.imgUrl}
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
