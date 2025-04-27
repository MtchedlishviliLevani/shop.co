import close from "../assets/icons/close.svg";
import NavItem from "./NavItem";
function MobileMenu({ onCloseBurger }: { onCloseBurger: () => void }) {

    return (
        <div className="fixed top-0 left-[50%] w-full h-full translate-x-[-50%] transition-all duration-75 bg-white z-50 py-6">
            <div className="global-container flex flex-col gap-[72px] ">
                <img onClick={onCloseBurger} src={close} className="w-5 h-4 cursor-pointer" alt="" />
                <div className="flex flex-col gap-8">
                    <NavItem />
                </div>
                <button className="mr-auto">Sign Up Now</button>
            </div></div>
    );
}

export default MobileMenu;
