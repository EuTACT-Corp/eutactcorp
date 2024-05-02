import ConsultSVG from "../Images/1_consult.svg";
import DesignSVG from "../Images/2_design.svg";
import ProjectSVG from "../Images/3_project.svg";
import OutSourceSVG from "../Images/4_outsource.svg";
import SustSVG from "../Images/5_sustainable.svg";
import StrucSVG from "../Images/6_structural.svg";
import DigitalSVG from "../Images/1_web_service.svg"
import IdeaSVG from "../Images/2_web_service.svg"
import FootprintSVG from "../Images/3_web_service.svg"

const Services = () => {
    return (
        <section id="Services" className="p-8 md:p-16 md:px-16 w-full bg-gradient-to-br from-primaryGradient to-secondaryGradient">
            <div className="flex justify-center items-center">
                <div className="text-center w-full md:w-[50%]">
                    <h1 className="text-4xl font-bold text-white py-4">What We Do?</h1>
                    <p className="text-white md:text-center text-justify">We excel in Engineering and Web Services. Our Engineering division ensures precision across disciplines. While our Web Services provide tailored solutions from design to digital marketing. Partner with us for integrated success in both realms.</p>
                </div>
            </div>
            <div className="my-10">
                <div>
                    <h1 className="text-3xl text-white text-center font-bold py-4">Our Engineering Services</h1>
                </div>

                {/* Service Cards */}
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-14 m-4">
                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={ConsultSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Engineering Consulting</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>We offer expert consulting in Civil, Architectural, Mechanical, and Piping engineering. From feasibility to implementation, we tailor strategic solutions.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={DesignSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Design and Drafting</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>We utilize cutting-edge CAD/CAM for precise designs. Specializing in meeting industry standards and client specs for project success.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={ProjectSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Project Management</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>We offer full project management, ensuring on-time, in-budget completion. Our managers employ proven methodologies for lifecycle oversight.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-14 m-4">
                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={OutSourceSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Outsourcing Solutions</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>We provide outsourcing for flexible scaling. Our global talent handles complex tasks, allowing clients focus on core activities.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={SustSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Sustainable Engineering Solutions:</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>Commited to sustainability, we integrate eco-friendly practices to minimize impact and maximize efficiency. Our approach includes energy efficiency, resource conservation, and green building practices.</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 m-3">
                        <div className="flex justify-start items-center">
                            <div className="w-10">
                                <img className="w-full" src={StrucSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Structural Engineering</h3>
                        </div>
                        <div className="text-white text-justify">
                            <p>We analyze, design, evaluate diverse structures using advanced techniques. Ensuring safety, stability, durability, and cost-efficiency, we excel in tailored solutions for projects, surpassing expectations.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Horizontal Break Line */}
            <div class="flex justify-center">
                <div class="w-[80%]">
                    <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
            </div>

            <div>
                <div class="container mx-auto px-4 py-12">
                    <h1 class="text-4xl text-center font-bold text-white">Web Related Services</h1>

                    <div class="flex flex-col lg:flex-row items-center justify-center lg:px-4">
                        <div class="mb-8 lg:mb-0 lg:mr-12 lg:w-1/2">
                            <img src={DigitalSVG} alt="Digital Transformation" class="mx-auto lg:mx-0 w-full" />
                        </div>
                        <div class="text-white text-center lg:text-left lg:w-1/2">
                            <h2 class="text-3xl font-medium mb-4">Digital Transformation for Your Business</h2>
                            <p class="mb-4 text-justify">Embracing the digital world is a new mandate to achieve business goals. Providing support to build a digital twin of your dream business is our passion. We focus on core values that add up to your channel of revenue. Starting with branding and logo design, we also set up your social media to voice out your brand in the competitive digital world.</p>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row-reverse items-center justify-center lg:px-4 mt-12">
                        <div class="mb-8 lg:mb-0 lg:ml-12 lg:w-1/2">
                            <img src={IdeaSVG} alt="Idea to product Reality" class="mx-auto lg:mx-0 w-full" />
                        </div>
                        <div class="text-white text-center lg:text-left lg:w-1/2">
                            <h2 class="text-3xl font-medium mb-4">Your Idea to Product a Reality and Beyond</h2>
                            <p class="mb-4 text-justify">Making your ideas a reality with an omnipresent digital product is what we do at EuTact. We collaborate with hand-picked designers and developers on board to assure the best craftsmanship for your dream startup. We help you refine your idea and benchmark against your competitors.</p>
                        </div>
                    </div>

                    <div class="flex flex-col lg:flex-row items-center justify-center lg:px-4 mt-12">
                        <div class="mb-8 lg:mb-0 lg:mr-12 lg:w-1/2">
                            <img src={FootprintSVG} alt="Digital Transformation" class="mx-auto lg:mx-0 w-full" />
                        </div>
                        <div class="text-white text-center lg:text-left lg:w-1/2">
                            <h2 class="text-3xl font-medium mb-4">A Fresh Look for Your Existing Digital Footprint</h2>
                            <p class="mb-4 text-justify">We also take ownership to uplift existing websites and make them user-friendly. We have experts who add finesse touches and work wonders to fulfill your requirements. Additionally, we provide end-to-end maintenance to promise uninterrupted service to your customers.</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Services;