import React from 'react';
import EutactLogo from '../Images/eutactlogo.png';
import Footer from './Footer';

const PrivacyPolicy = () => {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Header Navigation */}
            <nav className="z-50 fixed w-full bg-primaryGradient">
                <div className="flex items-center justify-between px-6 py-3 sm:px-10 sm:py-4 md:px-20 w-full">
                    {/* Logo Section */}
                    <div>
                        <a href="/">
                            <img src={EutactLogo} className="w-16 sm:w-20 md:w-28" alt="Eutact Logo" />
                        </a>
                    </div>

                    {/* Home Button */}
                    <div>
                        <a href="/" className="text-white font-medium text-sm sm:text-base">
                            Home
                        </a>
                    </div>
                </div>
            </nav>

            {/* Main Privacy Policy Content */}
            <div className="container mx-auto p-4 mt-20 sm:mt-24 md:mt-28 flex-grow">
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">Privacy Policy</h1>
                <p className="text-xs sm:text-sm mb-2 text-center sm:text-left">Last Updated: 01/10/2024</p>

                <p className="mb-4 text-sm sm:text-base">
                    At <strong>EuTACT Corp.</strong> (“we,” “us,” or “our”), we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and protect your information in compliance with applicable Canadian privacy laws, including the Personal Information Protection and Electronic Documents Act (PIPEDA).
                </p>

                <h2 className="text-lg sm:text-xl font-semibold mb-2">1. Information We Collect</h2>
                <p className="mb-4 text-sm sm:text-base">
                    We collect the following types of personal information when you interact with us:
                </p>
                <ul className="list-disc ml-4 sm:ml-6 mb-4 text-sm sm:text-base">
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details.</li>
                    <li><strong>Contact Information:</strong> Data provided through emails, phone calls, or Google forms during the project initiation process.</li>
                </ul>

                <h2 className="text-lg sm:text-xl font-semibold mb-2">2. How We Collect Your Information</h2>
                <ul className="list-disc ml-4 sm:ml-6 mb-4 text-sm sm:text-base">
                    <li><strong>Google Forms:</strong> For gathering project details and contact information.</li>
                    <li><strong>Email/Phone Communication:</strong> For follow-ups, inquiries, and customer service.</li>
                    <li><strong>Calls:</strong> For providing consultations and addressing client needs.</li>
                </ul>

                <h2 className="text-lg sm:text-xl font-semibold mb-2">3. Purpose of Data Collection</h2>
                <p className="mb-4 text-sm sm:text-base">
                    We use the collected information for the following purposes:
                </p>
                <ul className="list-disc ml-4 sm:ml-6 mb-4 text-sm sm:text-base">
                    <li>To improve the quality of our services and ensure the effective delivery of projects.</li>
                    <li>To communicate with you regarding your projects, updates, and related services.</li>
                    <li>To process payments for services rendered.</li>
                </ul>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>4. Data Sharing and Disclosure</h2>
                <p className='mb-4 text-sm sm:text-base'>
                    EuTACT Corp. does not share your personal data with any third-party services or organizations unless required by law. We maintain a strict policy of confidentiality and ensure that your information is handled solely for the purposes outlined above.
                </p>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>5. Data Retention</h2>
                <p className='mb-4 text-sm sm:text-base'>
                    We retain personal information only for the duration of the project as outlined in the service agreement. Once the project is completed, your information will be securely deleted or archived in accordance with the terms agreed upon in the contract.
                </p>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>6. User Rights</h2>
                <p className='mb-4 text-sm sm:text-base'>You have the right to:</p>
                <ul className='list-disc ml-4 sm:ml-6 mb-4 text-sm sm:text-base'>
                    <li>Access your personal information.</li>
                    <li>Request corrections to any inaccuracies in your information.</li>
                    <li>Request the deletion of your personal information.</li>
                </ul>
                <p className='mb-4 text-sm sm:text-base'>To exercise these rights, please contact us via email at <strong>contact@eutact.com</strong></p>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>7. Security of Your Information</h2>
                <p className='mb-4 text-sm sm:text-base'>
                    We are committed to safeguarding your personal information. We do not store client data beyond its necessary use for projects. Any data provided is securely handled and will be disposed of once the project is completed.
                </p>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'>8. International Data Transfers</h2>
                <p className='mb-4 text-sm sm:text-base'>
                    We do not transfer personal data outside of Canada. All data processing occurs within the country to ensure compliance with Canadian privacy laws.
                </p>

                <h2 className='text-lg sm:text-xl font-semibold mb-2'> 9. Changes to This Privacy Policy</h2>
                <p className='mb-4 text-sm sm:text-base'>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any modifications will be posted on our website, and the date of the latest version will be indicated at the top of this page.
                </p>

                <h2 className="text-lg sm:text-xl font-semibold mb-2">10. Contact Us</h2>
                <p className="mb-4 text-sm sm:text-base">
                    If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us at:
                </p>
                <ul className="list-disc ml-4 sm:ml-6 mb-4 text-sm sm:text-base">
                    <li><strong>Email:</strong> contact@eutact.com</li>
                    <li><strong>Phone:</strong> +1 (587) 372-7070</li>
                    <li><strong>Address:</strong> Edmonton, AB, T6X 0E9, Canada</li>
                </ul>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
