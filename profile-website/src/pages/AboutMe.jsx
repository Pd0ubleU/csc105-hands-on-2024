import React from 'react';
import hyperpigmentation from '../image/hyperpigmentation.png';



const AboutMe = () => {
    return (
        <div className="flex flex-col items-center text-center px-10 mb-50">
        <div className="flex flex-col md:flex-row items-center">

            {/*hyperpic*/}
            <img className="w-64 md:w-48 lg:w-64 object-contain mr-8" src={hyperpigmentation} alt="huhcat"/>

            {/*text*/}
            <div className="text-left">
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-xl font-bold mb-5">A Girl</p>
                <p className="flex flex-col font-semibold md:flex-row items-center mb-7">
                    I sat here and posed for like 10 minutes, let me see the product. 
                    Is that me? <br /> No! No, it's nice! It's so Nice! Ohhh! I've never- I've never looked 
                    better. <br /> Oooo, where were you? Where were you when it was time for senior photos? <br />
                    Mommy, I don't think it looks good. It is fantastic! Oh my god! What's that? <br />
                    Is that hyperpigmentation? Just tell- Okay. You know what? I never seen <br /> nothing 
                    like this before. I just want you to just keep up, keep it up! Okay?
                </p>
                <a href='https://www.tiktok.com/@nancepungchannel/video/7291253241944231173' className="text-l font-bold mt-6 px-10 py-2 bg-green-900 rounded-full shadow-lg text-white hover:bg-green-950 p-3 rounded-full">
                    Read More
                </a>
            </div>
        </div>
        </div>
           );
};

export default AboutMe;