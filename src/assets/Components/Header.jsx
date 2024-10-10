import React from "react";
import {
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import EutactLogo from "../Images/eutactlogo.png"

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


function NavList() {
    return (
        <ul id="list-nav" className="my-2 flex flex-col justify-end items-end gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
            <Typography
                as="li"
                variant="medium"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#Home" className="flex items-center hover:text-txtDarkColor transition ease-in-out delay-100 hover:-translate-y-0.1 hover:scale-125 duration-300 ...">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#About" className="flex items-center hover:text-txtDarkColor transition ease-in-out delay-100 hover:-translate-y-0.1 hover:scale-125 duration-300 ...">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#Services" className="flex items-center hover:text-txtDarkColor transition ease-in-out delay-100 hover:-translate-y-0.1 hover:scale-125 duration-300 ...">
                    Services
                </a>
            </Typography>
            <Typography
                as="li"
                variant="medium"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#Contact" className="flex items-center hover:text-txtDarkColor transition ease-in-out delay-100 hover:-translate-y-0.1 hover:scale-125 duration-300 ...">
                    Contact
                </a>
            </Typography>
        </ul>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = React.useState(false);
    const [navbarBackground, setNavbarBackground] = React.useState("");

    const handleWindowResize = () =>
        window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleScroll(); // Call the handleScroll function on component mount

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setNavbarBackground(isScrolled ? "bg-primaryGradient bg-opacity-50 backdrop-blur-lg" : ""); // Set navbar background to primaryGradient if scrolled, otherwise reset it
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav id="navbar" className={`z-50 fixed w-full ${navbarBackground}`}>
            <div className="flex items-center justify-between px-4 py-2 w-full">
                {/* Logo Section */}
                <div className="Image-Container-Header">
                    <a href="/">
                        <img src={EutactLogo} className="w-20 md:w-28" alt="Eutact Logo" />
                    </a>
                </div>

                {/* NavList for larger screens */}
                <div className="hidden lg:block">
                    <NavList />
                </div>

                {/* Hamburger Menu Icon for smaller screens */}
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => {
                        setOpenNav(!openNav);
                        setNavbarBackground(openNav ? "" : "bg-primaryGradient");
                    }}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            {/* Collapsible NavList for smaller screens */}
            <Collapse open={openNav}>
                <div className="block lg:hidden">
                    <NavList />
                </div>
            </Collapse>
        </nav>


    );
}

export default Header;
