import React from 'react';
import { useForm } from '@formspree/react';
import TransitionComponent from '../Animations/TransitionUp';
import TransitionRight from '../Animations/TransitionRight';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
    const [state, handleSubmit] = useForm('xnnaawyq');

    return (
        <section id="Contact" className="pb-16">
            <div className="container mx-auto">
                <TransitionComponent>
                    <h2 className="text-primary text-center text-4xl py-8 font-bold">Get in Touch</h2>
                </TransitionComponent>
                <TransitionRight>
                    {/* Flex container to align the Google Maps and Calendly widget side by side */}
                    <div className="md:flex items-start px-2 space-y-8 md:space-y-0 md:space-x-4">
                        
                        {/* Google Maps Iframe */}
                        <div className="w-full md:w-1/2 h-[300px] sm:h-[550px]">
                            <iframe
                                title="google-maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d303586.10943634214!2d-113.82236913937047!3d53.52622728548957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a0224580deff23%3A0x411fa00c4af6155d!2sEdmonton%2C%20AB%2C%20Canada!5e0!3m2!1sen!2sin!4v1714545978552!5m2!1sen!2sin"
                                className="border-0 w-full h-full rounded-lg"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen>
                            </iframe>
                        </div>

                        {/* Calendly Widget */}
                        <div className="w-full md:w-1/2 sm:h-[550px] lg:h-[650px] bg-white rounded-lg overflow-hidden">

                            <InlineWidget
                                url="https://calendly.com/connect-eutact/15-minute-exploration?hide_gdpr_banner=1"
                                pageSettings={{
                                    hideEventTypeDetails: true,
                                    hideLandingPageDetails: false,
                                }}
                            />
                        </div>
                    </div>
                </TransitionRight>
            </div>
        </section>
    );
};

export default Contact;
