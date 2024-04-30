import ConsultSVG from "../Images/1_consult.svg";
import DesignSVG from "../Images/2_design.svg";
import ProjectSVG from "../Images/3_project.svg";
import OutSourceSVG from "../Images/4_outsource.svg";
import SustSVG from "../Images/5_sustainable.svg";
import StrucSVG from "../Images/6_structural.svg";

const Services = () => {
    return (
        <section id="Services" className="p-16 md:px-16 w-full bg-gradient-to-br from-primaryGradient to-secondaryGradient">
            <div className="flex justify-center items-center">
                <div className="text-center w-full md:w-[50%]">
                    <h1 className="text-4xl font-bold text-white py-4">What We Do?</h1>
                    <p className="text-white">We excel in Engineering and Web Services. Our Engineering division ensures precision across disciplines. While our Web Services provide tailored solutions from design to digital marketing. Partner with us for integrated success in both realms.</p>
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
                        <div className="text-white">
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
                        <div className="text-white">
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
                        <div className="text-white">
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
                        <div className="text-white">
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
                        <div className="text-white">
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
                        <div className="text-white">
                            <p>We analyze, design, evaluate diverse structures using advanced techniques. Ensuring safety, stability, durability, and cost-efficiency, we excel in tailored solutions for projects, surpassing expectations.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center">
                <div class="w-[80%]">
                    <hr class="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
            </div>

        </section>

    )
}

export default Services;