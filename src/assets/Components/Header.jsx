import React from "react";
import {
    Collapse,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import EutactLogo from "../Images/eutactlogo.png"

import { useEffect, useState } from "react";

function NavList() {
    return (
        <ul className="my-2 flex flex-col justify-end items-end gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-20">
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-txtDarkColor transition-colors">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-txtDarkColor transition-colors">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-txtDarkColor transition-colors">
                    Services
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="white"
                className="p-1 font-medium"
            >
                <a href="#" className="flex items-center hover:text-txtDarkColor transition-colors">
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
        setNavbarBackground(isScrolled ? "bg-primaryGradient" : ""); // Set navbar background to primaryGradient if scrolled, otherwise reset it
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`z-50 fixed mx-auto w-screen px-8 sm:px-12 md:px-28 py-6 ${navbarBackground}`}>
            <div className="flex items-center justify-between text-blue-gray-900">
                <div>
                    <a href="">
                        <img src={EutactLogo} className="w-28" alt="" />
                    </a>
                </div>

                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => {
                        setOpenNav(!openNav);
                        setNavbarBackground(openNav ? "" : 'bg-primaryGradient');
                    }}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
            </Collapse>
        </nav>
    );
}

export default Header;
