import NotificationBar from "../../../UI/NotificationBar"
import menu from "../../../assets/icons/menu.svg"
import search from "../../../assets/icons/search.svg"
import cart from "../../../assets/icons/cart.svg"
import user from "../../../assets/icons/user.svg"
import MobileMenu from "./MobileMenu"
import { useState } from "react"
import NavItem from "./NavItem"
import { useNavigate } from "react-router";
import { Link, useLocation } from "react-router"

function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    function closeBurger() {
        setIsBurgerOpen(false);
    }
    function openBurger() {
        setIsBurgerOpen(true);
    }
    const location = useLocation();
    // border is needed everywhere except home page
    const isNeededBorder = location.pathname !== "/"
    const navigate = useNavigate();
    return (
        <header>
            <NotificationBar />
            <div className="global-container">
                <div className={`flex justify-between py-6 items-center xl:gap-10 xl:justify-start ${isNeededBorder && "border-b border-solid border-primary/10"} `}>
                    <div className="flex items-center gap-[18px]  xl:self-start">
                        <img src={menu} onClick={openBurger} alt="menu" className="cursor-pointer xl:hidden" />
                        <Link to={"/"}> <span className="font-[Fontspring] text-[25px] mt-[-3px] xl:text-[32px]">SHOP.CO</span>
                        </Link>
                    </div>
                    <div className="hidden xl:flex flex-1 justify-center gap-10 items-center xl:self-start">
                        <div className="xl:flex xl:gap-6 "><NavItem /></div>
                        <div className="flex bg-Tertiary rounded-[62px] py-3 pl-4 gap-3 items-center max-w-[577px] w-[90%] xl:self-start xl:max-w-[577px]">
                            <img src={search} alt="search" />
                            <input className="w-full outline-none" placeholder="Search for products..." /></div>
                    </div>

                    <div className="flex gap-[12px] items-center xl:self-start xl:mt-2">
                        <img src={search} alt="search" className="xl:hidden" />
                        <img src={cart} alt="cart" onClick={() => navigate("/cart")} className=" cursor-pointer" />
                        <img src={user} alt="user" onClick={() => navigate("/login")} className="cursor-pointer " />
                    </div>

                </div>
            </div>
            <nav>
                <MobileMenu onCloseBurger={closeBurger} isOpen={isBurgerOpen} />
            </nav>
        </header>
    )
}

export default Header
