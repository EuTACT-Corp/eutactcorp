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
            <motion.div 
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.05}}
            className="img-container-home">
                    <img className="img-home-left" src={Ellipse} alt="Decorative Ellipse" />
            </motion.div>
            <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={"show"}
            viewport={{once: false, amount: 0.05}}
            className="img-cont-home">
                    <img className="img-home-right" src={Ellipse} alt="Decorative Ellipse" />
            </motion.div>
            <div className="flex flex-col sm:flex-row justify-around items-center pt-24 lg:py-0 h-[100vh] bg-gradient-to-br from-primaryGradient to-secondaryGradient">
                <div className="px-6 sm:px-10 md:px-16 z-10">
                    <TransitionRight>
                        <h1 className="text-xl sm:text-3xl mt-6 sm:mt-0 font-extrabold bg-gradient-to-r from-darkPink via-txtDarkColor to-lightColor inline-block text-transparent bg-clip-text uppercase">Enabling Your Next Digital Leap!</h1>
                        <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3 mb-1 uppercase">Elevate Your Reach</h2>
                        <img src={HomeLeft} className="w-full sm:w-80 md:w-full" alt="" />
                        <h6 id="home-heading" className="text-lg sm:text-md lg:text-2xl text-white mt-2">WITH US</h6>
                        <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-4">
                        <a href="#Contact" className="">
                                    <Button variant="filled" color="white"className="w-full py-5 px-7 sm:w-auto text-md sm:text-md">Let's Talk</Button></a>
                        </div>
                    </TransitionRight>
                </div>
                <div className="z-10">
                    <TransitionLeft>
                        <img src={HomeImg} alt="home-image" className="w-56 sm:w-60 lg:w-[40rem] mt-6 sm:mt-0" />
                    </TransitionLeft>
                </div>
            </div>
            <div className="mt-10">
            </div>
        </section>
    );
}


export default Home; 