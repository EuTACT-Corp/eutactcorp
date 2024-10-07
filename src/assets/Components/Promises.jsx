import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PromiseONE from "../Images/1_promise_img.svg";
import PromiseTWO from "../Images/2_promise_img.svg";
import PromiseTHREE from "../Images/3_promise_img.svg";

import OwnershipSVG from "../Images/ownership.svg";
import IntegritySVG from "../Images/integrity.svg";
import AuthenticitySVG from "../Images/authenticity.svg";

import { IoArrowBackCircle } from "react-icons/io5";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";

import TransitionComponent from "../Animations/TransitionUp";
import { fadeIn } from "../Animations/FadeIn";
import { motion } from "framer-motion";


const Promises = () => {
    return (
        <section id="Promises" className="py-12 bg-primaryGradient">
            <div className="container mx-auto ">
                <TransitionComponent>
                    <h1 className="text-4xl font-bold text-txtDarkColor text-center mb-8">Our Promises</h1>
                </TransitionComponent>
                <TransitionComponent>
                <div className="relative bg-white rounded-xl">
                    <Carousel
                        showStatus={false}
                        showThumbs={false}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        stopOnHover={true}
                        className="rounded-xl"
                        renderArrowPrev={(onClickHandler, hasPrev, label) =>
                            hasPrev && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 z-10 bg-primaryGradient text-white rounded-full px-4 py-2"
                                    style={{ padding: '10px', marginLeft: '30px' }}
                                >
                                    <FaArrowCircleLeft />
                                </button>
                            )
                        }
                        renderArrowNext={(onClickHandler, hasNext, label) =>
                            hasNext && (
                                <button
                                    type="button"
                                    onClick={onClickHandler}
                                    title={label}
                                    className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 z-10 bg-primaryGradient text-white rounded-full px-4 py-2"
                                    style={{ padding: '10px', marginRight: '30px' }}
                                >
                                    <FaArrowCircleRight />
                                </button>
                            )
                        }
                        renderIndicator={(onClickHandler, isSelected, index, label) => {
                            const indicatorClass = isSelected ? 'carousel-dot-selected' : 'carousel-dot';
                            return (
                                <li
                                    className={`${indicatorClass}`}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={index}
                                    key={index}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${label} ${index + 1}`}
                                />
                            );
                        }}
                    >
                        <div className="flex justify-center items-center py-5 px-10">
                            <div className="max-w-lg text-center md:text-start p-5">
                                <h1 className="text-2xl font-semibold mb-4 text-txtDarkColor">Cost-Effectiveness</h1>
                                <p className="text-lg text-justify">
                                    We are dedicated to delivering value-driven solutions that don't compromise on quality. By optimizing our processes and leveraging our global expertise, we ensure that our clients receive cost-effective engineering solutions that enhance their competitiveness and profitability.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block">
                                <img
                                    src={PromiseONE}
                                    alt="promise-img-1"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                        {/* Repeat the above structure for other promises */}
                        <div className="flex justify-center items-center py-5 px-10">
                            <div className="max-w-lg text-center md:text-start p-5">
                                <h1 className="text-2xl font-semibold mb-4 text-txtDarkColor">Quality Assurance</h1>
                                <p className="text-lg text-justify">
                                    Quality is at the core of everything we do. Our rigorous quality assurance process involves meticulous planning, execution, and testing to ensure that all services and projects meet the highest standards of excellence. Our commitment to quality is unwavering, from initial consultations to final deliverables.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block ">
                                <img
                                    src={PromiseTWO}
                                    alt="promise-img-2"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-5 px-10">
                            <div className="max-w-lg text-center md:text-start p-5">
                                <h1 className="text-2xl font-semibold mb-4 text-txtDarkColor">Innovation and Excellence</h1>
                                <p className="text-lg text-justify">
                                    We believe in the power of innovation to solve complex challenges and deliver superior results. Our team continuously explores new technologies, methodologies, and best practices to enhance our services and deliver cutting-edge solutions that set new industry standards.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block ">
                                <img
                                    src={PromiseTHREE}
                                    alt="promise-img-3"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                    </Carousel>
                </div>
                </TransitionComponent>

            </div>

            <div class="flex justify-center">
                <div class="w-[80%]">
                    <hr class="w-full h-[1.5px] my-8 bg-primaryGradient border-0 dark:bg-gray-700" />
                </div>
            </div>

            {/* Commitment to ownership and integrity section */}
            <div className=" container mx-auto p-5">
                <div>
                <TransitionComponent>
                    <h1 className="text-3xl font-bold py-12 text-txtDarkColor text-center">Commitment to Ownership, Integrity, and Authenticity</h1>
                    </TransitionComponent>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-5 lg:px-20">
                    <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    whileHover={{scale:1.05, boxShadow: "0px 0px 25px rgb(166, 29, 234)"}}
                    viewport={{once: false, amount: 0.05}}
                    className="bg-cardColor flex-shrink-0 text-center p-5 md:p-12 rounded-lg">
                        <div className="flex justify-center items-center">
                            <img src={OwnershipSVG} alt="ownership_svg" />
                        </div>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold">Ownership</h2>
                            <p className="text-sm md:text-center text-justify py-3">We take ownership of our work and its outcomes, ensuring that every project is managed with dedication and accountability from start to finish.</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                    variants={fadeIn('right', 0.4)}
                    initial='hidden'
                    whileInView={'show'}
                    whileHover={{scale:1.05, boxShadow: "0px 0px 25px rgb(166, 29, 234)"}}
                    viewport={{once: false, amount: 0.05}}
                    className="bg-cardColor flex-shrink-0 text-center p-5 md:p-12 rounded-lg">
                        
                        <div className="flex justify-center items-center">
                            <img src={IntegritySVG} alt="integrity_svg" />
                        </div>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold">Integrity</h2>
                            <p className="text-sm md:text-center text-justify py-3">Our commitment to integrity is unwavering. We conduct our business with honesty, transparency, and ethical practices, earning our clients' and partners' trust and respect.</p>
                        </div>
                    </motion.div>
                    
                    <motion.div 
                    variants={fadeIn('right', 0.6)}
                    initial='hidden'
                    whileInView={'show'}
                    whileHover={{scale:1.05, boxShadow: "0px 0px 25px rgb(166, 29, 234)"}}
                    viewport={{once: false, amount: 0.05}}
                    className="bg-cardColor flex-shrink-0 text-center p-5 md:p-12 rounded-lg">
                        <div className="flex justify-center items-center">
                            <img src={AuthenticitySVG} alt="authenticity_svg" />
                        </div>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold">Authenticity</h2>
                            <p className="text-sm md:text-center text-justify py-3">We believe in being authentic in all our interactions, providing genuine solutions that address each client's unique needs and challenges, and fostering long-term partnerships built on trust and mutual respect.</p>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full flex justify-center items-center text-center py-10">
                <div className="w-full md:w-[60%] max-w-screen-lg mx-auto">
                    <TransitionComponent>
                    <p className="text-white text-lg px-6 md:px-0 text-justify md:text-center">
                        At EuTACT, we are dedicated to delivering excellence in engineering consulting, outsourcing,
                        and project management. Our focus on ownership, integrity, and authenticity sets us apart,
                        ensuring that our clients receive the highest quality of service and the best value for their
                        investment.
                    </p>
                    </TransitionComponent>
                </div>
            </div>

        </section>

    );
};

export default Promises;
