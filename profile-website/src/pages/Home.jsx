import React from 'react';
import huhcat from '../image/huhcat.png';
import instagram from '../icons/instagram.png';
import facebook from '../icons/facebook.png';
import email from '../icons/email.png';

const Home = () => {
    return (
        <div className="flex flex-col items-center text-center px-10 mb-50">
        <div className="flex flex-col md:flex-row items-center">

                {/*text*/}
            <div className="text-left">
                <h1 className="text-xl font-bold mb-4">Hello it's me</h1>
                <h2 className="text-4xl font-bold mb-4">OIIA</h2>
                <h2 className="text-xl font-bold mb-4">I'm a CAT</h2>
                <p className="text-l font-bold mb-4 ">
                Oiiai, oiiai, oiiai, oii—, oii— Oiiai, oiiai, <br /> oiiai, oii—, oii—
                </p>

                {/*icons*/}
                <div className="flex flex-col mb-6 md:flex-row items-center">
                    <a href='https://www.facebook.com/kalyathorn.yakam' >
                    <img className="w-full py-1 object-contain ml-1" src={facebook} alt="facebook"/>
                    </a>

                    <a href='https://www.instagram.com/kalyathorn/' >
                    <img className="w-full py-1 px-3 object-contain ml-1" src={instagram} alt="instagram"/>
                    </a>

                    <a href='https://mail.google.com/mail/u/4/?ogbl#inbox?compose=new' >
                    <img className="w-full py-1 px-2 object-contain ml-1" src={email} alt="email"/>
                    </a>

                </div>

                <a href='https://www.tiktok.com/@nancepungchannel/video/7291253241944231173' className="text-l font-bold mt-8 px-10 py-2 bg-green-900 rounded-full shadow-lg text-white hover:bg-green-950 p-3 rounded-full">
                        My Portfolio
                </a>

                



            </div>

            {/*huhcatpic*/}
            <img className="w-64 md:w-48 lg:w-64 object-contain ml-5" src={huhcat} alt="huhcat"/>

        </div>
        </div>
    );

};

export default Home; 