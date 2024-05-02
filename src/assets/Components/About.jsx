import React, { useEffect, useState } from "react";
import CountUp from "react-countup";

const About = () => {
    const [showCountUp, setShowCountUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setShowCountUp(isScrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section id="About" className="md:px-16 w-full bg-white">
            <div className="p-12 md:px-8 md:py-8 lg:px-16 lg:py-16 flex flex-col md:flex-row items-center text-justify">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <h2 className="py-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-primaryGradient">Who we are?</h2>
                    <p className="text-sm md:text-base lg:text-lg">We are a team of experienced designers and developers, who thrive to build top quartile and unique products. Helping business owners, keep it simple, achieve the goal at a competitive cost and taking ownership with sustainability mindset are our core values.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full md:w-1/2">
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        {showCountUp && (
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primaryGradient">
                                <CountUp start={0} end={100} duration={3} suffix='+' />
                            </h1>
                        )}
                        <h5 className="text-xs md:text-sm lg:text-base">Successful Project</h5>
                    </div>
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        {showCountUp && (
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primaryGradient">
                                <CountUp start={0} end={5} duration={3} suffix="+" />
                            </h1>
                        )}
                        <h5 className="text-xs md:text-sm lg:text-base">Years of Experience</h5>
                    </div>
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        {showCountUp && (
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primaryGradient">
                                <CountUp start={0} end={1200} duration={3} suffix="+" />
                            </h1>
                        )}
                        <h5 className="text-xs md:text-sm lg:text-base">Worldwide Clients</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
