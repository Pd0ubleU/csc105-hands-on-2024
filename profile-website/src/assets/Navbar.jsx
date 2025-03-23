import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white p-8 text-xl text-black font-bold mb-20">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-3xl text-black font-bold cursor-default">
                    MEOW
                </div>

                {/*ปุ่มกลาง*/}
                <ul className="flex space-x-4">
                    <li><a href="/Home" className="text-xl text-black hover:bg-lime-100 p-3 p-3 px-6 py-2 rounded-full">Home</a></li>
                    <li><a href="/AboutMe" className="text-xl text-black hover:bg-lime-100 p-3 p-3 px-6 py-2 rounded-full">About Me</a></li>
                    <li><a href="/Gallery" className="text-xl text-black hover:bg-lime-100 p-3 px-6 py-2 rounded-full">Gallery</a></li>
                </ul>

                {/*Contact*/}
                <div>
                    <a href='https://www.tiktok.com/@nancepungchannel/video/7291253241944231173' className="text-xl text-white p-3 bg-green-900 rounded-full shadow-lg hover:bg-green-950 p-3 rounded-full">
                    Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;