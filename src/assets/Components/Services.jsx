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
                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-14">
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
                                <img className="w-full" src={ConsultSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Engineering Consulting</h3>
                        </div>
                        <div className="text-white">
                            <p>We offer expert consulting in Civil, Architectural, Mechanical, and Piping engineering. From feasibility to implementation, we tailor strategic solutions.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-14">
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
                                <img className="w-full" src={ConsultSVG} alt="" />
                            </div>
                            <h3 className="text-txtDarkColor text-xl font-medium p-3">Engineering Consulting</h3>
                        </div>
                        <div className="text-white">
                            <p>We offer expert consulting in Civil, Architectural, Mechanical, and Piping engineering. From feasibility to implementation, we tailor strategic solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Services;