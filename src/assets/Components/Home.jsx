import HomeImg from "../Images/home-img.png"
import HomeLeft from '../Images/home-left.svg'
import { Button } from "@material-tailwind/react"

const Home = () => {
    return (
        <section id="Home">
            <div className="flex flex-col sm:flex-row justify-around items-center pt-24 lg:py-50 h-[100vh] bg-gradient-to-br from-primaryGradient to-secondaryGradient">
                <div className="px-6 sm:px-10 md:px-16">
                    <h1 className="text-xl sm:text-3xl mt-6 sm:mt-0 font-bold text-lightColor">Enabling Your Next Digital Leap!</h1>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mt-2 sm:mt-3 mb-1 uppercase">Elevate Your Reach</h2>
                    <img src={HomeLeft} className="sm:px-2 w-full sm:w-80 md:w-full" alt="" />
                    <h6 className="text-lg sm:text-md lg:text-xl text-white mt-2">With us</h6>
                    <div className="flex flex-col sm:flex-row mt-4 sm:mt-6 gap-4">
                        <Button variant="filled" color="white" className="w-full sm:w-auto">Let's Talk</Button>
                        <Button variant="outlined" color="white" className="w-full sm:w-auto">Project Request</Button>
                    </div>
                </div>
                <div>
                    <img src={HomeImg} alt="home-image" className="w-56 sm:w-60 lg:w-[32rem] mt-6 sm:mt-0" />
                </div>
            </div>
        </section>
    );
}


export default Home; 