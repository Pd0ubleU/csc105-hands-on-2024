import React from 'react';
import gal1 from '../image/gal1.jpg';
import gal2 from '../image/gal2.png';
import gal3 from '../image/gal3.png';
import gal4 from '../image/gal4.png';
import gal5 from '../image/gal5.jpg';
import gal6 from '../image/gal6.jpg';


const Gallery = () => {
    return (
        
        <div className="flex flex-col items-center text-center px-10 p-8 ">
            <h1 className="text-3xl text-center font-bold mb-10">Gallery</h1>
            <div className="flex justify-center">

            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
                <img className="rounded-xl shadow-xlw-64 md:w-48 lg:w-64 object-contain ml-5" src={gal1} alt="gal1.jpg" />
                <img className="rounded-xl shadow-xl w-64 md:w-48 lg:w-64 object-contain ml-5" src={gal2} alt="gal2.png" />
                <img className="rounded-xl shadow-xl w-64 md:w-48 lg:w-64 object-contain ml-5" src={gal3} alt="gal3.png" />
                <img className="rounded-xl shadow-xl w-64 md:w-48 lg:w-64 object-contain ml-5" src={gal4} alt="gal4.png" />
                <img className="rounded-xl shadow-xl w-64 md:w-48 lg:w-64 object-contain ml-5" src={gal5} alt="gal5.jpg" />
                <img className="rounded-xl shadow-xl w-64 md:w-48 lg:w-64 object-contain ml-5" src={gal6} alt="gal6.jpg" />

                
            </div>
        </div>    
        </div>
    );
};

export default Gallery;