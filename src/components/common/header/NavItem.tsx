import React from "react";
import { navLinks } from "../../../data";
import { NavLink } from "react-router";
import { useState } from "react";

function NavItem() {
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
    return (
        <>
            {navLinks.map((link) => {
                return (
                    <NavLink
                        to={link.title === "Home" ? "/" : `/${link.title}`}
                        key={link.id}
                        onClick={(e) => toggle(link.title, e)}
                        className={({ isActive }) =>
                            `font-Poppins cursor-pointer ${isActive
                                ? "text-primary font-[500]"
                                : " text-[#8d8d8d] xl:text-primary"
                            }`
                        }
                    >
                        <div className="flex items-center gap-[10px] xl:mr-7">
                            {link.title}
                            {link.imageM && (
                                <img
                                    className={`${(isServicesOpen && link.title === "Services") ||
                                        (isShopOpen && link.title === "Shop")
                                        ? "rotate-180"
                                        : ""
                                        } xl:hidden`}
                                    src={link?.imageM}
                                />
                            )}{link.imageD && (
                                <img
                                    className={`${(isServicesOpen && link.title === "Services") ||
                                        (isShopOpen && link.title === "Shop")
                                        ? "rotate-180"
                                        : ""
                                        } xl:inline`}
                                    src={link?.imageD}
                                />
                            )}
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
        </>
    );
}

export default NavItem;
