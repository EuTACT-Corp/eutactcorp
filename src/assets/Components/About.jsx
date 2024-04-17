const About = () => {
    return (
        <section id="About" className="w-full bg-white">
            <div className="md:px-8 md:py-8 lg:px-16 lg:py-16 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-8">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl">Who we are?</h2>
                    <p className="text-sm md:text-base lg:text-lg">We are a team of experienced designers and developers, who thrive to build top quartile and unique products. Helping business owners, keep it simple, achieve the goal at a competitive cost and taking ownership with sustainability mindset are our core values.</p>
                </div>
                <div className="flex flex-wrap justify-center items-center w-full md:w-1/2">
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">100+</h1>
                        <h5 className="text-xs md:text-sm lg:text-base">Successful Project</h5>
                    </div>
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">5+</h1>
                        <h5 className="text-xs md:text-sm lg:text-base">Years of Experience</h5>
                    </div>
                    <div className="text-center p-5 w-1/2 md:w-1/3">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl">1200+</h1>
                        <h5 className="text-xs md:text-sm lg:text-base">Worldwide Clients</h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
