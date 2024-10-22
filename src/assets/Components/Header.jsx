import React from "react";
import { Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import EutactLogo from "../Images/eutactlogo.png";
import { useEffect, useState } from "react";

function NavList({ onClick }) {
    return (
        <ul className="my-2 flex flex-col justify-end items-end gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
            {["Home", "About", "Services", "Contact"].map((item) => (
                <Typography
                    key={item}
                    as="li"
                    variant="medium"
                    color="white"
                    className="p-1 font-medium"
                >
                    <a
                        href={`#${item}`}
                        className="flex items-center transition-transform ease-in-out delay-100 lg:hover:scale-105 lg:duration-300"
                        onClick={onClick} // Close the menu when a link is clicked on mobile
                    >
                        {item}
                    </a>
                </Typography>
            ))}
        </ul>
    );
}

const Header = () => {
    const [openNav, setOpenNav] = useState(false);
    const [navbarBackground, setNavbarBackground] = useState("");

    const handleWindowResize = () => {
        if (window.innerWidth >= 960) {
            setOpenNav(false); // Automatically close menu on larger screens
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleWindowResize);
        handleScroll(); // Handle scroll on component mount

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setNavbarBackground(
            isScrolled ? "bg-primaryGradient bg-opacity-50 backdrop-blur-lg" : ""
        );
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`z-50 fixed w-full ${navbarBackground} transition-all duration-300 ease-in-out`}>
            <div className="flex items-center justify-between px-6 py-3 sm:px-10 sm:py-4 md:px-20 w-full">
                {/* Logo Section */}
                <div>
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
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    )}
                </IconButton>
            </div>

            {/* Collapsible NavList for smaller screens */}
            <Collapse open={openNav} className="lg:hidden">
                <div className="block bg-primaryGradient px-5">
                    <NavList onClick={() => setOpenNav(false)} />
                </div>
            </Collapse>
        </nav>
    );
};

export default Header;
