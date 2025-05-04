import { navLinks } from "../../../data";
import { NavLink } from "react-router";

function NavItem({ onCloseBurger }: { onCloseBurger?: () => void }) {
    return (
        <>
            {navLinks.map((link) => (
                <NavLink
                    to={link.title === "Home" ? "/" : `/${link.title}`}
                    key={link.id}
                    onClick={onCloseBurger}
                    className={({ isActive }) =>
                        `font-Poppins cursor-pointer ${isActive
                            ? "text-primary font-[500]"
                            : " text-[#8d8d8d] xl:text-primary"
                        }`
                    }
                >
                    <div className="flex items-center gap-[10px] xl:mr-7">
                        {link.title}
                    </div>
                </NavLink>
            ))}
        </>
    );
}

export default NavItem;
