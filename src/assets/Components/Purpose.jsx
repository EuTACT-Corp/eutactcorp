import MissionSVG from "../Images/mission.svg";
import VisionSVG from "../Images/vision.svg";
import TransitionComponent from "../Animations/TransitionUp";
import { fadeIn } from "../Animations/FadeIn";
import { motion } from "framer-motion";


const Purpose = () => {
    return (
        <section id="Purpose" className="p-6 md:p-16 w-full bg-gradient-to-br from-primaryGradient to-secondaryGradient">
            <div className="text-white text-center">
            <TransitionComponent>
                <h1 className="text-3xl md:text-4xl font-bold">Our Purpose and Commitment</h1>
                <h5 className="text-lg py-4">
                    Engineering excellence for sustainable global impact through innovative solutions, <br />ethical practices, and a client-centric approach
                </h5>
                </TransitionComponent>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-5 lg:px-20 mt-8">
                <motion.div 
                variants={fadeIn('right', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.05}}
                className="bg-white text-center px-2 py-8 md:p-12 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img src={MissionSVG} alt="Mission SVG" className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    <div className="px-4 py-6">
                        <h2 className="text-lg md:text-xl font-bold">Mission</h2>
                        <p className="text-sm md:text-base">We strive to exceed expectations with exceptional engineering consulting, advancing industries, and enriching communities through sustainable practices. Providing superior drafting and design services across diverse sectors.</p>
                    </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('right', 0.4)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount: 0.05}}
                className="bg-white text-center px-2 py-8 md:p-12 rounded-lg">
                    <div className="flex justify-center items-center">
                        <img src={VisionSVG} alt="Vision SVG" className="w-24 h-24 md:w-32 md:h-32" />
                    </div>
                    <div className="px-4 py-6">
                        <h2 className="text-lg md:text-xl font-bold">Vision</h2>
                        <p className="text-sm md:text-base">To pioneer innovative engineering solutions worldwide, fostering sustainable growth and development globally.</p>
                    </div>
                </motion.div>
            </div>
        </section>

    )
}

export default Purpose; 