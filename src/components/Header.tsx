import NotificationBar from "../UI/NotificationBar"
import menu from "../assets/icons/menu.svg"
import search from "../assets/icons/search.svg"
import cart from "../assets/icons/cart.svg"
import user from "../assets/icons/user.svg"
import MobileMenu from "./MobileMenu"
import { useState } from "react"

function Header() {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    function openBurger() {
        setIsBurgerOpen(true);
    }
    return (
        <header>
            <NotificationBar />
            <div className="global-container">
                <div className="flex justify-between py-6 items-center">
                    <div className="flex items-center gap-[18px]">
                        <img src={menu} onClick={openBurger} alt="menu" className="cursor-pointer" />
                        <span className="font-[Fontspring] text-[25px] mt-[-3px]">SHOP.CO</span>
                    </div>

                    <div className="flex gap-[12px] items-center">
                        <img src={search} alt="search" className="" />
                        <img src={cart} alt="cart" className="" />
                        <img src={user} alt="user" className="" />
                    </div>

                </div>
            </div>
            <nav>

                <ul>
                    {isBurgerOpen &&
                        <MobileMenu />}
                </ul>

            </nav>
        </header >
    )
}

export default Header
