import HomeImg from "../Images/home-img.png"
import HomeLeft from '../Images/home-left.svg'
import { Button } from "@material-tailwind/react"

const Home = () => {
    return (
        <section className="flex md:flex-col gap-40 justify-center items-center h-screen bg-gradient-to-br from-primaryGradient to-secondaryGradient mt-10">
            <div>
                <h1 className="text-4xl sm:text-3xl font-bold text-lightColor">Enabling Your Next Digital Leap!</h1>
                <h1 className="text-4xl sm:text-2xl font-bold text-white mt-4 mb-[-24px]">Elevate Your Reach</h1>
                <img src={HomeLeft} className="m-0" alt="" />
                <h5 className="text-lg sm:text-xl lg:text-2xl text-white">With us</h5>
                <div className="space-x-4 my-4">
                    <Button variant="filled" color="white">Let's Talk</Button>
                    <Button variant="outlined" color="white">Project Request</Button>
                </div>
            </div>
            <div>
                <img src={HomeImg} alt="" className="w-40 sm:w-56 lg:w-[35rem]" />
            </div>
        </section>
    );
}


export default Home; 