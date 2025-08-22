import React from 'react'
import { Linkedin } from "lucide-react";

const Mentors = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
        <h1 className='text-3xl font-semibold text-blue-950 mt-10'>
            DIRECTOR OF IIIT SNP
        </h1>

        <div className='w-10 bg-red-600 h-1 my-5'></div>

        <div className="relative h-1/5 w-1/5 group">
            {/* Image */}
            <img
                src="https://rha.socet.edu.in/img/speakers/9.jpg"
                alt="director"
                className="w-full h-full object-cover"
            />

            {/* Overlapping Div */}
            <div
                className="absolute bottom-0 left-0 w-full bg-blue-950/60 
                        text-white text-center p-2 
                        transition-all duration-500 ease-in-out 
                        group-hover:h-20 h-10 flex flex-col items-center justify-center"
            >
                <span className="text-lg font-bold mt-5">Mr. Malvik Chauhan</span>

                {/* LinkedIn Icon (hidden until hover) */}
                <a
                href="https://linkedin.com/in/hiteshkumarnain"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                >
                <Linkedin className="w-3 h-3 fill-current text-white hover:text-red-500" />
                </a>
            </div>
        </div>

        <h1 className='text-3xl font-semibold text-blue-950 mt-10'>
            FACULTY CO-ORDINATOR
        </h1>

        <div className='w-10 bg-red-600 h-1 my-5'></div>

        <div className='flex flex-row items-center justify-center gap-10'>
            <div className="relative h-1/5 w-1/5 group">
            {/* Image */}
                <img
                    src="https://rha.socet.edu.in/img/speakers/9.jpg"
                    alt="director"
                    className="w-full h-full object-cover"
                />

                {/* Overlapping Div */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-blue-950/60 
                            text-white text-center p-2 
                            transition-all duration-500 ease-in-out 
                            group-hover:h-20 h-10 flex flex-col items-center justify-center"
                >
                    <span className="text-lg font-bold mt-5">Mr. Malvik Chauhan</span>

                    {/* LinkedIn Icon (hidden until hover) */}
                    <a
                    href="https://linkedin.com/in/hiteshkumarnain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                    >
                    <Linkedin className="w-3 h-3 fill-current text-white hover:text-red-500" />
                    </a>
                </div>
            </div>

            <div className="relative h-1/5 w-1/5 group">
                {/* Image */}
                <img
                    src="https://rha.socet.edu.in/img/speakers/9.jpg"
                    alt="director"
                    className="w-full h-full object-cover"
                />

                {/* Overlapping Div */}
                <div
                    className="absolute bottom-0 left-0 w-full bg-blue-950/60 
                            text-white text-center p-2 
                            transition-all duration-500 ease-in-out 
                            group-hover:h-20 h-10 flex flex-col items-center justify-center"
                >
                    <span className="text-lg font-bold mt-5">Mr. Malvik Chauhan</span>

                    {/* LinkedIn Icon (hidden until hover) */}
                    <a
                    href="https://linkedin.com/in/hiteshkumarnain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                    >
                    <Linkedin className="w-3 h-3 fill-current text-white hover:text-red-500" />
                    </a>
                </div>
            </div>
            
        </div>

        <h1 className='text-3xl font-semibold text-blue-950 mt-10'>
            STUDENT AMBASSADOR
        </h1>

        <div className='w-10 bg-red-600 h-1 my-5'></div>

        <div className="relative h-1/5 w-1/5 group mb-10">
            {/* Image */}
            <img
                src="https://rha.socet.edu.in/img/speakers/9.jpg"
                alt="director"
                className="w-full h-full object-cover"
            />

            {/* Overlapping Div */}
            <div
                className="absolute bottom-0 left-0 w-full bg-blue-950/60 
                        text-white text-center p-2
                        transition-all duration-500 ease-in-out 
                        group-hover:h-20 h-10 flex flex-col items-center justify-center"
            >
                <span className="text-lg font-bold mt-5">Mr. Malvik Chauhan</span>

                {/* LinkedIn Icon (hidden until hover) */}
                <a
                href="https://linkedin.com/in/hiteshkumarnain"
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-1"
                >
                <Linkedin className="w-3 h-3 fill-current text-white hover:text-red-500" />
                </a>
            </div>
        </div>

    </div>
  )
}

export default Mentors