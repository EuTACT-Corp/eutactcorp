import HomeImg from "../Images/home-img.png"
import HomeLeft from '../Images/home-left.svg'
import { Button } from "@material-tailwind/react"
import Ellipse from "../Images/Ellipse.png"
import TransitionRight from "../Animations/TransitionRight"
import TransitionLeft from "../Animations/TransitionLeft"
import { FadeIn } from "react-scroll-motion"
import { motion } from "framer-motion"
import { fadeIn } from "../Animations/FadeIn"


const Home = () => {
    return (
        <section id="Home">
            <div>
                {/* Ellipses for background decorations */}
                <motion.div
                    variants={fadeIn('right', 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.05 }}
                    className="img-container-home">
                    <img className="img-home-left" src={Ellipse} alt="Decorative Ellipse" />
                </motion.div>
                <motion.div
                    variants={fadeIn('left', 0.5)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.05 }}
                    className="img-cont-home">
                    <img className="img-home-right" src={Ellipse} alt="Decorative Ellipse" />
                </motion.div>
            </div>

            {/* Main section with flex layout */}
            <div className="flex flex-col sm:flex-row justify-around items-center pt-24 lg:py-0 h-[100vh] bg-gradient-to-br from-primaryGradient to-secondaryGradient">

                {/* Left text and button section */}
                <div className="px-4 sm:px-10 md:px-16 z-10 w-full sm:w-auto">
                    <TransitionRight>
                        <h1 className="text-xl sm:text-3xl mt-6 sm:mt-0 font-extrabold bg-gradient-to-r from-darkPink via-txtDarkColor to-lightColor inline-block text-transparent bg-clip-text uppercase">
                            Enabling Your Next Digital Leap!
                        </h1>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3 mb-1 uppercase">
                            Elevate Your Reach
                        </h2>
                        <img src={HomeLeft} className="w-full sm:w-80 md:w-full" alt="" />
                        <h6 id="home-heading" className="text-lg sm:text-md lg:text-2xl text-white mt-2">
                            WITH US
                        </h6>

                        {/* Button and Ping Effect */}
                        <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-4">
                            {/* Button container */}
                            <div className="relative inline-flex group w-full sm:w-auto">
                                <div className="absolute transition-all opacity-70 -inset-px rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:bg-gradient-to-r from-[#FFA500] via-[#be7b00] to-[#fff540] duration-300 animate-tilt overflow-hidden"></div>
                                <a href="#Contact" title="Let's Connect"
                                    className="relative inline-flex items-center justify-center w-full sm:w-auto px-10 py-4 text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                    role="button">
                                    Let's Connect
                                </a>
                            </div>

                            {/* Ping Effect */}
                            <span className="relative flex h-3 w-3 sm:h-5 sm:w-5 top-0 right-7 sm:-mt-1 sm:-mr-1 overflow-hidden">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6cf02e] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-full w-full bg-[#6cf02e]"></span>
                            </span>
                        </div>
                    </TransitionRight>
                </div>

                {/* Right image section */}
                <div className="z-10 mt-6 sm:mt-0" id="home-img">
                    <TransitionLeft>
                        <img src={HomeImg} alt="home-image" className="w-40 sm:w-60 lg:w-[40rem]" />
                    </TransitionLeft>
                </div>
            </div>

            <div className="mt-10"></div>
        </section>

    );
}

export default Home;
