import { navLinks } from "../data";
import close from "../assets/icons/close.svg";
import { useState } from "react";
import { NavLink } from "react-router";
function MobileMenu() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isShopOpen, setIsShopOpen] = useState(false);
    function toggle(title: string, e: React.MouseEvent) {
        // Prevent navigation when toggling submenus
        if (title === "Services" || title === "Shop") {
            e.preventDefault();

            if (title === "Services") {
                setIsServicesOpen(!isServicesOpen);
                if (isShopOpen) setIsShopOpen(false);
            } else if (title === "Shop") {
                setIsShopOpen(!isShopOpen);
                if (isServicesOpen) setIsServicesOpen(false);
            }
        }
    }
    console.log(isServicesOpen, isShopOpen);

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 py-6">
            <div className="global-container flex flex-col gap-[72px] ">
                <img src={close} className="w-5 h-4 cursor-pointer" alt="" />
                <div className="flex flex-col gap-8">
                    {navLinks.map((link) => {
                        return (
                            <NavLink
                                to={link.title === "Home" ? "/" : `/${link.title}`}
                                key={link.id}
                                onClick={(e) => toggle(link.title, e)}
                                className={({ isActive }) =>
                                    `font-Poppins cursor-pointer ${isActive
                                        ? "text-primary font-[500]"
                                        : " text-[#8d8d8d]"
                                    }`
                                }                        >
                                <div className="flex items-center gap-[10px]">
                                    {link.title} {link.image && <img className={`${(isServicesOpen && link.title === "Services" || isShopOpen && link.title === "Shop") ? "rotate-180" : ""}`} src={link?.image} />}
                                </div>

                                {link.submenu &&
                                    ((link.title === "Services" && isServicesOpen) ||
                                        (link.title === "Shop" && isShopOpen)) && (
                                        <div className="mt-6 flex flex-col gap-6">
                                            {link.submenu?.map((item) => {
                                                return (
                                                    <NavLink
                                                        to={`/${link.title}/${item.title}`}
                                                        className={({ isActive }) =>
                                                            `font-Poppins cursor-pointer gap-[10px] items-center ml-4 flex ${isActive
                                                                ? "text-primary font-[500]"
                                                                : " text-[#8d8d8d]"
                                                            }`

                                                        }
                                                        key={item.id}
                                                    >
                                                        {item.title}
                                                    </NavLink>
                                                );
                                            })}
                                        </div>
                                    )}
                            </NavLink>
                        );
                    })}


                </div>
                <button className="mr-auto">Sign Up Now</button>
            </div></div>
    );
}

export default MobileMenu;
