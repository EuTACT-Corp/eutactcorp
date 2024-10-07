import InstagramPNG from "../Images/Instagram.png"
import TwitterPNG from "../Images/Twitter.png"
import FacebookPNG from "../Images/Facebook.png"
import YoutubePNG from "../Images/Youtube.png"
import EutactLogo from "../Images/eutactlogo.png"
import { IoLocationSharp } from "react-icons/io5";
import TransitionComponent from "../Animations/TransitionUp"

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-primaryGradient to-secondaryGradient py-8 px-6 md:px-16 flex flex-col gap-8">
            <TransitionComponent>
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                <div className="text-center w-full md:text-left md:w-1/4 flex flex-col gap-4">
                    <div>
                        <a href="#" className="text-white flex justify-center items-center md:items-start md:justify-start">
                            <img src={EutactLogo} className="w-24 md:w-[60%]" alt="Eutact Logo" />
                        </a>
                    </div>
                    <p className="text-white">contact@eutact.com</p>
                    <p className="text-white">+1 587 372 7070</p>
                </div>
                <div className="flex flex-col justify-center items-center w-64 mx-auto md:mx-0">
                    <h1 className="text-white text-3xl font-semibold">Follow Us!</h1>
                    <ul className="flex gap-5 p-4">
                        <li>
                            <a href="#" target="_blank">
                                <img src={InstagramPNG} className="w-10" alt="Instagram Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={TwitterPNG} className="w-10" alt="Twitter Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={FacebookPNG} className="w-10" alt="Facebook Logo" />
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src={YoutubePNG} className="w-10" alt="Youtube Logo" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-right md:w-1/4 mx-auto md:mx-0">
                    <h1 className="text-white text-3xl font-semibold pb-3">Our Offices</h1>
                    <div className="flex justify-center items-center md:justify-end md:items-end flex-col gap-2">
                        <a href="#services" className="text-white">
                            <div className="flex justify-center items-center gap-1">
                                <IoLocationSharp /> Edmonton
                            </div>
                        </a>
                        {/* <a href="#services" className="text-white">
                            <div className="flex justify-center items-center gap-1">
                                <IoLocationSharp /> Boston
                            </div>
                        </a>
                        <a href="#services" className="text-white">
                            <div className="flex justify-center items-center gap-1">
                                <IoLocationSharp /> Chennai
                            </div>
                        </a> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="w-full">
                    <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0">
                <div className="flex gap-5">
                    <a href="#" target="_blank" className="text-white underline">Terms & Conditions</a>
                    <a href="#" target="_blank" className="text-white underline">Privacy & Policy</a>
                </div>
                <div className="text-white">
                    <p>Copyright 2024 | All Rights Reserved</p>
                </div>
            </div>
            </TransitionComponent>
        </footer>
    )
}

export default Footer; 