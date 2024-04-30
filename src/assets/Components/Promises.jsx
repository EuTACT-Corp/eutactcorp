import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import PromiseONE from "../Images/1_promise_img.svg";
import PromiseTWO from "../Images/2_promise_img.svg";
import PromiseTHREE from "../Images/3_promise_img.svg";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";


const Promises = () => {
    return (
        <section id="Promises" className="py-12">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-8">Our Promises</h1>
                <div className="relative">
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
                                <p className="text-lg">
                                    We are dedicated to delivering value-driven solutions that don't compromise on quality. By optimizing our processes and leveraging our global expertise, we ensure that our clients receive cost-effective engineering solutions that enhance their competitiveness and profitability.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block">
                                <img
                                    src={PromiseONE}
                                    alt="Promise 1"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                        {/* Repeat the above structure for other promises */}
                        <div className="flex justify-center items-center py-5 px-10">
                            <div className="max-w-lg text-center md:text-start p-5">
                                <h1 className="text-2xl font-semibold mb-4 text-txtDarkColor">Quality Assurance</h1>
                                <p className="text-lg">
                                    Quality is at the core of everything we do. Our rigorous quality assurance process involves meticulous planning, execution, and testing to ensure that all services and projects meet the highest standards of excellence. Our commitment to quality is unwavering, from initial consultations to final deliverables.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block ">
                                <img
                                    src={PromiseTWO}
                                    alt="Promise 2"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center py-5 px-10">
                            <div className="max-w-lg text-center md:text-start p-5">
                                <h1 className="text-2xl font-semibold mb-4 text-txtDarkColor">Innovation and Excellence</h1>
                                <p className="text-lg">
                                    We believe in the power of innovation to solve complex challenges and deliver superior results. Our team continuously explores new technologies, methodologies, and best practices to enhance our services and deliver cutting-edge solutions that set new industry standards.
                                </p>
                            </div>
                            <div className="ml-6 hidden md:block ">
                                <img
                                    src={PromiseTHREE}
                                    alt="Promise 3"
                                    className="object-cover rounded-xl p-5"
                                    style={{ maxWidth: '400px', maxHeight: '300px' }} // Adjust dimensions as needed
                                />
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Promises;
