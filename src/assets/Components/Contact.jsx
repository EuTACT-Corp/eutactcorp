

const Contact = () => {
    return (
        <section id="Contact" className="pb-16">
            <div className="container mx-auto py-10">
                <h2 className="text-primary text-center text-3xl py-8 font-bold">Get in Touch</h2>
                <div className="md:flex justify-between items-center">
                    <div className="w-full md:w-1/2 h-[300px] sm:h-[450px]">
                        <iframe
                            title="google-maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303586.10943634214!2d-113.82236913937047!3d53.52622728548957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1714545978552!5m2!1sen!2sin"
                            className="border-0 w-full h-full"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" allowFullScreen></iframe>
                    </div>

                    <div className="w-full mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-primaryGradient px-4 lg:px-8 py-8 overflow-y-auto">
                        <form className="w-full">
                            <div className="mb-5">
                                <input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="w-full p-3 focus:outline-none rounded-md"
                                    required />
                            </div>
                            <div className="mb-5">
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="w-full p-3 focus:outline-none rounded-md" required
                                />
                            </div>
                            <div className="mb-5">
                                <input
                                    id="subject"
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full p-3 focus:outline-none rounded-md"
                                    required />
                            </div>
                            <div className="mb-5">
                                <textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    rows={3}
                                    placeholder="Write your message"
                                    className="w-full p-3 focus:outline-none rounded-md"
                                    required />
                            </div>

                            <button type="submit" className="w-full p-3 focus:outline-none rounded-md bg-txtDarkColor text-white hover:bg-veryDarkColor text-center ease-linear duration-150">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Contact; 