"use client";

import React from "react";
import Spline from '@splinetool/react-spline';

const Banner = () => {
    return (
        <div className="h-[800px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center mt-20 lg:mt-28">
            <Spline scene="https://prod.spline.design/3olMyDmlAS7WlJux/scene.splinecode" />
            {/* <div className="bg-black bg-opacity-75 p-4 mt-6 max-w-3xl">
                <p className="text-white text-sm md:text-base mt-2 text-center">
                    Pijar is a Community-Based Learning Hub is an educational platform aimed at underserved communities to provide access to quality learning resources. It connects learners with volunteer teachers or mentors in various fields like farming, coding, basic life skills, and more.
                </p>
            </div>
            <br />
            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 px-4 rounded">
                Mulai Belajar
            </button> */}
        </div>
    )
}

export default Banner;

// "use client";

// import React from "react";
// const Banner = () => {
//     return (
//         <div
//             className="h-[500px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center bg-[url('/pijar-banner.jpg')] bg-cover bg-center mt-20 lg:mt-28"
//         >
//             <div className="flex flex-col text-center">
//                 <h1 className="mb-3 mt-4 md:mt-5 bg-opacity-75">
//                     <span className="inline-block font-bold text-4xl md:text-6xl uppercase drop-shadow-md py-2 pl-4 pr-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
//                         Belajar Itu Hak,
//                     </span>
//                 </h1>
//                 <div className="mb-3">
//                     <span className="inline-block font-bold text-4xl md:text-6xl uppercase drop-shadow-md py-2 pl-4 pr-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
//                         Bukan Pilihan!
//                     </span>
//                 </div>
//             </div>

//             <div className="bg-black bg-opacity-75 p-4 mt-6 max-w-3xl">
//                 <p className="text-white text-sm md:text-base mt-2 text-center">
//                     Pijar is a Community-Based Learning Hub is an educational platform aimed at underserved communities to provide access to quality learning resources. It connects learners with volunteer teachers or mentors in various fields like farming, coding, basic life skills, and more.
//                 </p>
//             </div>
//             <br />
//             <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold py-2 px-4 rounded">
//                 Mulai Belajar
//             </button>
//         </div>
//     )
// }

// export default Banner;