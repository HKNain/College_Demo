import React, { useState } from 'react'

const About = () => {
  // const [editedText, setEditedText] = useState("");  // store user input

  // const handleclicked = (event) => {
  //   // make only the clicked element editable
  //   event.target.setAttribute("contenteditable", "true");
  //   event.target.focus();

  //   console.log("Now editable:", event.target.id);
  // };

  // const handleSave = () => {
  //   // get the latest content of the <p> by its id
  //   const pElement = document.getElementById("P");
  //   const newText = pElement.innerText;

  //   setEditedText(newText); // save into state
  //   pElement.setAttribute("contenteditable", "false"); // stop editing

  //   console.log("Saved text:", newText);
  //   console.log(newText)
  //   alert("Saved: " + newText);
  // };

  return (
    <div id="about" className="p-14 w-full flex justify-around items-center">
      <div className="w-1/3 text-black p-4 rounded-xl shadow-lg">
        <h1 id="Aboutheading" className="font-bold mb-2 text-3xl">
          RedHat Academy SOGI
        </h1>
        
        <p id="AboutParagraph"  className="text-md font-semibold">
          Red Hat® Academy provides a curriculum to help education institutions keep pace with 
          the demands of the industry. The curriculum involves hands-on instruction across the 
          platform, middleware, and cloud technologies built with input from Red Hat development, 
          support, and field consulting teams. Unlike a generic “distribution agnostic” Linux® 
          curriculum, Red Hat’s curriculum is based on Red Hat Enterprise Linux, the leading 
          enterprise Linux platform. Rather than learning theoretical skills, students learn 
          practical skills based on use cases from thousands of enterprise implementations.
        </p>

    

      
      </div>
    </div>
  );
};

export default About;
